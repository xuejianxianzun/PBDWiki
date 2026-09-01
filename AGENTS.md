# AGENTS.md

本文件为 AI 代理（Agent）在本仓库工作时提供约定和指引。

## 项目概述

本仓库是浏览器扩展 [Powerful Pixiv Downloader](https://github.com/xuejianxianzun/PixivBatchDownloader) 的 Wiki 文档站点，使用 [docsify](https://docsify.js.org/) 构建，托管于 GitHub Pages。

- 站点地址：https://xuejianxianzun.github.io/PBDWiki
- 当前支持两种语言：简体中文（`zh-cn`）和英语（`en`）
- 文档内容以简体中文为主，英语为翻译版本，两者需保持同步

## 目录结构

```
docs/
├── _sidebar.md                    # 根侧边栏（语言切换入口）
├── index.html                     # docsify 入口页面
├── README.md                      # 站点首页（不参与翻译）
├── zh-cn/                         # 简体中文文档（源语言）
│   ├── _sidebar.md                # 中文导航目录（文件对照表依据）
│   └── ...                        # 各页面 markdown
├── en/                            # 英语文档（翻译版）
│   ├── _sidebar.md                # 英语导航目录
│   └── ...                        # 各页面 markdown（与 zh-cn 一一对应）
├── data/                          # 设置项与按钮的元数据
│   ├── options_data.json          # 所有设置项的分类、路径、多语言名字
│   ├── buttons_data.json          # 所有按钮的分类、路径、多语言名字
│   ├── 把简体中文内容翻译成英语的说明.md  # 翻译规则（重要！）
│   └── getOptionsHtml.js          # 生成设置项 html 的辅助脚本
├── images/                        # 文档图片
├── js/                            # docsify 定制脚本（sidebar-collapse.js、form.js、footer.js）
├── style/                         # 样式（style.less 编译为 style.css）
└── clear_unused_images.py         # 清理未使用图片的脚本
```

## 常用命令

```bash
# 本地预览（需要先全局安装 docsify-cli）
npm i docsify-cli -g
docsify serve docs

# 编译样式
npm run less

# 编译 TypeScript
npm run ts
```

## 文档维护约定

### 中英同步

- 每个中文页面在 `docs/en/` 下都有对应的英语页面，对应关系由两份 `_sidebar.md` 的链接顺序建立。
- **修改中文页面后，必须同步更新对应的英语页面**，同步和翻译规则详见 `docs/data/把简体中文内容翻译成英语的说明.md`（术语表、翻译规则、超链接处理都在其中，以该文件为准）。通常我会先编辑中文页面，然后让 AI 使用“同步修改”模式来同步修改对应的英语页面。
- 不在 `_sidebar.md` 里的文件不需要翻译（例如 `docs/README.md`）。
- 同步更改时：删除英语中被移除的内容；新增/变化的内容翻译修改所在的**整段**文字（不是只翻译变化的词）。

### 翻译要点

- 术语遵循术语表，例如：作品→`work`、抓取→`crawl`（勿用 scraping）、收藏→`bookmark`、动图→`Ugoira` 等。
- 中文引号 `"` `"` 翻译为英语引号 `"`。
- 不翻译：非中文文本、三个反引号包裹的代码块、html 代码、`data-xztext` 属性值。
- 超链接翻译：语言路径 `zh-cn/` → `en/`；页面路径和名字通过 `docs/data/options_data.json`（设置）或 `buttons_data.json`（按钮）查找；`?id=` 后的文本需小写、空格转 `-`、`'` 转 `39`、忽略 `()` `,` `.`。

### 元数据文件

- `options_data.json` / `buttons_data.json` 是设置项和按钮的唯一数据来源：
  - `page`：该分类在 wiki 里的页面路径（区分语言）。
  - `names`：设置项/按钮的多语言名字，`name["zh-cn"]` 与 `name.en` 一一对应。

注意：这两个元数据文件是只读的数据源，AI 不要修改里面的内容。如果有需要的话我会自己修改。

### 其他

- 新增页面后要更新对应语言的 `_sidebar.md`。
- 图片存放在 `docs/images/`，可通过 `docs/clear_unused_images.py` 清理无用图片。
- 提交信息习惯：版本更新类使用"更新到 X.Y.Z 版本"，阶段性提交使用"暂存"。
