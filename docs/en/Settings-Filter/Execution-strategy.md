## Do not crawl already downloaded works

<div class="option settingsPanel_optionCard" data-no="26" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=26" target="_blank" class="has_tip settingNameStyle" data-xztip="_不抓取下载过的作品的说明" data-tip="If the downloader has a download record for this work, it will not be crawled." data-bind-click="true">
    <span data-xztext="_不抓取下载过的作品">Do not crawl <span class="key">already downloaded</span> works</span>
    <span class="gray"> ? </span>
  </a>
  <input type="checkbox" name="DonotCrawlAlreadyDownloadedWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

If you enable this feature, the downloader will check whether each work has a download record before crawling it. If it does, the downloader will skip it. This reduces unnecessary crawling and saves time. This feature is also useful for incremental updates, because you can crawl only works that have not been downloaded.

In addition, when merging a novel series, enabling this setting can skip novels that already have download records and merge only newly added novels in the series.

**Notes:**
- This feature depends on the download records saved by the downloader, so it is not completely accurate. If you clear the downloader's download records, it will forget which files it has downloaded. If you want to learn more about the downloader's download records, see [Manage download records](/en/Settings-Download/Download-records?id=manage-download-records).
- This feature does not work for novel series, because the downloader does not save download records for novel series.
- For multi-image works, the downloader checks only whether the first image has a download record. So as long as you downloaded the first image, the downloader can show a border for that work. But if you did not download the first image and downloaded only later images, the downloader will not show a border for it.

## User block list

<div class="option settingsPanel_optionCard" data-no="27" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=27" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_用户屏蔽名单">User <span class="key">block</span> list</span>
  </a>
  <input type="checkbox" name="userBlockList" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="userBlockList" style="display: none;">
    <div class="optionLine">
      <textarea class="centerPanelTextArea beautify_scrollbar" name="blockList" rows="1" placeholder="11111,22222,33333"></textarea>
    </div>
    <div class="optionLine">
      <input type="checkbox" name="quicklyBlockUsers" id="setQuicklyBlockUsers" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="setQuicklyBlockUsers" data-xztext="_快捷屏蔽用户" class="active">Quickly block users</label>
    </div>
    <div class="optionLine">
      <input type="checkbox" name="removeBlockedUsersWork" id="setRemoveBlockedUsersWork" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="setRemoveBlockedUsersWork" data-xztext="_从页面上移除他们的作品" class="active">Remove their works from the page</label>
    </div>
  </div>
</div>

You can enter the IDs of users you want to block, and the downloader will not download works from these users.

?> Note: You need to enter **user IDs** (numbers), not usernames, as usernames are not unique.

?> To block multiple users, enter multiple user IDs separated by commas `,`.

**Sub-options:**

### Quickly block users

When you hover over any user's name, the downloader displays a block button. Click it to block that user.

### Remove their works from the page

When enabled, the downloader will search for works from blocked users on various pages and remove them, so you won't see works from users you don't like.

When the downloader removes works from certain users, it will display details in the log at the top, for example:

<span style="color: rgb(210, 126, 0);" class="log">Removed works from user <a href="https://www.pixiv.net/users/6756759" target="blank">村上水軍</a><br></span>

?> Works from blocked users will not be removed from their own profile pages, allowing you to view their profiles normally.

## Slow down crawl

<div class="option settingsPanel_optionCard" data-no="28" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=28" target="_blank" class="has_tip settingNameStyle" data-xztip="_减慢抓取速度的说明" data-tip="Slowing down the crawl speed can help avoid Pixiv temporarily blocking your crawl (429 status code). &lt;br&gt;This will increase crawl time." data-bind-click="true">
    <span data-xztext="_减慢抓取速度"><span class="key">Slow down</span> crawl</span>
    <span class="gray"> ? </span>
  </a>
  <input type="checkbox" name="slowCrawl" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="slowCrawl" style="display: inline-flex;">
    <div class="optionLine">
      <span data-xztext="_当作品数量超过指定数量时启用">Enabled when the number of works exceeds the specified number: </span>
      <input type="text" name="slowCrawlOnWorksNumber" class="setinput_style blue" value="100">
    </div>
    <div class="optionLine">
      <span data-xztext="_间隔时间">Interval time: </span>
      <input type="text" name="slowCrawlDealy" id="slowCrawlDealy" class="setinput_style blue" value="1600" placeholder="1600">
      ms
    </div>
  </div>
</div>

Slowing down the crawling speed can prevent the downloader from being temporarily restricted by Pixiv during crawling (see [What Is a 429 Error?](/en/FAQ?id=what-is-a-429-error)), but it will increase the crawling time.

If this setting is enabled, the downloader will limit concurrent requests to 1 during crawling. After each request is completed, it will wait for a certain period (depending on the interval time value) before sending the next request, reducing the crawling frequency to avoid triggering the 429 restriction.

This setting has 2 sub-options:

### Enabled when the number of works exceeds the specified number

When the number of works to crawl exceeds this number (default is `100`), the downloader will use slow crawl mode.

If the number of works to crawl is less than this number, the downloader will crawl quickly (no interval time).

### Interval time

After one request is completed, how long to wait before sending the next request. Unit is milliseconds, default value is `1600`.

If you only crawl a few hundred works per day, the default interval time is usually safe. If you frequently trigger 429 errors, or often crawl more works, you can increase the interval time, for example `2000`, `3000`. `4000` ms is almost absolutely safe, even for crawling more than ten thousand works, no problem, but usually no need to use such a large interval time.

