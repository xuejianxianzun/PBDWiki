这个按钮的作用与上一个按钮类似，只不过它导出的是 JSON 文件。

?> 抓取多少个用户取决于“抓取多少页面”的数量。每页最多有 24 个用户。

JSON 文件里保存了你关注的用户列表。以前的版本只包含用户 ID，例如：

```json
[
  "107901226",
  "89923302",
  "108815429",
  "9013106"
]
```

从 18.6.0 版本开始，JSON 文件里会保存每个用户的详细数据，例如：

```json
[
  {
    "userId": "56604890",
    "userName": "micho",
    "profileImageUrl": "https://i.pximg.net/user-profile/img/2025/08/06/00/00/15/27711443_3167190746034c5bb05001829981a29d_170.jpg",
    "profileImageSmallUrl": "https://i.pximg.net/user-profile/img/2025/08/06/00/00/15/27711443_3167190746034c5bb05001829981a29d_50.jpg",
    "userComment": "短髪と可愛いものが好きです！\nＸ：komehina_micho",
    "premium": false,
    "following": true,
    "followed": false,
    "isBlocking": false,
    "isMypixiv": false,
    "illusts": [],
    "novels": [],
    "commission": null
  }
]
```

这两种数据都可以用于批量关注用户。

**导出 CSV 和 JSON 格式的区别：**

导出的 JSON 文件可以用于导入（批量关注用户），而 CSV 文件不可以。但如果你只有 CSV 文件，也可以从 CSV 文件里复制用户 ID 列表，并制作成符合格式的 JSON 文件。

**注意：** 下载器导出的用户数量可能比网页上显示的数量少。原因已经在上一个条目里解释过了。
