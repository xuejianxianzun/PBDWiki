### Supported Data Formats

When importing a JSON file, you can use several formats for the user list data.

Note:
- Use only one format in a JSON file; do not mix multiple formats.
- The last item in the JSON array must not have a trailing comma `,`, otherwise a syntax error will occur.

**Format 1:**

The format is `string[]`, where each item is a user ID, for example:

```json
[
  "24503943",
  "124193882",
  "11860180"
]
```

**Format 2:**

An array of objects where each item must contain a `userId` property whose value is a user ID, for example:

```json
[
  {
    "userId": "56604890"
  }
]
```

The data exported by the "Export followed users list (JSON)" function above uses this format.

Tip: Each object may contain other properties as long as it has a `userId` property.

**Format 3:**

An array of objects where each item must contain an `id` property whose value is a user ID, for example:

```json
[
  {
    "id": "720383"
  }
]
```

This is the format used when you export the downloader's internally cached following data.

### Work Details

- The downloader will first crawl the users you are currently following. If a user is already followed, the downloader will skip it when adding follows, to avoid duplicate follows. However, this step is adjustable: since the downloader starts crawling from the current page, if you want to skip this step to save time, you can navigate to the last page of the following list and then execute this function. At that point, the downloader will only crawl the users on the last page, which is approximately equivalent to skipping this step.
- When following users, you can decide to add them as **public** follows or **private** follows. This depends on the page you are on: if you are on the public follows page, the downloader will add users as public follows. If you are on the private follows page, the downloader will add users as private follows.

### Possible Use Cases

- You can export another user's public following list and then import it to your own account to follow those users as well.
- You can export your own following list and then batch import it to a secondary account, so the secondary account has the same following list as the main account. However, I don't recommend doing this because it's not necessary: the secondary account can directly download works from the users that the main account publicly follows, just by opening the corresponding URL. But if your main account is banned, you might not be able to view the following list. So you can periodically export your following list for backup purposes.
- You can batch convert public followed users to private follows, or vice versa. It's simple: you can first export the public followed users, then go to the private follows page and perform batch following, so these users will be re-added as private follows. Of course, you can do the opposite as well.

### Tip

You can access another user's public following list page and use the downloader to crawl and export the users they follow.

You can first open a user's homepage, URL for example:

https://www.pixiv.net/users/1113943

Then append `/following` to the end and press Enter to view their public following list:

https://www.pixiv.net/users/1113943/following

### Risk Warning

Pixiv has strict limits on batch following users. For example, following more than a certain number of users per day may trigger a warning from Pixiv. A second warning may lead to account suspension or deletion. I am not responsible for any account bans.

To reduce risk, the downloader adds intervals during batch following and pauses automatically every 500 users. If this happens, close the following page and reopen it the next day to resume the batch follow task. The downloader skips already followed users and continues from the previous progress.

For safer importing of many users, split the task into batches, e.g., crawl 20 pages at a time (exporting 480 user IDs). If there are many users, this results in multiple JSON files. Import one file per day.