?> The interval time not only takes effect during the crawling stage, but also in some scenarios that require sending a large number of requests. For example: batch adding bookmarks, retrieving the list of followed users.

------------

**Note:**

This setting cannot completely avoid 429 errors. Reasons:

1. It assumes the user is only crawling on one page, which should not trigger 429 errors. But if the user is crawling on 2 or 3 pages simultaneously, because requests are sent frequently, it may still trigger 429 errors.
2. Some normal user operations also consume quota, such as opening work pages, previewing works, bookmarking works, etc. When the quota is exhausted, it will trigger 429 errors. So during crawling, if the user performs many such operations, it may also lead to triggering 429 errors.

## The interval time of timed crawl

<div class="option settingsPanel_optionCard" data-no="29" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=29" target="_blank" class="has_tip settingNameStyle" data-xztip="_定时抓取的间隔时间的说明" data-tip="There is a &quot;Timed crawl&quot; button on some pages, which automatically starts crawling and downloading at a certain interval. &lt;br&gt;You can set the interval time for each crawl here." data-bind-click="true">
    <span data-xztext="_定时抓取的间隔时间">The interval time of <span class="key">timed crawl</span></span>
    <span class="gray"> ? </span>
  </a>
  <input type="text" name="timedCrawlInterval" class="setinput_style blue" value="30">
  <span class="mr4" data-xztext="_分钟">Minute</span>
</div>

Set the interval for timed crawling.

Some pages have a [Timed crawl](/en/Buttons-Start-crawling/General?id=timed-crawl) button. Clicking it allows the downloader to automatically perform crawling and downloading at regular intervals. You can set the interval between each crawl here.

The default value is 30 minutes.

## Preview crawl results on search page

<div class="option settingsPanel_optionCard" data-no="93" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=93" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_预览搜索页面的抓取结果"><span class="key">Preview</span> crawl results on search page</span>
  </a>
  <input type="checkbox" name="previewResult" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="previewResult" style="display: inline-flex;">
    <div class="optionLine">
      <label for="previewResultPageSize" data-xztext="_每页显示的作品数量">Number of works shown per page</label>
      <input type="text" name="previewResultPageSize" id="previewResultPageSize" class="setinput_style blue w80" value="100">
    </div>
  </div>
</div>

When crawling on search pages for illustrations, manga, or Ugoira, the downloader displays crawled works on the current page, sorted by bookmark count from high to low.

Example:

![](../../template/en/images/20250909_220752.webp)

This feature provides a what-you-see-is-what-you-get experience. You can preview crawl results, filter them, and then download.

?> After crawling, you can use buttons in the downloader's "Crawl" tab to filter results.

**Note:** When this feature is enabled, the "Automatically start downloading" setting is disabled. This allows users to filter results before downloading. To start downloading automatically after crawling, disable this feature.

?> This feature does not work on novel search pages.

### Upper Limit

When the downloader crawls many works (e.g., thousands), displaying them all on the page increases memory usage. In extreme cases, this may cause the page to crash.

You can set a "Limit" to control the maximum number of displayed works. The default is `3000`.

## Automatically export crawl results

<div class="option settingsPanel_optionCard" data-no="30" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=30" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_自动导出抓取结果">Automatically <span class="key">export</span> crawl results</span>
  </a>
  <input type="checkbox" name="autoExportResult" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="autoExportResult" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_当抓取结果大于指定数量时启用">Enable when the crawl results exceed the specified number: </span>
      <input type="text" name="autoExportResultNumber" class="setinput_style blue" value="1">
    </div>
    <div class="optionLine">
      <span data-xztext="_文件格式">File format: </span>
      <input type="checkbox" name="autoExportResultCSV" id="autoExportResultCSV" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="autoExportResultCSV" class="active"> CSV </label>
      <input type="checkbox" name="autoExportResultJSON" id="autoExportResultJSON" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="autoExportResultJSON" class="active"> JSON </label>
    </div>
  </div>
</div>

When this setting is enabled, the downloader will automatically export crawling results **after crawling is complete**.

**Sub-options:**

- Enable when the crawl results exceed the specified number: Results will only be exported if the number of crawling results exceeds the specified value.
- File format: You can choose to export as a CSV file, a JSON file, or both. CSV format is easy to read, while JSON format can be used to import crawling results. The content in the two formats differs: JSON contains complete data, while CSV is generated based on JSON and includes only partial data, excluding some less commonly used information.

## After obtaining the work ID list, export the ID list and stop the task

<div class="option settingsPanel_optionCard" data-no="31" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=31" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_导出ID列表">After obtaining the work ID list, export the <span class="key">ID list</span> and stop the task</span>
  </a>
  <input type="checkbox" name="exportIDList" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

If you want to obtain the list of work IDs crawled by the downloader without downloading files, you can enable this option.

**Export timing:**

- The export occurs after the downloader has obtained the list of all work IDs to be crawled. Note that this is not "after crawling is complete" but earlier.

The crawling phase of the downloader consists of two steps:
1. Obtain the list of all work IDs.
2. Retrieve detailed data for each work, check filtering conditions, and save data for works that meet the conditions.

The export occurs after step 1 and stops the task, meaning step 2 is not executed.

!> Since the export happens early, filters are not applied at this stage, so the exported work ID list may include works that do not meet the filtering conditions.

**Exported content:**

The exported work ID list is saved to a JSON file. You can process this file as needed, but its design purpose is to work with another feature: the [Import ID list](/en/Buttons-Start-crawling/HomePage?id=import-id-list) button on the homepage.
