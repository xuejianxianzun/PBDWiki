## Crawl tag list

<button id="crawlTagList" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_抓取标签列表">Crawl tag list</span><span class="ripple"></span></button>

Clicking this button displays an input area at the top of the page. You can enter multiple tags, and the downloader will crawl works for each tag sequentially and download them automatically.

Example:

![](../../template/en/images/20250909_231123.png)

**Tips:**

- Separate multiple tags with newlines (one tag per line).
- The downloader crawls and downloads each tag's works sequentially. It moves to the next tag after finishing the current one.
- To save each tag's works to corresponding folders, use the `{page_tag}` tag to capture the current tag for folder creation. Refer to the naming rule: `{page_tag}/{id}`.
- Current crawl conditions apply when crawling each tag's works.
- Do not navigate to other pages while crawling a tag list (avoid clicking links on the page).
- During tag list crawling, the downloader does not display crawled works on the page, so you cannot preview results.
- The downloader saves the task state. If the page or browser is closed before completion, reopening the page allows the downloader to resume crawling the remaining tags.

------

On illustration and manga search pages, there are also buttons that can filter the crawl results. After crawling is complete, you can click these buttons to remove unwanted works from the crawl results.

## Screen in results

<button id="filterResults" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" data-xztitle="_在结果中筛选说明" title="You can change the settings and screen again in the results."><span data-xztext="_在结果中筛选">Screen in results</span><span class="ripple"></span></button>

If needed, modify crawl conditions (filters) and click this button to recheck crawl results, removing works that don't meet the conditions. For example, you can increase the bookmark count requirement after crawling and filter again.

## Remove multi-image works

<button id="clearMultiImageWork" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="danger"><span data-xztext="_清除多图作品">Remove multi-image works</span><span class="ripple"></span></button>

Removes all multi-image works from the crawl results.

## Remove ugoira works

<button id="clearUgoiraWork" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="danger"><span data-xztext="_清除动图作品">Remove ugoira works</span><span class="ripple"></span></button>

Removes all Ugoira works from the crawl results.
