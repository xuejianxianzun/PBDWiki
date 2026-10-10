# AGENTS.md

本文件为 AI 代理（Agent）在本仓库工作时提供约定和指引。

## 项目概述

本仓库是浏览器扩展 [Powerful Pixiv Downloader](https://github.com/xuejianxianzun/PixivBatchDownloader) 的 Wiki 文档站点，使用 [docsify](https://docsify.js.org/) 构建，托管于 GitHub Pages。

- 站点地址：https://xuejianxianzun.github.io/PBDWiki
- 当前支持两种语言：简体中文（`zh-cn`）和英语（`en`）
- 文档内容以简体中文为主，英语为翻译版本，两者需保持同步
- 设置与按钮相关的内容由 `build/` 目录下的构造系统从下载器仓库自动生成

## 目录结构

```
build/                             # 构造系统（从下载器读取数据、生成设置/按钮相关文档）
docs/
├── _sidebar.md                    # 根侧边栏（语言切换入口）
├── index.html                     # docsify 入口页面
├── README.md                      # 站点首页（不参与翻译）
├── zh-cn/                         # 简体中文文档（源语言）
│   ├── _sidebar.md                # 中文导航目录（由构建更新设置/按钮部分）
│   └── ...                        # 各页面 markdown
├── en/                            # 英语文档（翻译版）
│   ├── _sidebar.md                # 英语导航目录（由构建更新设置/按钮部分）
│   └── ...                        # 各页面 markdown（与 zh-cn 一一对应）
├── template/                      # 手工内容的源（构建的输入，重要！）
│   ├── zh-cn/desc/<no|id>.md      # 每个设置项/按钮的说明文字
│   ├── en/desc/<no|id>.md         # 同上（英语版）
│   ├── <lang>/_sidebar.md         # 总目录底稿
│   └── <lang>/...                 # 其它页面（含 [setting:N] 等链接标记）
├── data/                          # 设置项与按钮的元数据（由构建生成）
│   ├── options_data.json          # 所有设置项的分类、路径、多语言名字
│   ├── buttons_data.json          # 所有按钮的分类、路径、多语言名字
│   └── 把简体中文内容翻译成英语的说明.md  # 翻译规则（重要！）
├── images/                        # 站点级图片（logo、favicon）
├── js/                            # docsify 定制脚本（sidebar-collapse.js、form.js、footer.js）
├── style/                         # 样式（style.less 编译为 style.css）
└── clear_unused_images.py         # 清理未使用图片的脚本
```

## 常用命令

```bash
# 主构建：从下载器读取数据，重建设置/按钮相关文档（详见 build/README.md）
npm run build

# 本地预览（需要先全局安装 docsify-cli）
npm i docsify-cli -g
npm run serve        # 等价于 docsify serve docs

# 编译样式
npm run less

# 编译 TypeScript
npm run ts
```

## 构造系统（build/）

- 运行 `npm run build` 时，从本地下载器仓库（路径在 `build/config.json` 的 `pbdRepo`）读取数据，重建 `docs/<lang>/` 下的设置/按钮文件夹、页面、菜单、侧边栏，并展开链接标记、写回两个数据源 JSON。如果该路径不存在，可以尝试从 Powerful Pixiv Downloader 的 Github 仓库里读取相关文件。
- **源与产物**：手工内容都放在 `docs/template/` 下（说明文字、其它页面、侧边栏底稿等）；`docs/<lang>/` 下与设置/按钮相关的内容是构建产物，**不要直接编辑**（会被覆盖）。
- **说明文字**：在 `docs/template/<lang>/desc/<no|id>.md` 里维护；文件第一行为 `[fetch]` 时会从下载器获取帮助文字（HTML 转 Markdown）。构建报告里会列出说明为空的条目。
- **链接标记**：文档里引用设置/按钮时使用 `[setting:数字编号]` 或 `[button:按钮id]`；要链接到页面内的某个标题（如说明文字里的 `###` 小标题）时，用 `[setting:32?id=标题原文]` 形式（`?id=` 的值会按 docsify 规则 slugify 后作为锚点）。构建时自动展开为最新名称和路径的链接，不要在设置/按钮之间写死完整链接。
- **本机运行构建的注意事项**（沙箱删除限制、提权与"预尝试"行为）见 `build/README.md` 文末「本机环境注意事项」。
- 详细说明与命令参数见 `build/README.md`；每次运行的报告在 `build/reports/` 下。

## 文档维护约定

### 中英同步

- 每个中文页面在 `docs/en/` 下都有对应的英语页面，对应关系由两份 `_sidebar.md` 的链接顺序建立。
- **修改中文页面后，必须同步更新对应的英语页面**，同步和翻译规则详见 `docs/data/把简体中文内容翻译成英语的说明.md`（术语表、翻译规则、超链接处理都在其中，以该文件为准）。通常我会先编辑中文页面，然后让 AI 使用“同步修改”模式来同步修改对应的英语页面。
- 说明文字的英语版本也需同步维护：`docs/template/en/desc/` 下与中文同名的文件。
- 不在 `_sidebar.md` 里的文件不需要翻译（例如 `docs/README.md`）。
- 同步更改时：删除英语中被移除的内容；新增/变化的内容翻译修改所在的**整段**文字（不是只翻译变化的词）。

### 翻译要点

- 术语遵循术语表，例如：作品→`work`、抓取→`crawl`（勿用 scraping）、收藏→`bookmark`、动图→`Ugoira` 等。
- 中文引号 `"` `"` 翻译为英语引号 `"`。
- 不翻译：非中文文本、三个反引号包裹的代码块、html 代码、`data-xztext` 属性值、`[setting:N]` / `[button:id]` 标记。
- 超链接翻译：语言路径 `zh-cn/` → `en/`；页面路径和名字通过 `docs/data/options_data.json`（设置）或 `buttons_data.json`（按钮）查找；`?id=` 后的文本需小写、空格转 `-`、`'` 转 `39`、忽略 `()` `,` `.`。
- 设置/按钮相关的页面、菜单、侧边栏由构建生成，无需（也不要）逐字翻译；需要翻译的是 `docs/template/` 下的说明文字与其它页面。

### 元数据文件

- `options_data.json` / `buttons_data.json` 是设置项和按钮的唯一数据来源，由 `npm run build` 从下载器仓库自动生成：
  - `page`：该分类在 wiki 里的页面路径（区分语言）。
  - `names`：设置项/按钮的多语言名字，`name["zh-cn"]` 与 `name.en` 一一对应。

注意：这两个元数据文件由构建生成，AI 不要手动修改里面的内容。

### 其他

- `docs/template/<lang>/_sidebar.md` 里的设置/按钮链接会由构建更新，其它链接（安装、使用技巧等）保持原样；新增其它页面后要更新对应语言的底稿。
- 图片只在 `docs/template/` 下维护：`docs/template/<lang>/images/`（语言特有）、`docs/template/publicImages/`（两语言共享）；`docs/images/` 是站点级图片（logo/favicon），不属于构建范围。构建**不复制图片**，而是把产物 md 里的图片引用自动改写为指向 `template/`（产物里没有 `<lang>/images`、`publicImages` 目录）；模板里按"页面位置"写相对路径即可（设置/按钮页面 `../images/`、`../../publicImages/`，顶层页面 `images/`、`../publicImages/`）。清理未使用的图片用 `docs/clear_unused_images.py`（在 docs 下运行 `python clear_unused_images.py`）：语言图按同语言的 md 检查、公共图按全部语言的 md 检查，列出后确认删除。
- `docs/js/form.ts` 是浏览器端增强脚本（美化表单控件、tooltip、`.toggleArea` 提示区域展开等），修改后要运行 `npm run ts` 编译为 `form.js`（**不要直接编辑 form.js**）；`footer.js`、`sidebar-collapse.js` 是直接维护的脚本。
- 提交信息习惯：版本更新类使用"更新到 X.Y.Z 版本"，阶段性提交使用"暂存"。
