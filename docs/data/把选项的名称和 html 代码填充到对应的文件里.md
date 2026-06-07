文本内容编辑：

现在有两个文件，分别保存了简体中文和英文里的一些 html 内容，你需要依次处理：
- `docs\data\optionsHtml-zh-cn.json`
- `docs\data\optionsHtml-en.json`

数组里的每一项都是一个选项（option）的内容，包含了选项的编号、名称、名称的 key 和 html 内容。

我已经对这些选项进行了分类，定义文件是 `docs\data\page_options.json`，从中可以知道每个选项应该保存到哪个分类的文件里。

目的：**我需要你把每个选项的 name 和 html 值复制到对应的文件里。**

## 示例

举例，对于第一个选项：

```json
{
  "no": 0,
  "name": "抓取多少作品",
  "nameKey": "_抓取多少作品",
  "html": "<div class=\"option settingsPanel_optionCard pinned\" data-no=\"0\" data-pin-bound=\"true\" style=\"display: flex;\">\n  <a href=\"http://localhost:3000/#/zh-cn/设置-抓取/抓取范围?flag=0\" target=\"_blank\" class=\"settingNameStyle\" data-bind-click=\"true\">\n    <span class=\"textTip\" data-xztext=\"_抓取多少作品\">抓取<span class=\"key\">多少</span>作品</span>\n  </a>\n  <input type=\"text\" name=\"setWantWork\" class=\"setinput_style blue\" value=\"-1\">\n  <button type=\"button\" class=\"textButton grayButton mr0\" role=\"setMin\">1</button>\n  <button type=\"button\" class=\"textButton grayButton\" role=\"setMax\">-1</button>\n  <span class=\"gray1\" data-xztext=\"_负1或者大于0\" role=\"tip\">-1, 或者大于 0</span>\n  <button type=\"button\" class=\"gray1 textButton showMsgBtn\" data-title=\"_抓取多少作品\" data-msg=\"_抓取多少作品的提示\" data-xztext=\"_帮助\">帮助</button>\n</div>"
}
```

### 根据 no 查找它应该保存到哪个文件里

首先读取它的 `no` 是 `0`，然后在 `docs\data\page_options.json` 里查询 `ids` 数组里包含编号 `0` 的项。它对应的项是：

```json
{
  "page": {
    "zh-cn": "设置-抓取/抓取范围",
    "en": "Settings-Crawl/Crawl-scope"
  },
  "ids": [0, 1, 2]
}
```

这个项的 `page` 里规定了在不同语言里，该选项的 html 应该保存到哪个文件里（需要添加 `.md` 后缀）。

注意：`page` 的配置里没有包含每种语言的目录。实际上，简体中文的目录是 `docs/zh-cn`，英语的目录是 `docs/en/`，在编辑文件时需要在前面添加目录。所以该选项在简体中文里的文件是 `docs/zh-cn/设置-抓取/抓取范围.md`，在英语里的文件是 `docs/en/Settings-Crawl/Crawl-scope.md`。

### 填充文件的内容

编辑对应语言的文件，在其后**追加**内容（这是为了避免覆盖之前的内容）：
- 首先把 `name` 属性的值添加为二级标题，也就是添加 `## ` + `name`
- 添加两个换行
- 把 `html` 属性的值写入到换行后面（需要预处理）
- 再次添加两个换行

注意：
- 在添加`html` 属性的值之前需要先对值进行处理：1. 把转义的双引号 `\"` 替换成正常的双引号 `"`。 2. 把换行标记 `\n` 替换为真正的换行，而不是字面量 `\n`。
- 当你处理中文的 html 文件 `docs\data\optionsHtml-zh-cn.json` 时，把内容填充到简体中文对应的文件里；处理英文的 html 文件 `docs\data\optionsHtml-en.json` 时，把内容填充到英语对应的文件里。

这样一个选项就处理完毕了，接着处理剩余的选项。

