If you want to crawl works from multiple users in batches, you can use this feature.

After you click this button, the downloader shows two input fields, where you can enter a list of user IDs and how many works to crawl from each user. The downloader then crawls and downloads the users you entered, one by one.

**Tips:**
- This feature is designed for crawling multiple users at once. If you only need to download one user's works, you can open that user's profile page and start crawling there.
- If you need to set filter conditions (such as work type, bookmark count, time range, and tags), please set them first, and then start crawling.
- Make sure "Quick download task" is checked in [setting:52], otherwise the downloader will not start downloading automatically.
- While the task is running, do not run other crawl tasks in this tab. If necessary, you can open a new Pixiv tab to browse and download.
- While the task is running, if you accidentally close this webpage, you can open that page again and click the "Crawl user list" button to resume the progress.
- While the task is running, if you want to give up (terminate) the task, you can click the "Stop crawling" button. The task stops immediately and cannot be resumed from where it was interrupted.

**A known issue:**

After the page is refreshed, the restored download task is not recognized.

The cause of this issue is:
- After the page is refreshed, the downloader automatically restores unfinished download tasks;
- But it does not automatically restore the "Crawl user list" task.

The reproduction steps are as follows:
- The user runs a "Crawl user list" task.
- After finishing crawling one user, the downloader starts downloading that user's works.
- The webpage is refreshed while downloading.
- After the webpage is refreshed, the downloader automatically restores the unfinished download task. This is where the problem occurs: at this point the downloader has not restored the state of "Crawl user list", so this download is not associated with "Crawl user list". Therefore, when this download is finished, the progress of "Crawl user list" does not increase.
- If the user later restores the unfinished "Crawl user list" task, the downloader starts from the user that was not fully processed before, that is, the user corresponding to the "unfinished download task" mentioned above. The downloader crawls and downloads that user once again.

This is a known issue caused by the design of the feature, not a bug:
An unfinished "Crawl user list" task can only be restored by manually clicking the "Crawl user list" button. This is by design, because automatically restoring it when the homepage is opened might interfere with the user's operations. Also, the user may no longer need to restore the previously unfinished "Crawl user list" task, so not restoring it automatically is safer.
