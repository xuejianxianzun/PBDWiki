# 把按钮的名称和 html 代码填充到对应的文件里

文本内容编辑：

需要把一些按钮的名字和 html 代码填充到对应的文件里。

这些按钮有 id，并且进行了分类，每个分类页面里只需要保存该分类里的按钮。

## 分类定义文件

分类定义文件是 `docs\data\page_buttons.json`，是个对象数组，每一项是一个分类页面的配置。

例如第一项是：


```json
{
  "page": {
    "zh-cn": "按钮-开始抓取/通用",
    "en": "Buttons-Start-crawl/General"
  },
  "ids": [
    "startCrawling",
    "stopCrawling",
    "scheduleCrawling",
    "cancelScheduledCrawling",
    "manuallySelectWork",
    "clearSelectedWork",
    "crawlSelectedWork"
  ]
}
```

### page

`page` 属性保存了在不同语言里，该分类对应的 markdown 文件。在使用时需要添加语言目录前缀和 `.md` 后缀。

`page` 的配置里没有包含每种语言的目录。实际上，简体中文的目录是 `docs/zh-cn`，英语的目录是 `docs/en/`，在编辑文件时需要在前面添加目录。所以这个分类的简体中文文件是 `docs/zh-cn/按钮-开始抓取/通用.md`，在英语里的文件是 `docs/en/Buttons-Start-crawl/General.md`。

### ids

`ids` 里保存了该分类下的所有按钮的 id。

## 数据源

现在有两个数据源文件，分别保存了简体中文和英文里的按钮内容：
- `docs\data\buttonsHtml-zh-cn.json`
- `docs\data\buttonsHtml-en.json`

数据格式是对象数组，里面的每一项都是一个按钮的内容，包含了按钮的 id、名称、名称的 key 和 html 内容。

## 处理方式示例

对于分类定义文件的第一项，其简体中文的文件是 `docs/zh-cn/按钮-开始抓取/通用.md`，英语的文件是 `docs/en/Buttons-Start-crawl/General.md`。编辑这两个文件，并从其对应语言的数据源里获取内容进行填充。

在数据源里找到属于该分类的所有按钮项，遍历每一项，在该分类对应的每种语言的文件里**追加**内容（这是为了避免覆盖之前的内容）：
- 首先把 `name` 属性的值添加为二级标题，也就是添加 `## ` + `name`
- 添加两个换行
- 把 `html` 属性的值写入到换行后面
- 再次添加两个换行

这样一个分类就处理完毕了，接着处理剩余的分类。
