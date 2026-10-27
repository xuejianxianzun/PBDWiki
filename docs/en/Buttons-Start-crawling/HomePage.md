## Crawl user list

<button id="crawlUserList" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="primary" data-btn-intent="brand"><span data-xztext="_抓取用户列表">Crawl user list</span><span class="ripple"></span></button>

If you want to crawl works from multiple users in batches, you can use this feature.

After you click this button, the downloader shows two input fields, where you can enter a list of user IDs and how many works to crawl from each user. The downloader then crawls and downloads the users you entered, one by one.

**Tips:**
- This feature is designed for crawling multiple users at once. If you only need to download one user's works, you can open that user's profile page and start crawling there.
- If you need to set filter conditions (such as work type, bookmark count, time range, and tags), please set them first, and then start crawling.
- Make sure "Quick download task" is checked in [Start downloading automatically after crawling is complete](/en/Settings-Download/Download-behavior?id=start-downloading-automatically-after-crawling-is-complete), otherwise the downloader will not start downloading automatically.
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

## Crawl work list

<button id="crawlById" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_抓取作品列表">Crawl work list</span><span class="ripple"></span></button>

Clicking this button displays an input box where you can enter or paste a list of work IDs:

<div class="XZInputWrap" id="input1757090876229"><p class="XZInputInstruction">Enter work IDs. For multiple IDs, separate them with newlines (one ID per line).<br><br>Since this tab displays images, the entered IDs will be treated as image work IDs.</p><div class="XZInputContainer"><textarea class="XZInput" placeholder="10000
10001
10002
10003" rows="10" style="flex-basis: 400px;"></textarea><button class="XZInputButton hasRippleAnimation">
      <span>Submit</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>Cancel</span>
      <span class="ripple"></span>
    </button></div></div>

For multiple IDs, separate them with newlines (one ID per line).

Click the "Submit" button, and the downloader will crawl these works.

?> You cannot specify the work type; the downloader determines it based on the current page. On the novel homepage [https://www.pixiv.net/novel/](https://www.pixiv.net/novel), entered IDs are treated as novel work IDs. On other homepages, they are treated as image work IDs.

## Crawl work ID range

<button id="crawlIdRange" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_抓取作品id区间">Crawl work ID range</span><span class="ripple"></span></button>

Clicking this button displays two input boxes sequentially. You can set an ID range for the downloader to crawl, e.g., `10000` to `20000`.

First, enter the starting ID:

<div class="XZInputWrap" id="input1757091219116"><p class="XZInputInstruction">You can set a work ID range to crawl all works within it (including start and end IDs).<br>Note: If a single task produces too many crawl results, it may cause the page to crash.<br>If you need to crawl many IDs, consider splitting them into multiple tasks. I recommend crawling no more than 100,000 IDs per batch.<br><br>Since this tab displays images, entered IDs will be treated as image work IDs.<br><br>Enter the starting ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="10000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>Submit</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>Cancel</span>
      <span class="ripple"></span>
    </button></div></div>

Then, enter the ending ID:

<div class="XZInputWrap" id="input1757091349171"><p class="XZInputInstruction">Enter the ending ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="20000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>Submit</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>Cancel</span>
      <span class="ripple"></span>
    </button></div></div>

Click the "Submit" button, and the downloader will crawl these works (including start and end IDs). You can check the crawling progress in the top log.

?> You cannot specify the work type; the downloader determines it based on the current page. On the novel homepage [https://www.pixiv.net/novel/](https://www.pixiv.net/novel/), entered IDs are treated as novel work IDs. On other homepages, they are treated as image work IDs.

**Tip for Large-Scale Crawling:**

As the number of crawled works increases, memory usage grows, and browser network request handling slows down. Avoid crawling too many works in one task.

If you need to crawl many works, split them into multiple tasks and crawl sequentially.

## Import work ID list

<button id="importIDList" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_导入作品ID列表">Import work ID list</span><span class="ripple"></span></button>

Clicking this button allows you to select a JSON file containing a list of work IDs for the downloader to crawl.

The JSON file format is as follows:

```json
[
  { "id": "142565679", "type": "illusts" },
  { "id": "24769308", "type": "novels" },
  { "id": "7671451", "type": "novelSeries" }
]
```

`id` is the work ID, and `type` is the work type, which can be `illusts`, `novels`, or `novelSeries`.

?> This JSON file can be generated by the [After obtaining the work ID list, export the ID list and stop the task](/en/Settings-Filter/Execution-strategy?id=after-obtaining-the-work-id-list-export-the-id-list-and-stop-the-task) function. These two functions are designed to work together. However, you can also create your own ID list as long as the format meets the requirements.
