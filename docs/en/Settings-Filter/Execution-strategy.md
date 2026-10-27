## Do not crawl already downloaded works

<div class="option settingsPanel_optionCard" data-no="26" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=26" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_不抓取下载过的作品">Do not crawl <span class="key">already downloaded</span> works</span>
  </a>
  <input type="checkbox" name="DonotCrawlAlreadyDownloadedWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

If you enable this feature, the downloader checks whether a work has a download record before crawling it. If it does, the downloader will not crawl it. This reduces unnecessary crawling and saves time. This feature also helps with incremental updates, because you can crawl only the works that have not been downloaded yet.

In addition, when merging novel series, enabling this setting can skip the novels that have a download record, and only merge the newly added novels in the series.

**Note:**
- This feature relies on the download records saved by the downloader, so it is not completely accurate. If you clear the download records of the downloader, it will forget which files it has downloaded. If you want to learn more about the download records of the downloader, see the description in [Manage download records](/en/Settings-Download/Download-records?id=manage-download-records).
- Previously, the downloader did not save a download record for each novel when merging novel series, so they may still be downloaded once. After that, they will not be downloaded again.
- For multi-image works, as long as you have downloaded one of its images, the work is treated as downloaded, and it will be skipped in later crawls.

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

You can enter the IDs of the users you want to block, so that the downloader will not download the works of these users.

?> Note: you need to enter the **user ID** (a number), not the user name, because user names are not unique and may change.

?> If you want to block multiple users, you can enter multiple user IDs, separated by English commas `,`.

**Sub-options:**

### Quickly block users

When you hover the mouse pointer over the name of any user, the downloader shows a block button. Click the button to block this user.

### Remove their works from the page

After enabling it, the downloader looks for the works of blocked users on various pages, and removes them if found, so that you will not see the works of users you do not like.

When the downloader removes the works of some users, it shows the details in the log at the top, for example:

<span style="color: rgb(210, 126, 0);" class="log">Removed the works of the user <a href="https://www.pixiv.net/users/6756759" target="blank">村上水軍</a><br></span>

?> The works of blocked users are not removed on their own user pages, so that you can still view their pages normally.

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

When you crawl illustrations and manga on search pages (/tags and /search), the downloader can display the crawled works on the page, sorted by bookmark count from high to low.

Example:

![](../../template/en/images/20250909_220752.webp)

This feature provides a WYSIWYG experience. You can preview the crawl results, filter them, and then download them.

**Adjusting the crawl results:**

On these pages, after crawling is completed, you can use these buttons in the settings panel to adjust the crawl results:

- After changing the filter conditions, click "Filter in results"
- Clear multi-image works, clear Ugoira works, manually exclude works

**Number of works displayed per page**:

When there are many crawl results, the downloader displays them in pages to reduce performance pressure.

You can set the number of works displayed per page. The default is 100. Changes take effect immediately.

---

**Note:** When this feature is enabled, the "Automatically start downloading" setting does not take effect. This is to give you a chance to filter the results before downloading, and then download them. If you want to automatically start downloading after crawling, you can disable this feature.

?> This feature does not take effect on novel search pages.

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

After enabling this setting, the downloader automatically exports the crawl results when **crawling is completed**.

**Sub-options:**

- **Enable when the number of crawl results is greater than the specified number**: if you only want to export when there are many crawl results, you can use this setting. The crawl results are exported only when the number of crawl results is greater than the specified value. Note: if it is set to 0, the results will be exported as long as there is one crawl result.

- **File format**: you can choose to export as a CSV file and/or a JSON file. CSV is plain text table data, which can be opened with spreadsheet software such as Excel, and is easy to read. JSON is suitable for analysis with code, and can also be used to import crawl results into the downloader. The contents of the two formats are also different: the content in JSON is complete, while the content in CSV is generated from JSON and only contains partial data, without saving some rarely used data.

## After obtaining the work ID list, export the ID list and stop the task

<div class="option settingsPanel_optionCard" data-no="31" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Execution-strategy?flag=31" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_导出ID列表">After obtaining the work ID list, export the <span class="key">ID list</span> and stop the task</span>
  </a>
  <input type="checkbox" name="exportIDList" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

If you want to get the work ID list crawled by the downloader, and do not need to download the files, you can enable this option.

**Export timing:**

- The export happens after the downloader has obtained the IDs of all the works to be crawled. Note that this is not "after crawling is completed", but earlier.

The crawling stage of the downloader is divided into 2 steps:
1. Get the ID list of all works.
2. Get the detailed data of each work one by one, check the filter conditions, and save the data of the works that meet the conditions.

The export happens after step 1, and the task is stopped, that is, step 2 will not be executed.

!> Because the export happens relatively early, the filters have not been applied at that time, so the exported work IDs may contain works that do not meet the filter conditions.

**Exported content:**

The exported work ID list is saved to a JSON file. You can process the file yourself, but by design it is intended to be used with another feature: the [Import work ID list](/en/Buttons-Start-crawling/HomePage?id=import-work-id-list) button on the home page.

**Usage example:**

When the works you need to crawl come from multiple different pages, and you want to combine them into one crawl task, you can do this:

- Enable this setting;
- Get the work ID list on each page;
- Combine them together (put all the work IDs into the same JSON file);
- Disable this setting;
- Use the "Import ID list" feature on the home page to start crawling.
