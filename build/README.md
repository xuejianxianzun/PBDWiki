# 构造系统（build）

本站的设置与按钮内容由本目录下的构造系统生成：从本地 [Powerful Pixiv Downloader](https://github.com/xuejianxianzun/PixivBatchDownloader) 仓库读取设置/按钮数据，重建 `docs/zh-cn`、`docs/en` 下的设置与按钮内容（文件夹、页面、菜单、侧边栏），展开文档里的链接标记，并重写图片引用路径——一条 `npm run build` 完成。

## 快速开始

常用命令：

```bash
npm run build     # 主构建（从下载器读取数据并重建文档）
npm run serve     # 本地预览：docsify serve docs
```

辅助命令：

```bash
node build/tasks/build.js --dry-run     # 只出报告，不写盘
node build/tasks/build.js --lang=zh-cn  # 只构建一种语言（调试用）
npm run build:check                     # 数据自检：重新生成两个数据源 JSON 并与 docs/data 对比
npm run build:verify                    # 产物校验：页面/菜单/侧边栏/标记/图片的完整性
```

> ⚠️ 本机（WorkBuddy 环境）运行构建的注意事项见文末「本机环境注意事项」。
> 每次运行的报告输出在 `build/reports/build-report.md`。

## 源与产物

**核心原则：`docs/template/` 是源，`docs/` 是产物。** 要改内容请改源文件，不要直接编辑产物（下次构建会被覆盖）。

```
下载器仓库（只读）                     PBDWiki
┌─────────────────────┐    ┌──────────────────────────────────┐
│ OptionConfigs.ts    │    │ docs/template/   ← 手工内容的源     │
│ ButtonConfigs.ts    │───▶│   ├ <lang>/desc/      说明文字     │
│ langText.ts         │    │   ├ <lang>/images/    语言图片     │
│ OptionsHtml.html/.ts│    │   ├ publicImages/     公共图片     │
│ Config / NamingRule │    │   ├ <lang>/...        其它页面     │
│ 按钮调用点（src/ts）  │    │   └ <lang>/_sidebar.md  目录底稿   │
└─────────────────────┘    └────────────────┬─────────────────┘
                                            │ npm run build
                                            ▼
                             ┌──────────────────────────────────┐
                             │ docs/<lang>/  设置/按钮页面、菜单   │
                             │ docs/<lang>/  其它页面、侧边栏      │
                             │ docs/data/*.json  数据源           │
                             └──────────────────────────────────┘
```

**手工内容的源**（`docs/template/`）：

- `<lang>/desc/<no|id>.md`：每个设置项/按钮的说明文字（可直接编辑，见下文「说明文字与 [fetch]」）
- `<lang>/...` 的其它页面（`常见问题.md`、`简介.md`、`安装/` 等）：作为原文提供，构建时展开链接标记后输出
- `<lang>/images/`、`publicImages/`：图片（见下文「图片处理」）
- `<lang>/_sidebar.md`：总目录的底稿；设置与按钮的部分用 `[settingsMenu]` / `[buttonsMenu]` 两个标记占位，构建时替换成链接列表（不要把设置/按钮的链接写死在底稿里，见下文「页面 / 菜单 / 侧边栏格式」）

**构建产物**：

- `docs/<lang>/` 下的设置/按钮文件夹、菜单、侧边栏、其它页面
- `docs/data/options_data.json`、`buttons_data.json`（设置项与按钮的元数据）

## build/ 目录

```
build/
├── config.json      # 配置：下载器仓库路径、语言、前缀、new 徽章天数、[fetch] 提示文字、覆盖表
├── lib/
│   ├── util.js          # 通用工具：文件读写、slugify、htmlToText、报告收集
│   ├── pbd-reader.js    # 从下载器仓库读取全部数据（TypeScript AST 解析）
│   ├── html-maker.js    # 设置项 html 与按钮 html 的生成
│   ├── md-maker.js      # 页面/菜单渲染、标记展开、HTML→Markdown
│   ├── image-path.js    # 图片引用路径的重写（指向 template）
│   └── state-parser.js  # 解析 wiki 现有内容（迁移与金标对比共用）
├── tasks/
│   ├── build.js         # 主构建
│   ├── check-data.js    # 数据自检（两个 JSON 的对比）
│   ├── verify.js        # 产物校验
│   ├── hash-docs.js     # 产物哈希清单（幂等测试用）
│   ├── golden-diff.js   # 金标对比：生成结果 vs 现有内容（开发期工具）
│   └── migrate-*.js     # 一次性迁移脚本（已完成，一般不需要再运行）
└── reports/         # 最近一次运行生成的报告
```

## 数据来源（下载器仓库）

构建时**只读**地访问本地下载器仓库（路径在 `build/config.json` 的 `pbdRepo`），从中读取：

| 读取的数据 | 来源 |
| --- | --- |
| 分类结构、条目顺序、名称 key | `src/ts/setting/OptionConfigs.ts`、`ButtonConfigs.ts` |
| 各语言文本（名称/提示/帮助文字） | `src/ts/langText.ts` |
| 设置项 html 代码、帮助文字 key（`data-msg`） | `src/ts/setting/OptionsHtml.html`（含 `OptionsHtml.ts` 的 5 处占位符替换） |
| 占位符替换用的值 | `src/ts/Config.ts`、`src/ts/setting/NamingRuleConfig.ts` |
| 按钮的 emphasis / intent / title / 文本 | 各模块的按钮创建调用点（`Tools.addBtn`、`addInitPageBtn` 等） |
| 个别运行时默认值 | `src/ts/setting/Settings.ts` 等 |
| new 徽章规则 | `OptionMeta.addedAt` + 90 天（天数在 config.json 的 `newBadgeDays`） |

复刻的几条关键规则（与下载器保持一致）：

- **数据源 JSON**：复刻 `Wiki.ts` 的 `outputDataSource`（页面路径、条目顺序、多语言名称；名称先经 htmlToText）。
- **占位符替换**：与 `OptionsHtml.ts` 完全一致——`__BOOKMARK_COUNT_LIMIT__`、`<!-- __NAMING_RULE_OPTION_LIST__ -->`、`__DEFAULT_NAME_RULE_FOR_ARTWORK__`、`<!-- __NAMING_RULE_HELP_HTML__ -->`、`__DEFAULT_NAME_RULE_FOR_NOVEL__` 共 5 处。注意 **`replace` / `replaceAll` 必须逐一对应**（有的标记在一个设置块里出现两次）。
- **`addInitPageBtn` 的强调级别**：每个页面类里第一个 brand 按钮 → `primary`，其余 → `secondary`。
- **new 徽章**：按 `addedAt` 是否在 90 天内，构建时实时计算。

## 构建流程

`npm run build` 按顺序做这些事（对每种语言）：

1. **读取下载器数据**（结构、文本、html、按钮调用点等）。
2. **处理说明文字**：读取 `desc/` 文件；`[fetch]` 开头则从下载器获取并回写；没有文件则按规则新建；空说明写入报告。
3. **展开说明文字里的链接标记**（与其它页面共用同一套展开规则）。
4. **删除**产物里旧的设置/按钮文件夹（只删 `设置-`/`按钮-`/`Settings-`/`Buttons-` 前缀的文件夹）。
5. **生成页面与菜单**：生成每个条目的 html（见「生成内容的转换规则」）→ 拼接说明文字 → 重写图片引用路径 → 写入页面文件；菜单文件按数据源生成链接列表。
6. **生成其它页面**：从 template 复制 + 展开链接标记 + 重写图片引用路径。
7. **更新侧边栏**：把底稿里的 `[settingsMenu]` / `[buttonsMenu]` 标记替换为按数据源生成的链接列表，其它行保持原样。
8. **检查覆盖表、清理产物里遗留的图片目录**（图片只在 template 下维护）。
9. **写回 `docs/data/*.json`**（与现有文件对比，差异记入报告）。
10. **输出报告**：`build/reports/build-report.md`（含统计、各类警告清单）。

## 说明文字与 [fetch]

说明文字保存在 `docs/template/<lang>/desc/<no|id>.md`：

- 文件内容就是页面里显示的说明文字（md 格式，可含 `###` 小标题、图片、`[setting:N]` 标记等）。
- 如果文件**第一行是 `[fetch]`**，构建时会从下载器获取该设置项的帮助文字（HTML 转为 Markdown），写回文件并用于构建。想改为手动维护时，删掉 `[fetch]` 一行即可。
  - 在**产物页面**里，`[fetch]` 标记不会显示，而是转换成一行提示（斜体），告诉读者这段说明与下载器里的完全一致。提示文字按语言配置在 `build/config.json` 的 `fetchTip`，产物里形如 `*该设置的说明与下载器里的说明完全一致。*`，后面跟一个空行再接说明文字。
- 新增的设置项会自动创建说明文件（有帮助文字则自动 `[fetch]` 获取）；构建报告里会列出**说明为空的条目**，需要手工补充。
  - 按钮通常没有可获取的帮助文字，新建后需要手工补充说明。
- 条目已不存在时，多余的 desc 文件会在报告的「无主的说明文件」里列出（不自动删除）。

HTML → Markdown 的转换规则（`[fetch]` 使用）：`<br>` → 两个换行；`<strong>`/`<b>` → `**`；`<a href>` → `[文本](链接)`；`<span class="blue">`（下载器里表示代码/标记/选项值的蓝色高亮）→ 行内代码（如 `<span class="blue">ja,zh-tw</span>` → `` `ja,zh-tw` ``，多处全部替换）；`<span>` 等其它行内标签去掉标签保留文本。转换后若仍有未处理的标签，会写入报告。

> 说明目前**只提醒、不翻译**：如果某个条目在一种语言的 desc 为空（或在另一种语言有内容），构建不会自动翻译，只把空说明列入报告，由人工/AI 处理。

## 链接标记

文档（含说明文字、其它页面）里引用设置/按钮时，使用标记而不是完整链接：

```
[setting:52]                     → [抓取完成后，自动开始下载](/zh-cn/设置-筛选/下载行为?id=抓取完成后自动开始下载)
[button:crawlById]               → 构建时展开为对应的按钮链接
[setting:32?id=Creating Folders] → [Creating Folders](/en/Settings-Naming/Folder-and-file-names?id=creating-folders)
[button:某id?id=某个标题]         → 链接到该按钮页面内的某个标题（锚点）
```

- 默认形式（不带 `?id=`）：链接文本用条目名称，锚点指向该条目自身的标题。
- 带 `?id=` 形式（链接到页面内某个标题，如说明文字里的 `###` 小标题）：
  - 链接**文本** = `?id=` 的值（原文）；
  - href 里的锚点会经过与 docsify 标题 id 相同的 slugify 处理（见下）。
  - ⚠️ 大小写**必须**转换（不能用原文直接做锚点）：docsify 的标题 id 是 slugify 产物（`### Creating Folders` → id `creating-folders`）。
    经真实浏览器实测：`?id=Creating-Folders` 无法定位（且页面脚本会报错），`?id=creating-folders` 才能正确滚动到位。
- 如果 `?id=` 指向的标题在目标页面上不存在，构建报告的「“?id=”锚点未命中」里会列出（构建只报告、不修改）。
- 标记会在构建时按最新名称和路径展开，所以设置/按钮改名、文件夹改名都不会导致链接失效。代码块里的标记不会被展开（会写入报告）。

**slugify 规则**（生成锚点用，与 `docs/js/docsify.min.js` 的标题 id 算法一致）：

1. 去首尾空白；`'` 会先被实体转义、最终呈现为 `39`（如 `user's` → `user39s`）；
2. 大写字母 → 小写；
3. 去掉 HTML 标签；
4. 移除 Unicode 标点（U+2000–206F、U+2E00–2E7F）与半角标点 ``\ ' ! " # $ % & ( ) * + , . / : ; < = > ? @ [ ] ^ ` { | } ~``（**全角括号（）、全角逗号等保留**）；
5. 空白 → `-`（连续 `-` 合并）；
6. 数字开头时前面加 `_`。

## 生成内容的转换规则

### 设置项 html（源 → wiki）

从 `OptionsHtml.html` 取 `div.option[data-no]` 块（已先应用 5 处占位符替换），然后：

1. `<slot data-name>` 替换为对应模块的静态 html（模块片段；根元素加 `theme-white`，适配浅色主题）。
2. 标签归一：多行标签合并为一行、` />` → `>`、布尔属性 `checked` → `checked=""`、`data-*` 属性名统一为小写（复刻浏览器的 dataset 行为）。
3. `<textarea>` 内容两侧的缩进换行去掉。
4. 删除帮助按钮 `button.showMsgBtn`（wiki 页面里有说明文字，不需要帮助按钮）。
5. `data-xztip` 元素 → 追加 `has_tip` 类和 `data-tip` 属性（填充对应语言的文本并转义）。
6. 空的 `data-xztext` 元素 → 填充文本（来自 `langText`）。
7. `data-xzplaceholder` / `data-xztitle` → `placeholder` / `title`。
8. 被勾选控件对应的 `<label>` 加 `active` 类。
9. `namingTipArea` 里的 `.name` 元素加 `data-bind-copy="true"`（点击复制的功能标记）。
10. 设置名链接 `a.settingNameStyle` → `href="/#/{lang}/{folder}/{file}?flag={no}"`，并追加 `data-bind-click="true"`。
11. `subOptionWrap` 的 `display` 按控制的开关是否 `checked` 推导（`inline-flex` / `none`）。
12. 顶层卡片：加 `settingsPanel_optionCard` 类、`data-pin-bound="true"`、`style="display: flex;"`；90 天内的新设置再加 `new` 类和 new 徽章。
13. 空行折叠、首尾清理。

> 第 5、8、9、11 条是在**复刻下载器运行时的表单美化状态**——wiki 是静态站，没有运行时脚本，所以构建时直接按模板的默认状态推导出来。

### 按钮 html

普通按钮（一行）：

```html
<button id="{id}" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="{emphasis}" data-btn-intent="{intent}"[ title="..."]><span data-xztext="{nameKey}">{名称}</span><span class="ripple"></span></button>
```

- `emphasis` / `intent` / `title` 来自调用点分析（title 为 i18n key 时保留 `data-xztitle` 并按语言填充 `title`）。
- 特例：用 `addBlueTextBtn` / `addTextBtn` 创建的按钮，按调用点生成对应的结构（如 `blueTextBtn`）。
- 无法解析到调用点的按钮：用默认值（`secondary` + `brand`）生成，并写入报告供人工核对。

### 页面 / 菜单 / 侧边栏格式

- **页面文件**（`docs/<lang>/<folder>/<page>.md`）：

  ```
  ## {名称}

  {html}

  {说明文字}

  ## {下一个名称}
  ```

  条目顺序 = 数据源顺序；标题与 html 之间、html 与说明之间各 1 个空行。

- **菜单文件**（`{folder}-menu.md`）：

  ```
  # {文件夹显示名}

  {顶部说明文字（覆盖表或默认）}

  * [{页面显示名}]({lang}/{folder}/{file})
  ```

- **侧边栏**（`_sidebar.md`）：底稿里用两个标记占位，构建时逐行替换（标记单独占一行，生成的内容会沿用该行的缩进）：

  ```markdown
  * [简介](zh-cn/简介)
  [settingsMenu]
  [buttonsMenu]
  * [常见问题](zh-cn/常见问题)
  ```

  替换结果示例（`[settingsMenu]` → 设置类的文件夹与页面，`[buttonsMenu]` → 按钮类）：

  ```markdown
  * [设置-筛选](zh-cn/设置-筛选/设置-筛选-menu)
    * [抓取范围](zh-cn/设置-筛选/抓取范围)
  ```

  底稿里**不要**手写设置/按钮的链接（文件夹改名、页面增减后会过期）。兼容：如果底稿里找不到这两个标记，构建会退回到旧行为——识别并替换连续的设置/按钮链接块，同时在报告的「警告」里提示改用标记。
- 显示名规则：页面名 = 文件名（en 把 `-` 换成空格）；文件夹名 = 覆盖表优先，缺省用文件夹名本身。

## 图片处理

图片**只在 `docs/template/` 下维护**（唯一来源），构建产物里**没有**图片目录：

- `<lang>/images/`：**语言特有的图片**（如不同语言的 UI 截图）；
- `publicImages/`：两语言间相同（文件名与字节数都相同）的图片，只存一份；
- `docs/images/`：站点级图片（logo/favicon），不属于构建范围。

引用与构建行为：

- 页面里按"页面位置"写相对路径即可（设置/按钮页面 `../images/x.png` / `../../publicImages/x.png`；顶层页面 `images/x.png` / `../publicImages/x.png`）；构建时会把引用**自动改写**为指向 `template/`（如 `../../template/<lang>/images/x.png`），无需手工换算。站点级图片引用（`../images/logo128.png`）不受影响。
- 产物里不会有 `docs/<lang>/images`、`docs/publicImages`（构建会清理遗留的旧副本）。
- 新增图片：语言特有 → `<lang>/images/`；两语言共用 → `publicImages/`。
- 清理未使用的图片：在 docs 下运行 `python clear_unused_images.py`（语言图按同语言的 md 检查、公共图按全部语言的 md 检查，列出后确认删除）。

## 覆盖表（config.json）

- `folderDisplayNames`：侧边栏/菜单里显示的文件夹名（默认用文件夹名本身）。
- `menuFileNameOverrides`：菜单文件名的例外（默认 `{文件夹名}-menu.md`）。
- `menuIntroOverrides`：菜单顶部说明文字（设置类默认「二级分类：」，按钮类默认无）。
- `fetchTip`：各语言的 `[fetch]` 提示文字（说明文件含 `[fetch]` 时，产物里显示的斜体提示；详见「说明文字与 [fetch]」）。
- 文件夹被改名后，如果覆盖表里的旧名称没有对应文件夹，构建报告的「警告」里会列出，按提示更新即可。

## 检查与验证

**数据自检** `npm run build:check`：重新从下载器生成 `options_data.json` / `buttons_data.json`，与 `docs/data/` 里现有的文件对比（预期一致；下载器更新后会先在这里反映出来）。

**产物校验** `npm run build:verify`：对每个语言检查——

- 页面文件齐全、条目数与数据源一致、每个条目都存在；
- 菜单、侧边栏、其它页面齐全；侧边栏底稿含有 `[settingsMenu]` / `[buttonsMenu]` 标记、产物里没有残留的标记；
- 全量产物里没有未展开的标记、没有残留的 `[fetch]` 标记（跳过代码块）、没有旧的（已改名）文件夹路径；
- 图片引用全部存在、产物里没有图片目录。

**幂等测试**（改了构建逻辑后建议跑一次）：

```bash
node build/tasks/hash-docs.js build/.hash-A.json     # 记录当前产物的哈希清单
npm run build                                        # 再构建一次
node build/tasks/hash-docs.js build/.hash-B.json build/.hash-A.json   # 对比，应完全一致
```

**浏览器验收要点**（`npm run serve` 后）：

- 侧边栏/菜单/面包屑正常；设置卡片渲染正常（开关、子选项、tooltip、"提示"按钮的展开/收起）；
- 下载器跳转链接（卡片里 `?flag=`）与正文的 `?id=` 链接能正确定位；
- 图片（语言图/公共图/logo）都加载成功。

## 迁移记录（一次性，已完成）

2026-10-11 完成了从旧内容到本系统的迁移：

- `migrate-links`：旧链接 → `[setting:N]` / `[button:id]` 标记（自动转换 114 处 + 人工修正 3 处；指向 `###` 子标题的链接保持原样）；
- `migrate-descs`：从原页面提取说明文字到 `docs/template/<lang>/desc/`（每语言 171 个）；
- `migrate-menus`：把菜单显示名/说明文字/文件名例外写入 `config.json` 覆盖表；
- `migrate-cleanup`：删除 `template/` 下的设置/按钮文件夹（内容已提取完毕）。

迁移脚本保留在 `build/tasks/` 下，一般不需要再运行。

## 已知限制与后续可选项

- **说明文字的翻译回退**（未实现）：目标语言的说明为空、而另一语言有内容时，构建**只提醒不翻译**。将来若实现：为空时在其它语言的 `desc/` 里找同名文件，翻译后存为当前语言的文件——翻译由人工/AI 完成，构建脚本只负责检测与提醒。
- `golden-diff.js` 与 `state-parser.js` 是首次迁移与规则调优期的开发工具（"金标对比"依赖迁移前的现状），平时不需要运行。
- new 徽章会随日期推移自动消失（构建时按 90 天实时判定），属预期行为。

## 本机环境注意事项（WorkBuddy）

本机环境对删除操作有限制，运行构建时请注意：

- **沙箱内直接跑构建会失败/中断**：删除旧文件夹的操作会触发删除保护（单进程累计约 50 个删除操作后被截停），构建可能中断，并留下"部分旧文件被删"的中间状态。→ **构建应以提权（跳过沙箱）方式运行**。
- **提权命令存在"沙箱预尝试"**：正式执行前会先在沙箱里试跑一次，试跑中的删除同样会被截停、短暂留下中间状态；**随后正式执行会完整重建，最终状态正确**。因此：
  - 不要把"记录状态 / 对比"的步骤与提权构建混在同一条命令里（预尝试可能把中间态记录进去，产生假差异）；
  - 构建后用 `npm run build:verify` 验证一次；若发现缺失，重跑一次构建即可恢复完整。
- 用户自己的普通终端没有以上限制，直接 `npm run build` 即可。
