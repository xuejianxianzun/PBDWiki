# Settings - More - Crawl

## Show advanced settings

<p class="option" data-no="57" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_ShowAdvancedSettingsDescription" data-tip="The downloader hides some settings by default. Click to show all settings.<br>Hidden settings still take effect.">
    <span data-xztext="_ShowAdvancedSettings">Show <span class="key">advanced</span> settings</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="showAdvancedSettings" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    </p>

Controls whether advanced settings are displayed.

By default, this is not enabled, meaning advanced settings are not shown.

Since the downloader has many options, some less commonly used ones are hidden by default to make the interface cleaner and prevent new users from feeling overwhelmed by too many options.

?> Hidden settings still function normally.

## Slow down crawl

<p class="option" data-no="75" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Description of slowing down crawling speed" data-tip="Slowing down the crawling speed can prevent temporary restrictions (429 status code) by Pixiv during crawling. &lt;br&gt;This will increase the crawling time.">
    <span data-xztext="_减慢抓取速度"><span class="key">Slow down</span> crawl</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="slowCrawl" class="need_beautify checkbox_switch" checked>
    <span class="beautify_switch" tabindex="0"></span>
    <span class="subOptionWrap" data-show="slowCrawl" style="display: inline-flex;">
    <span data-xztext="_When the number of works is greater than">Enabled when the number of works exceeds the specified number:</span>
    <input type="text" name="slowCrawlOnWorksNumber" class="setinput_style1 blue" value="100">
    <span class="verticalSplit"></span>
    <span data-xztext="_Interval time">Interval time:</span>
    <input type="text" name="slowCrawlDealy" class="setinput_style1 blue" value="1600" placeholder="1600"> ms
    </span>
    </p>

Slowing down the crawling speed can prevent the downloader from being temporarily restricted by Pixiv during crawling (see [What Is a 429 Error?](/en/FAQ?id=what-is-a-429-error)), but it will increase the crawling time.

If this setting is enabled, the downloader will limit concurrent requests to 1 during crawling. After each request is completed, it will wait for a certain period (depending on the interval time value) before sending the next request, reducing the crawling frequency to avoid triggering the 429 restriction.

?> This setting only takes effect during the crawling phase and does not affect the downloading phase.

**Sub-options:**

- `Enabled when the number of works exceeds the specified number`: When the number of works to be crawled exceeds this number (default is `100`), the downloader will use the slow crawling mode. If the number of works to be crawled is small, the downloader will still complete the crawling quickly.
- `Interval time`: You can set how long to wait after completing one request before sending the next one. The unit is milliseconds, with a default value of `1600`. If you frequently encounter 429 errors, you can increase this value, e.g., to `2000`.

**Note:**

This option does not completely prevent 429 errors. Reasons include:

1. It assumes the user is crawling from only one page, which should not trigger a 429 error. However, if the user is crawling from 2 or 3 pages simultaneously, frequent requests may still trigger a 429 error.
2. Some normal user operations also consume quotas, such as opening work pages, previewing works, or bookmarking works. When the quota is exhausted, a 429 error may be triggered. Therefore, during crawling, if the user performs many such operations, it may also lead to a 429 error.

## Do not crawl the last image of multi-image works

<p class="option" data-no="69" style="display: flex;">
    <span class="settingNameStyle1" data-xztext="_不抓取多图作品的最后一张图片">Do not crawl the <span class="key">last image</span> of multi-image works</span>
    <input type="checkbox" name="doNotDownloadLastImageOfMultiImageWork" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    </p>

If you enable this option, the downloader will skip the last image of multi-image works during crawling.

For example, some users' multi-image works may have a promotional image for Fanbox as the last image, which you may not want to download. In such cases, you can enable this option.

## User block list

<p class="option" data-no="35" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Description of user block list" data-tip="Do not download works from these users. Enter user IDs. &lt;br&gt;If there are multiple user IDs, separate them with commas.">
    <span data-xztext="_用户阻止名单">User <span class="key">block</span> list</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="userBlockList" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    <span class="subOptionWrap" data-show="userBlockList" style="display: none;">
      <textarea class="centerPanelTextArea beautify_scrollbar" name="blockList" rows="1" placeholder="11111,22222,33333"></textarea>
      <br>
      <input type="checkbox" name="removeBlockedUsersWork" id="setRemoveBlockedUsersWork" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="setRemoveBlockedUsersWork" data-xztext="_Remove their works from the page" class="active">Remove their works from the page</label>
      <button type="button" class="gray1 textButton" id="showRemoveBlockedUsersWorkTip" data-xztext="_Tip">Tip</button>
    </span>
    </p>

You can enter the IDs of users you want to block, and the downloader will not download works from these users.

?> Note: You need to enter **user IDs** (numbers), not usernames, as usernames are not unique.

?> To block multiple users, enter multiple user IDs separated by commas `,`.

This option also has a sub-option: Remove their works from the page. When enabled, the downloader will search for works from blocked users on various pages and remove them, so you won't see works from users you don't like.

When the downloader removes works from certain users, it will display details in the log at the top, for example:

<span style="color: rgb(210, 126, 0);" class="log">Removed works from user <a href="https://www.pixiv.net/users/6756759" target="blank">村上水軍</a><br></span>

?> Works from blocked users will not be removed from their own profile pages, allowing you to view their profiles normally.

## Block tags for specific users

