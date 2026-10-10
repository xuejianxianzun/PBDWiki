点击这个按钮之后，你可以选择一个包含作品 ID 列表的 JSON 文件，让下载器抓取它们。

这个 JSON 文件的内容格式如下：

```json
[
  { "id": "142565679", "type": "illusts" },
  { "id": "24769308", "type": "novels" },
  { "id": "7671451", "type": "novelSeries" }
]
```

`id` 是作品的 ID，`type` 是作品类型，可以是 `illusts`、`novels` 或 `novelSeries`。

?> 这个 JSON 文件可以由 [setting:31] 功能生成。这两个功能就是为了配合使用的。不过你也可以自己创建这个 ID 列表，只要内容格式符合要求即可。
