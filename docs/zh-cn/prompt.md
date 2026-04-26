# 把简体中文翻译为英语

我在编辑一个浏览器扩展程序的 Wiki 文档，有一些 markdown 文本需要从简体中文翻译成英语，我想让你帮我翻译。

另外，这个文件不需要翻译，因为它只是我用来保存 prompt 的文件。

## 背景说明

这是一个浏览器扩展程序 [Pixiv Batch Downloader](https://github.com/xuejianxianzun/PixivBatchDownloader) 的 wiki 文档。这个扩展程序是一个爬虫和下载器，用于从 Pixiv.net 这个网站下载插画、漫画、小说等内容。大多数用户在 PC 端的浏览器上使用它。它有很多设置项，还会显示日志和一些提示消息。
我使用 docsify 制作了这个文档。

## 需要翻译哪些内容

**需要翻译的内容：**
- 正文里的中文。
- 中文的引号如 `“` 和 `”` 都翻译成英语的引号 `"`。
- 使用单个反引号包裹的文字如 `小说`。额外情况是 `未分類`，它不需要翻译。

**不需要翻译的内容：**
- 非中文文本（例如日文、英文或其他语言）不需要翻译，保持原样即可。
- 对于使用 3 个反引号包裹的代码块，不需要翻译，保持原样即可。
- 文档里可能有 html 代码，不需要翻译，保持原样即可。
- `[]()` 格式的链接里的标题和网址里的中文不需要翻译，因为自动翻译的链接不一定正确，所以我会在之后手动处理。

## 术语表

- `作品`（指 pixiv 上的投稿）翻译为`work`。
- `插画`翻译为`illustration`。
- `漫画`翻译为`manga`。
- `小说`翻译为`novel`。
- `动图`（指 pixiv 上的逐帧动画）翻译为`Ugoira`。
- `图片`（对 pixiv 上的图片的统称）翻译为`image`。
- `简介`（指作品的介绍信息）翻译为`description`。
- `抓取`（让这个下载器爬取作品数据）翻译为`crawl`。
- `收藏`（把作品添加到收藏夹，相当于书签）翻译为`bookmark`。
- `命名规则`翻译为`naming rule`。
- `点击`翻译为`click`。因为这个下载器是为 PC 端网页设计的，所以`点击`指的是鼠标点击，而非点击屏幕。
- `下载记录`有两种情况。第一种情况：这个扩展程序会保存自己的下载记录格式，此时应该翻译为`download record`。第二种情况：指浏览器的下载记录，翻译为`download history`。第二种情况比较少。
- `发布时间`、`发表时间`、`投稿时间`是相同的意思，应该翻译为`posting time`。

## 中文文件与英语文件的对照表

| 中文文件                          | 英语文件                                           |
| --------------------------------- | -------------------------------------------------- |
| docs\zh-cn\安装之后.md            | docs\en\AfterInstallation.md                       |
| docs\zh-cn\按钮-更多.md           | docs\en\Buttons-More.md                            |
| docs\zh-cn\按钮-下载.md           | docs\en\Buttons-Download.md                        |
| docs\zh-cn\按钮-抓取.md           | docs\en\Buttons-Crawl.md                           |
| docs\zh-cn\便捷功能.md            | docs\en\Convenience-Features.md                    |
| docs\zh-cn\常见问题.md            | docs\en\FAQ.md                                     |
| docs\zh-cn\初次下载.md            | docs\en\FirstDownload.md                           |
| docs/zh-cn/简介.md                | docs/en/Introduction.md                            |
| docs/zh-cn/离线安装.md            | docs/en/OfflineInstallation.md                     |
| docs/zh-cn/联系我.md              | docs/en/Contact-Me.md                              |
| docs/zh-cn/如何更新.md            | docs/en/HowToUpdate.md                             |
| docs/zh-cn/设置-更多.md           | docs/en/Settings-More.md                           |
| docs/zh-cn/设置-更多-命名.md      | docs/en/Settings-More-Naming.md                    |
| docs/zh-cn/设置-更多-其他.md      | docs/en/Settings-More-Other.md                     |
| docs/zh-cn/设置-更多-下载.md      | docs/en/Settings-More-Download.md                  |
| docs/zh-cn/设置-更多-隐藏设置.md  | docs/en/Settings-More-Hidden-Settings.md           |
| docs/zh-cn/设置-更多-增强.md      | docs/en/Settings-More-Enhance.md                   |
| docs/zh-cn/设置-更多-抓取.md      | docs/en/Settings-More-Crawl.md                     |
| docs/zh-cn/设置面板.md            | docs/en/SettingsPanel.md                           |
| docs/zh-cn/设置-下载.md           | docs/en/Settings-Download.md                       |
| docs/zh-cn/设置-抓取.md           | docs/en/Settings-Crawl.md                          |
| docs/zh-cn/使用技巧.md            | docs/en/Usage-Tips.md                              |
| docs/zh-cn/使用小号下载.md        | docs/en/Using-Secondary-Account-for-Downloading.md |
| docs/zh-cn/在线安装.md            | docs/en/OnlineInstallation.md                      |
| docs/zh-cn/赞助我.md              | docs/en/Support-Me.md                              |
| docs/zh-cn/MicrosoftEdgeCanary.md | docs/en/MicrosoftEdgeCanary.md                     |

## 我可能使用不同的方式让你进行翻译

我可能会通过以下方式之一来让你进行翻译：

### 在聊天窗口里（非终端里）

- **逐条翻译模式**：如果我把需要翻译的文本片段通过聊天消息发给了你，那么你应该把处理结果输出为 markdown 格式，并且此时只在聊天消息里回复我即可，不需要把翻译结果保存到文件。在这种情况下，这条消息（即第一条消息）不需要翻译，但我发送的后续消息都是需要翻译的语句，没有例外。即使一些语句里可能包含“你怎么看”或者“你应该怎么做”之类看起来是与你交流的内容，其实也是翻译语句，你直接翻译即可。
- **翻译单个文件模式**：如果我添加了 md 文件作为附件让你翻译，那么你应该把翻译后的内容保存到 md 一个文件里让我下载。这个 md 文件的名字就是其中文名翻译后的英语。

附加说明：在聊天窗口里，如果你需要压缩上下文，可以只保留最开始的一轮对话，其余的都可以删除，因为第一轮对话已经完整说明了任务需求；之后的对话都是在翻译具体语句，不需要持续保存。

### 在终端的 CLI 里
- **批量处理更改模式**：我可能会让你把中文 md 文件里做的修改同步到对应的英语 md 文件里。你需要从对应的英语 md 文件里删除被移除的内容，并把新增/有变化的内容翻译后添加到对应位置。注意：在这种情况里，如果发生更改的文件不在前面列出的中文文件列表里，就不需要翻译它。
- **翻译指定文件模式**：我可能会让你翻译指定文件，此时需要翻译它的完整内容并保存到对应的英语文件里。

----------

**注意：** 在上述所有方式里，都需要遵循“需要翻译哪些内容”部分的要求。也就是说，即使我让你批量处理更改或者翻译整个文件，里面可能依然有些内容是不需要翻译的。