<div class="option" data-no="39" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Tip for blocking tags for specific users" data-tip="For example, exclude specific tags when crawling works from user 123456.">
    <span data-xztext="_针对特定用户屏蔽tag">Block <span class="key">tags</span> for specific users</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="blockTagsForSpecificUser" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    <span class="subOptionWrap" data-show="blockTagsForSpecificUser" style="display: none;">
    <slot data-name="blockTagsForSpecificUser"><div class="blockTagsForSpecificUserWrap">
    <div class="controlBar">
      <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_Collapse">Collapse</button>
      <button type="button" class="textButton showAdd" data-xztext="_Add">Add</button>
    </div>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem uid">
          <span class="label uidLabel" data-xztext="_User ID">User ID (number)</span>
          <input type="text" class="setinput_style1 blue addUidInput" data-xzplaceholder="_Must be a number" placeholder="Must be a number">
        </div>
        <div class="inputItem tags">
          <span class="label tagsLabel">Tags</span>
          <input type="text" class="setinput_style1 blue addTagsInput" data-xzplaceholder="_Separate tags with commas" placeholder="Separate multiple tags with commas">
        </div>
      </div>
    </div>
    <div class="listWrap" style="display: block;"></div>
  </div></slot>
    </span>
    </div>

If you don't like certain works from a specific user and don't want the downloader to crawl or download them, you can enable this setting.

You can enter a user ID and specific tags from their works. When the downloader crawls works from this user, it will skip works containing these tags.

For example, you can set to exclude `tag1,tag2,tag3` from user ID `123456`.

## The interval time of timed crawl

<p class="option" data-no="74" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Description of timed crawling interval" data-tip="Some pages have a 'Timed Crawling' button, which automatically starts crawling and downloading at regular intervals. &lt;br&gt;You can set the interval between each crawl here.">
    <span data-xztext="_定时抓取的间隔时间">The interval time of <span class="key">timed crawl</span></span>
    <span class="gray1"> ? </span>
    </span>
    <input type="text" name="timedCrawlInterval" class="setinput_style1 blue" value="120">
    <span class="settingNameStyle1" data-xztext="_Minutes">Minutes</span>
    </p>

Set the interval for timed crawling.

Some pages have a [Timed crawl](/en/Buttons-Crawl?id=timed-crawl) button. Clicking it allows the downloader to automatically perform crawling and downloading at regular intervals. You can set the interval between each crawl here.

The default value is 120 minutes (2 hours).

## Automatically export crawl results

<p class="option" data-no="54" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Description of auto-exporting crawling results" data-tip="Automatically export crawling results after crawling is complete. &lt;br&gt;Two formats are available: CSV for easy reading, and JSON for importing crawling results.">
    <span data-xztext="_自动导出抓取结果">Automatically <span class="key">export</span> crawl results</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="autoExportResult" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    <span class="subOptionWrap" data-show="autoExportResult" style="display: none;">
    <span data-xztext="_Crawling results">Crawling results</span>
    <span>&gt;</span>
    <input type="text" name="autoExportResultNumber" class="setinput_style1 blue" value="1" style="width:30px;min-width: 30px;">
    <span>&nbsp;</span>
    <span class="settingNameStyle1" data-xztext="_File format">File format</span>
    <input type="checkbox" name="autoExportResultCSV" id="autoExportResultCSV" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="autoExportResultCSV" class="active"> CSV </label>
    <input type="checkbox" name="autoExportResultJSON" id="autoExportResultJSON" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="autoExportResultJSON"> JSON </label>
    </span>
    </p>

When this setting is enabled, the downloader will automatically export crawling results **after crawling is complete**.

**Sub-options:**

- Crawling results: Results will only be exported if the number of crawling results exceeds the specified value.
- File format: You can choose to export as a CSV file, a JSON file, or both. CSV format is easy to read, while JSON format can be used to import crawling results. The content in the two formats differs: JSON contains complete data, while CSV is generated based on JSON and includes only partial data, excluding some less commonly used information.

## After obtaining the work ID list, export the ID list and stop the task

<p class="option" data-no="85" style="display: flex;">
    <span class="has_tip settingNameStyle1" data-xztip="_Description of exporting ID list" data-tip="This will only perform crawling without starting downloads. &lt;br&gt;Most filtering conditions will be ignored.">
    <span data-xztext="_导出ID列表">After obtaining the work ID list, export the <span class="key">ID list</span> and stop the task</span>
    <span class="gray1"> ? </span>
    </span>
    <input type="checkbox" name="exportIDList" class="need_beautify checkbox_switch">
    <span class="beautify_switch" tabindex="0"></span>
    </p>

If you want to obtain the list of work IDs crawled by the downloader without downloading files, you can enable this option.

**Export timing:**

- The export occurs after the downloader has obtained the list of all work IDs to be crawled. Note that this is not "after crawling is complete" but earlier.

The crawling phase of the downloader consists of two steps:
1. Obtain the list of all work IDs.
2. Retrieve detailed data for each work, check filtering conditions, and save data for works that meet the conditions.

The export occurs after step 1 and stops the task, meaning step 2 is not executed.

!> Since the export happens early, filters are not applied at this stage, so the exported work ID list may include works that do not meet the filtering conditions.

**Exported content:**

The exported work ID list is saved to a JSON file. You can process this file as needed, but its design purpose is to work with another feature: the "Import ID List" button on the homepage.

The exported JSON file is an array of objects with the following format:

```
[
  { "id": "130827095", "type": "illusts" },
  { "id": "130816057", "type": "illusts" },
  { "id": "130811075", "type": "novel" },
  { "id": "130808918", "type": "novel" }
]
```

`id` is the work ID, and `type` is the work type, which may be `"illusts"` or `"novel"`.