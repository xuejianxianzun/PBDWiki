# 设置 optionsName 里每条设置的多语言名字

`docs\data\optionsName.json` 里保存了每个设置的多语言文本名字。现在每种语言的名字都是空的，需要从下载器的 i18n 配置文件 `C:\document\github\PixivBatchDownloader\src\ts\langText.ts` 的 `langText` 对象里获取对应语言的文本。

## 如何处理

示例：对于 `docs\data\optionsName.json` 里的第一项：

```json
{
  "no": 0,
  "nameKey": "_抓取多少作品",
  "name": {
    "zh-cn": "",
    "en": ""
  }
}
```

使用 `nameKey` 的值 `_抓取多少作品` 作为 key，在 `langText` 里获得对应的多语言数组：

```js
[
  '抓取<span class="key">多少</span>作品',
  '擷取<span class="key">多少</span>作品',
  'How <span class="key">many</span> works to crawl',
  '<span class="key">クロールする</span>作品の数',
  '긁어올 작품 <span class="key">수</span>',
  'Какое <span class="key">количество</span> работ сканировать',
]
```

第一条语句 `抓取<span class="key">多少</span>作品` 是它的简体中文文本。过滤掉 html 标签得到 `抓取多少作品`，并设置为 `name["zh-cn"]` 的值。

第三条语句是英语文本，同样过滤掉 html 标签，并设置为 `name["en"]` 的值。
