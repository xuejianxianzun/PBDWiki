# First Download Attempt

Let's open a test page, here is [Artist Mafuyu's Works List Page](https://www.pixiv.net/member_illust.php?id=5229572&type=illust ':target=_blank'):

## Start Crawling


Open the downloader panel, ![](./images/Snipaste_2025-03-08_09-22-06.png)then click "Start Crawling" button, then the program will automatically start crawling the works.

![](./images/Snipaste_2025-03-08_08-41-02.png)
After crawling is completed, under default settings, the downloader will automatically start downloading files.

?> 这个问题我无法复现 During the first batch download, the browser may ask: Whether allow this site to download multiple files?

![](./images/2019-07-31-10-16-38.png)

Please select Allow.

## Logs

While the program is running, it will display some simple prompts at the top of the page, including the settings and download progress. For example:

![](./images/Snipaste_2025-03-08_08-49-43.png)

## Status in Title Bar

After crawling process starts, the program will add some icon on the web title to indicate the task status. For example:

![](./images/Snipaste_2025-03-08_08-50-44.png)

The `[↓]` at the front indicates downloading is in progress; the following number 66 indicates the remaining number of files in the queue.

Common statuses are as follows:

- ↑ Crawling in progress
- ↓ Downloading in progress
- √ Download complete
- ☑ Download complete, but the page URL has changed since crawling started

Some less common statuses:

- → Crawling complete, waiting for next operation (search page)
- ▶ Crawling complete, ready to start downloading (requires user to manually click "Start Download" button)
- ║ Download paused
- ■ Download stopped

## Save Location

Downloaded files are stored in the **browser's download directory**.

![](./images/Snipaste_2025-03-08_08-55-31.png)

## Download Error?

If you encounter problems during download, please refer to the [FAQ](./FAQ.md) page.

If you still can't find the reason, please refer to the [Contact Info](./Contact_Info.md) page.