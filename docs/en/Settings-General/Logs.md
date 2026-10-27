## Log area by default

<div class="option settingsPanel_optionCard" data-no="101" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Logs?flag=101" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_日志区域默认">Log area by <span class="key">default</span></span>
  </a>
  <input type="radio" name="logVisibleDefault" id="logVisibleDefault1" class="need_beautify radio" value="show" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="logVisibleDefault1" data-xztext="_显示" class="active">Show</label>
  <input type="radio" name="logVisibleDefault" id="logVisibleDefault2" class="need_beautify radio" value="hide">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="logVisibleDefault2" data-xztext="_隐藏">Hide</label>
</div>

When the downloader outputs logs at the top of the page, you can control whether the log area is shown or hidden by default. The default value is `Show`.

What is the difference between the two options?

If you frequently need to view logs, choosing `Show` will be more convenient. However, this option may affect the browsing experience in certain cases: if the page has not been scrolled yet, displaying the log area will cause the page content to move downward. Illustration:

![](../../template/publicImages/20260610_003207.webp)

If the page has already been scrolled down some distance, there will be no such effect (the page content will not move downward).

If you do not want the log area to disturb you, you can choose `Hide`, which will not cause the above issue.

PS: No matter which option you choose, when you want to view the logs, you can always press the shortcut key `L` to display the log area.

## Automatic log export

<div class="option settingsPanel_optionCard" data-no="102" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Logs?flag=102" target="_blank" class="settingNameStyle" data-xztext="_自动导出日志" data-bind-click="true">Automatic <span class="key">log export</span></a>
  <input type="checkbox" name="exportLog" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="exportLog" style="display: none;">
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_导出时机">Export timing</span>
      <input type="radio" name="exportLogTiming" id="exportLogTiming1" class="need_beautify radio" value="crawlComplete">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="exportLogTiming1" data-xztext="_抓取完毕2">Crawl complete</label>
      <input type="radio" name="exportLogTiming" id="exportLogTiming2" class="need_beautify radio" value="downloadComplete" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="exportLogTiming2" data-xztext="_下载完毕" class="active">Download complete</label>
    </div>
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_日志类型">Log type</span>
      <input type="checkbox" name="exportLogNormal" id="exportLogNormal" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="exportLogNormal" data-xztext="_正常" class="active">Normal</label>
      <input type="checkbox" name="exportLogError" id="exportLogError" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="exportLogError" data-xztext="_错误" class="active">Error</label>
    </div>
    <div class="optionLine">
      <span data-xztext="_排除关键字">Exclude keywords</span>&nbsp;
      <input type="text" name="exportLogExclude" class="setinput_style blue setinput_tag">
    </div>
  </div>
</div>

This feature can export the log displayed by the downloader at the top of the page, and save it to an HTML file.

?> The HTML format is used because it can display colored text, which preserves the display effect of the log area.

?> This feature is a legacy feature. Previously, in one task (from the start of crawling to the completion of downloading), if the downloader output too many logs (for example more than 300 entries), the downloader cleared the previous logs. Since users could not view the cleared logs, I added this feature. Exporting the log is a way to back up the log, and it keeps the complete log. But now the downloader no longer clears logs during a task, so this feature is not very necessary anymore.

?> Some enhanced features of the downloader do not include the crawling and downloading process, so the downloader does not automatically export the logs of these features.

?> In addition, there is a button at the bottom of the log area to export the log manually. These two ways of exporting logs are independent. If you only want to save logs occasionally, you can just use the manual log export feature.

Sub-options:

### Export timing

- `Crawling completed`: export the log when the downloader finishes crawling. This only contains the logs of the crawling stage.
- `Downloading completed`: export the log when the downloader finishes downloading. This is the complete log.

### Log type

- `Normal`: export logs of the normal level (logs that are not red).
- `Error`: export logs of the error level (red logs).

These two options can be enabled at the same time. By default only the `Error` type is selected, so only logs containing error messages are saved. If you want to save all logs, you need to also select `Normal`.

?> The downloader has 4 log levels, and they use different colors. Only the red ones are error logs.

### Exclude keywords

You can set multiple keywords to exclude.

If a log contains **any** of the keywords, the downloader will not export it. So you can exclude some logs you do not need.

The default value `404,429,500` excludes some error messages.
