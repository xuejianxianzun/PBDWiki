This button functions similarly to the previous one but exports a JSON file.

?> The number of users crawled depends on the "How Many Pages to Crawl" setting. Each page has up to 24 users.

An important difference is that the exported JSON file can be used for importing (batch following users), while the CSV file cannot.

The JSON file saves the list of users you are following. Previous versions only contained user IDs, for example:

```json
[
  "107901226",
  "89923302",
  "108815429",
  "9013106"
]
```

Starting from version 18.6.0, the JSON file will save detailed data for each user, for example:

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

Both types of data can be used to batch follow users.

**Difference between exporting CSV and JSON formats:**

The exported JSON file can be used for importing (batch following users), while the CSV file cannot. But if you only have a CSV file, you can also copy the user ID list from the CSV file and create a JSON file that conforms to the format.

**Note:** The number of users exported by the downloader may be less than the number displayed on the webpage. The reason has already been explained in the previous entry.
