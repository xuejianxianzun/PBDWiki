"""清除 docs/template 下未被引用的图片。

用法：在 docs 目录里执行（从其它位置执行也可以，脚本按自身位置定位）：
    python clear_unused_images.py

检查规则：
- template/<语言>/images/ 里的图片：只在该语言的 md 文件里检查，没被引用就视为未使用。
- template/publicImages/ 里的图片：在所有语言的 md 文件里检查，都没引用才算未使用。

未使用的图片会先列出来，输入 y 确认后才删除。
"""
import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_DIR = os.path.join(SCRIPT_DIR, "template")
PUBLIC_DIR_NAME = "publicImages"

# 参与检查的图片扩展名
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp", ".ico"}

# 匹配 Markdown 图片语法（![alt](path)）与 HTML img 标签
IMG_PATTERNS = [
    r"!\[.*?\]\((.*?)\)",
    r"""<img[^>]+src=["'](.*?)["']""",
]


def is_image_file(name):
    """是否是参与检查的图片文件"""
    return os.path.splitext(name)[1].lower() in IMAGE_EXTS


def extract_referenced_names(md_file_path):
    """读取一个 md 文件，返回它引用到的图片文件名（不含路径）的集合"""
    names = set()
    try:
        with open(md_file_path, encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print(f"读取失败：{md_file_path}：{e}")
        return names
    for pattern in IMG_PATTERNS:
        for match in re.findall(pattern, content):
            ref = match.strip()
            # 去掉 markdown 的 title（形如 path "title"）
            ref = re.sub(r'\s+"[^"]*"\s*$', "", ref).strip()
            # 外部地址不参与检查
            if ref.startswith(("http://", "https://", "//", "data:")):
                continue
            # 去掉查询串 / 锚点，取文件名
            ref = ref.split("?")[0].split("#")[0].replace("\\", "/")
            name = ref.split("/")[-1]
            if name:
                names.add(name)
    return names


def get_language_dirs():
    """template 下的语言目录（排除 publicImages 与隐藏目录）"""
    if not os.path.isdir(TEMPLATE_DIR):
        return []
    return sorted(
        d
        for d in os.listdir(TEMPLATE_DIR)
        if os.path.isdir(os.path.join(TEMPLATE_DIR, d))
        and d != PUBLIC_DIR_NAME
        and not d.startswith(".")
    )


def collect_referenced_names_by_lang():
    """扫描每个语言目录下的所有 md，返回 {语言: 引用到的文件名集合}"""
    refs_by_lang = {}
    for lang in get_language_dirs():
        names = set()
        for root, _, files in os.walk(os.path.join(TEMPLATE_DIR, lang)):
            for f in files:
                if f.lower().endswith(".md"):
                    names |= extract_referenced_names(os.path.join(root, f))
        refs_by_lang[lang] = names
    return refs_by_lang


def collect_image_dirs():
    """返回 [(标题, 图片目录, 用于检查的引用集合), ...]

    - 各语言自己的 images：只用该语言的引用集合检查
    - publicImages：用所有语言引用集合的并集检查
    """
    refs_by_lang = collect_referenced_names_by_lang()
    all_refs = set()
    for names in refs_by_lang.values():
        all_refs |= names

    dirs = []
    for lang, refs in refs_by_lang.items():
        path = os.path.join(TEMPLATE_DIR, lang, "images")
        if os.path.isdir(path):
            dirs.append((f"{lang}/images", path, refs))
    public_dir = os.path.join(TEMPLATE_DIR, PUBLIC_DIR_NAME)
    if os.path.isdir(public_dir):
        dirs.append((PUBLIC_DIR_NAME, public_dir, all_refs))
    return dirs


def list_image_files(dir_path):
    """列出目录里的图片文件（文件名排序）"""
    return [
        f
        for f in sorted(os.listdir(dir_path))
        if os.path.isfile(os.path.join(dir_path, f)) and is_image_file(f)
    ]


def main():
    if not os.path.isdir(TEMPLATE_DIR):
        print(f"错误：找不到目录 {TEMPLATE_DIR}")
        return

    dirs = collect_image_dirs()
    if not dirs:
        print("错误：template 下没有找到可检查的图片目录")
        return

    print("检查目录：template/")
    print("")
    unused = []
    for label, dir_path, refs in dirs:
        files = list_image_files(dir_path)
        unused_files = [f for f in files if f not in refs]
        print(f"{label}：{len(files)} 张图片，未使用 {len(unused_files)} 张")
        for f in unused_files:
            unused.append((label, f, os.path.join(dir_path, f)))

    if not unused:
        print("")
        print("所有图片都已被引用，无需删除。")
        return

    print("")
    print(f"以下 {len(unused)} 张图片未被引用：")
    for label, f, _ in unused:
        print(f"  - {label}/{f}")

    print("")
    confirm = input("是否要删除这些图片？(y/n): ").strip().lower()
    if confirm == "y":
        for label, f, path in unused:
            try:
                os.remove(path)
                print(f"已删除：template/{label}/{f}")
            except Exception as e:
                print(f"删除失败：template/{label}/{f}：{e}")
        print("删除完成。")
    else:
        print("取消删除操作。")


if __name__ == "__main__":
    main()
