# 在每个语言的目录里运行（例如 zh-cn/ 或 en/），删除未被引用的图片
import os
import re


def get_image_references_in_md(md_file_path):
    """读取 md 文件并提取所有引用的图片文件名"""
    referenced_images = set()
    try:
        with open(md_file_path, "r", encoding="utf-8") as f:
            content = f.read()
            # 匹配 Markdown 图片语法 ![alt](image_path) 和 HTML 图片标签 <img src="image_path">
            img_patterns = [
                r"!\[.*?\]\((.*?)\)",  # Markdown 图片语法
                r'<img[^>]+src=["\'](.*?)["\']',  # HTML img 标签
            ]
            for pattern in img_patterns:
                matches = re.findall(pattern, content)
                for match in matches:
                    # 提取文件名（去掉路径部分）
                    filename = os.path.basename(match.strip())
                    referenced_images.add(filename)
    except Exception as e:
        print(f"Error reading {md_file_path}: {e}")
    return referenced_images


def find_unreferenced_images(root_dir, images_dir):
    """遍历 images 文件夹，检查哪些图片未被 md 文件引用"""
    # 获取 images 文件夹中的所有文件
    image_files = set()
    for root, _, files in os.walk(images_dir):
        for file in files:
            if file.lower().endswith((".jpg", ".png", ".webp", ".gif")):
                image_files.add(file)

    # 遍历根目录下的所有 md 文件，收集引用的图片
    referenced_images = set()
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".md"):
                md_path = os.path.join(root, file)
                referenced_images.update(get_image_references_in_md(md_path))

    # 找出未被引用的图片
    unreferenced_images = image_files - referenced_images
    return unreferenced_images


def delete_unreferenced_images(images_dir, unreferenced_images):
    """删除未被引用的图片文件"""
    for img in unreferenced_images:
        img_path = os.path.join(images_dir, img)
        try:
            os.remove(img_path)
            print(f"Deleted: {img_path}")
        except Exception as e:
            print(f"Error deleting {img_path}: {e}")


def main():
    # 获取脚本所在目录作为根目录
    root_dir = os.path.dirname(os.path.abspath(__file__))
    images_dir = os.path.join(root_dir, "images")

    # 检查 images 文件夹是否存在
    if not os.path.exists(images_dir):
        print(f"错误: {images_dir} 不存在！")
        return

    # 查找未被引用的图片
    unreferenced_images = find_unreferenced_images(root_dir, images_dir)

    if not unreferenced_images:
        print("所有图片都已被引用，无需删除。")
        return

    # 打印未被引用的图片并确认删除
    print("\n以下图片未被任何 md 文件引用：")
    for img in unreferenced_images:
        print(img)

    confirm = input("\n是否要删除这些图片？(y/n): ").strip().lower()
    if confirm == "y":
        delete_unreferenced_images(images_dir, unreferenced_images)
        print("删除完成。")
    else:
        print("取消删除操作。")


if __name__ == "__main__":
    main()
