# Usage Tips

## Naming Tags

Using naming tags effectively can help you organize and sort files. Below are some simple guidelines:

- Use a forward slash `/` to create folders, e.g., `pixiv/{user}/{id}`.
- `{page_title}` represents the work's title and can be used on all pages.
- On user profile pages, it's recommended to use `{user}` as the folder name.
- On tag list and search pages, use `{page_tag}` as the folder name.
- On ranking pages, place the `{rank}` tag at the start of the file name to include the ranking in the downloaded files.
- Place the `{bmk}` tag at the start of the file name to sort downloaded files by bookmark count.
- When downloading your bookmarks, use `{bmk_id}` at the start of the file name to sort files in the order you bookmarked them.

See detailed explanation: [Naming rule](/en/Settings-Download?id=naming-rule).

## Timed Crawl

The downloader has a "Timed Crawl" function, allowing you to crawl and download new works at regular intervals on certain pages.

See detailed explanation: [Timed crawl](/en/Buttons-Crawl?id=timed-crawl).

## Incremental Updates

If you previously downloaded works from a user or page and want to download new works added later, follow the guidelines below.

First, I recommend enabling the [Don't download duplicate files](/en/Settings-More-Download?id=don39t-download-duplicate-files) function in the "More" tab to avoid unnecessary duplicate downloads.

Below are methods to help crawl new works, which you can use as needed.

### Set ID Range

On some pages, works are sorted from newest to oldest, with recently posted works at the front and older ones at the back.

Work IDs correlate with posting time: newer works have larger IDs. You can set the [ID range](/en/Settings-Crawl?id=id-range) in the downloader's "Crawl" tab.

For example, if you previously downloaded works from a user's profile and the largest ID in the file names was 65000000, you can set the ID range to greater than 65000000 to crawl works posted afterward.

### Set Posting Time

In addition to setting an ID range, you can set the [Posting time](/en/Settings-Crawl?id=posting-time) to crawl newly posted works.

Both settings work similarly but use different filtering criteria.

### Set Number of Pages to Crawl

You can use this method on many paginated pages. Below is one scenario.

If you want to crawl newly bookmarked works on the bookmark page, the previous two settings are unsuitable because works are sorted by bookmarking time, not work ID or posting time, with recently bookmarked works at the front and older ones at the back.

You can manually set the number of pages to crawl. For example:

Flip through pages starting from page 1 to check which page you last downloaded. If you last downloaded up to page 5, the works from pages 1 to 5 are the newly bookmarked works.

Return to page 1, set the [How many pages to crawl](/en/Settings-Crawl?id=how-many-pages-to-crawl) to 5, and start crawling. This downloads only the newly bookmarked works.

?> If you frequently need incremental updates on the bookmark page, consider adding the `{bmk_id}` tag at the start of file names to align the file order with the page's display order. This helps you see where you last downloaded. See detailed explanation: [Tags Reflecting Time Order](/en/Settings-Download?id=tags-reflecting-time-order).

### Manually Select Works

If there are few new works, you can use the [Manually select](/en/Buttons-Crawl?id=manually-select) function to download them.

For example, if a user's profile has only the latest 10 works that you haven't downloaded, manually select those 10 works and download them.

### Incremental Updates on Ranking Pages

To download daily rankings, do the following:

1. Download all works from today's ranking.
2. On subsequent days, use the [Crawl the debut works](/en/Buttons-Crawl?id=crawl-the-debut-works) button to crawl only the works newly added that day.

## Batch Bookmarking Works

If you need to batch bookmark multiple works, you can do the following:

1. Enable the downloader's [Bookmark works after downloading](/en/Settings-Download?id=bookmark-works-after-downloading) function.
2. Optional: If you do not need to download the original images of these works, you can set the [Image size](/en/Settings-More-Download?id=image-size) during download to `Small` to speed up the download process.
3. Crawl and download these works. The downloader will bookmark them.

On certain pages (e.g., the new works page of followed users), if you want to bookmark newly appeared works at regular intervals, you can use the [Timed crawl](/en/Buttons-Crawl?id=timed-crawl) function in combination with the method above.

## Getting IDs of Expired Bookmarked Works

Your bookmarks may contain some works that have already expired, and you cannot view or download them. For example:

![](images/20250909_235316.png)

If you want to get their IDs, please refer to the description of this feature: [Unbookmark all deleted works](/en/Buttons-More?id=unbookmark-all-deleted-works).

## Batch Crawling and Downloading

If you need to crawl many pages, consider batch crawling, i.e., crawling only a portion of pages at a time.

This is because crawling many works takes a long time, and accidentally closing the page during crawling loses progress.

Another reason is that too many crawl results (e.g., hundreds of thousands) increase the downloader's memory usage.

See detailed explanation: [Tip: Split Tasks](/en/Settings-Crawl?id=tip-split-tasks).

## Filter/Modify Crawl Results

Sometimes, after crawling, you may want to change filter conditions, but since crawling is complete, changes won't affect the results.

In this case, do the following:

1. Set the filter conditions.
2. Export crawl results.
3. Import crawl results.

When importing crawl results, the downloader applies filter conditions, removing results that don't meet the criteria.

See detailed explanation: [Import results](/en/Buttons-Download?id=import-results).