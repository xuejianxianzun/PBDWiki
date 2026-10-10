Use this button to exclude any works on the page; the downloader will not crawl them.

?> The shortcut for this function is `Alt` + `E`. Press it to enter/exit manual exclusion mode.

Clicking this button enters exclusion mode. A red circle with crosshair guidelines appears under the mouse cursor, as shown below:

![](../../publicImages/20260830_162226.png)

You can then click the left mouse button on any work to exclude it. The downloader adds an X mark to indicate that the work has been excluded, as shown below:

![](../../publicImages/20260830_162237.png)

Manual exclusion shares some similarities with manual selection, such as excluding works across multiple pages, not opening links when clicking works, and deselecting. However, it is more flexible in use.

**When to use:**

Manual selection requires you to select first and then crawl; manual exclusion, however, can be used at any time. That is, you can:
- Exclude first, then start crawling, so the downloader will not crawl the excluded works.
- Exclude after crawling: if a work has not been crawled yet, the downloader will not crawl it; if it has already been crawled, the downloader will remove it from the crawl results so it will not be downloaded.

However, if a work has already been downloaded, excluding it afterwards has no effect, because the downloader will not delete its files. If you want to crawl first and then exclude, I recommend disabling the "Start downloading automatically after crawling is complete" setting, so files will not be downloaded automatically. After you finish excluding, you can manually click the "Start download" button to start downloading.

**How selection and exclusion interact:**

If a work is already selected, using exclusion mode to select it will directly turn it into an excluded state, and vice versa.

Additionally, after you click the `Manually exclude` button, its label will change to `Pause exclusion` or `Continue exclusion` depending on the state.
