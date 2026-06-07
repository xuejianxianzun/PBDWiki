## Do not crawl already downloaded works

<div class="option settingsPanel_optionCard new" data-no="26" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=26" target="_blank" class="has_tip settingNameStyle" data-xztip="_不抓取下载过的作品的说明" data-tip="If the downloader has a download record for this work, it will not be crawled." data-bind-click="true">
    <span data-xztext="_不抓取下载过的作品">Do not crawl <span class="key">already downloaded</span> works</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="DonotCrawlAlreadyDownloadedWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_不抓取下载过的作品" data-msg="_不抓取下载过的作品的帮助信息" data-xztext="_帮助">Help</button>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## User block list

<div class="option settingsPanel_optionCard" data-no="27" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=27" target="_blank" class="has_tip settingNameStyle" data-xztip="_用户阻止名单的说明" data-tip="The works of these users will not be downloaded. Need to type the user ID.&lt;br&gt;
    If there are multiple user ID, use comma (,) separated." data-bind-click="true">
    <span data-xztext="_用户阻止名单">User <span class="key">block</span> list</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="userBlockList" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="userBlockList" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="blockList" rows="1" placeholder="11111,22222,33333"></textarea>
    <br>
    <input type="checkbox" name="removeBlockedUsersWork" id="setRemoveBlockedUsersWork" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setRemoveBlockedUsersWork" data-xztext="_从页面上移除他们的作品" class="active">Remove their work from the page</label>
    <button type="button" class="gray1 textButton showMsgBtn" data-title="_用户阻止名单" data-msg="_用户阻止名单的说明2" data-xztext="_帮助">Help</button>
  </div>
</div>

## Slow down crawl

<div class="option settingsPanel_optionCard" data-no="28" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=28" target="_blank" class="has_tip settingNameStyle" data-xztip="_减慢抓取速度的说明" data-tip="Slowing down the crawl speed can help avoid Pixiv temporarily blocking your crawl (429 status code). &lt;br&gt;This will increase crawl time." data-bind-click="true">
    <span data-xztext="_减慢抓取速度"><span class="key">Slow down</span> crawl</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="slowCrawl" class="need_beautify checkbox_switch">
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

## The interval time of timed crawl

<div class="option settingsPanel_optionCard" data-no="29" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=29" target="_blank" class="has_tip settingNameStyle" data-xztip="_定时抓取的间隔时间的说明" data-tip="There is a &quot;Timed crawl&quot; button on some pages, which automatically starts crawling and downloading at a certain interval. &lt;br&gt;You can set the interval time for each crawl here." data-bind-click="true">
    <span data-xztext="_定时抓取的间隔时间">The interval time of <span class="key">timed crawl</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="text" name="timedCrawlInterval" class="setinput_style blue" value="30">
  <span class="mr4" data-xztext="_分钟">Minute</span>
</div>

## Automatically export crawl results

<div class="option settingsPanel_optionCard" data-no="30" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=30" target="_blank" class="has_tip settingNameStyle" data-xztip="_自动导出抓取结果的说明" data-tip="The crawl results can be automatically exported when the crawl is completed. &lt;br&gt;Two formats are available: CSV format is easy to read, and JSON format can be used to import crawl results." data-bind-click="true">
    <span data-xztext="_自动导出抓取结果">Automatically <span class="key">export</span> crawl results</span>
    <span class="gray1"> ? </span>
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
      <label for="autoExportResultCSV"> CSV </label>
      <input type="checkbox" name="autoExportResultJSON" id="autoExportResultJSON" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="autoExportResultJSON" class="active"> JSON </label>
    </div>
  </div>
</div>

## After obtaining the work ID list, export the ID list and stop the task

<div class="option settingsPanel_optionCard" data-no="31" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Execution-strategy?flag=31" target="_blank" class="has_tip settingNameStyle" data-xztip="_导出ID列表的说明" data-tip="Only a crawl will be run, no download will be started. &lt;br&gt;Most filters are ignored." data-bind-click="true">
    <span data-xztext="_导出ID列表">After obtaining the work ID list, export the <span class="key">ID list</span> and stop the task</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="exportIDList" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

