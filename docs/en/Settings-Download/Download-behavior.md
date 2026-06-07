## Download thread

<div class="option settingsPanel_optionCard" data-no="51" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=51" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_同时下载数量">Download <span class="key">thread</span></span>
  </a>
  <input type="text" name="downloadThread" class="has_tip setinput_style blue" data-xztip="_下载线程的说明" value="24" data-tip="You can type a number between 1-6 to set the number of concurrent downloads">
</div>

## Download starts automatically

<div class="option settingsPanel_optionCard" data-no="52" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=52" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_自动开始下载">Download starts <span class="key">automatically</span></span>
  </a>
  <input type="checkbox" name="autoStartDownload" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_自动开始下载" data-msg="_自动开始下载的帮助内容" data-xztext="_帮助">Help</button>
</div>

## Bookmark works after downloading

<div class="option settingsPanel_optionCard" data-no="53" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=53" target="_blank" class="has_tip settingNameStyle" data-xztip="_下载之后收藏作品的提示" data-tip="After you download a file, the downloader will automatically bookmark the work." data-bind-click="true">
    <span data-xztext="_下载之后收藏作品"><span class="key">Bookmark</span> works after downloading</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="bmkAfterDL" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Download a work when you click the bookmark button

<div class="option settingsPanel_optionCard" data-no="54" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=54" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击收藏按钮时下载作品">Download a work when you click the <span class="key">bookmark</span> button</span>
  </a>
  <input type="checkbox" name="downloadOnClickBookmark" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Download a work when you click the like button

<div class="option settingsPanel_optionCard" data-no="55" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=55" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击点赞按钮时下载作品">Download a work when you click the <span class="key">like</span> button</span>
  </a>
  <input type="checkbox" name="downloadOnClickLike" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Download interval

<div class="option settingsPanel_optionCard" data-no="56" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=56" target="_blank" class="has_tip settingNameStyle" data-xztip="_下载间隔的说明" data-tip="Start a download every certain interval of time.&lt;br&gt;
If the interval time is set to 0, the downloader will not add delay time.&lt;br&gt;
If set to 1 second (default value), then up to 3600 crawl results will be downloaded per hour (not counting attached download files, such as novel cover images and embedded images).&lt;br&gt;
This is because when continuously downloading many files (especially novels), your Pixiv account may be warned or banned. Setting the interval time can alleviate this issue.&lt;br&gt;" data-bind-click="true">
    <span data-xztext="_下载间隔">Download <span class="key">interval</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="downloadIntervalSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="downloadIntervalSwitch" style="display: inline-flex;">
    <div class="optionLine">
      <span data-xztext="_当文件数量大于">Enable when the number of files exceeds the specified number: </span>
      <input type="text" name="downloadIntervalOnWorksNumber" class="setinput_style blue" value="150">
    </div>
    <div class="optionLine">
      <span data-xztext="_间隔时间">Interval time: </span>
      <input type="text" name="downloadInterval" class="setinput_style blue" value="0">
      <span data-xztext="_秒">seconds</span>
    </div>
  </div>
</div>

## File download order

<div class="option settingsPanel_optionCard" data-no="57" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=57" target="_blank" class="settingNameStyle" data-xztext="_文件下载顺序" data-bind-click="true">File download <span class="key">order</span></a>
  <input type="checkbox" name="setFileDownloadOrder" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="setFileDownloadOrder" style="display: none;">
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_排序依据">Sort by</span>
      <input type="radio" name="downloadOrderSortBy" id="downloadOrderSortBy1" class="need_beautify radio" value="ID" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="downloadOrderSortBy1" data-xztext="_作品ID" class="active">Work ID</label>
      <input type="radio" name="downloadOrderSortBy" id="downloadOrderSortBy2" class="need_beautify radio" value="bookmarkCount">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="downloadOrderSortBy2" data-xztext="_收藏数量2">Bookmark count</label>
      <input type="radio" name="downloadOrderSortBy" id="downloadOrderSortBy3" class="need_beautify radio" value="bookmarkID">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="downloadOrderSortBy3" data-xztext="_收藏时间">Bookmark time</label>
    </div>
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_排序方式">Sorting method</span>
      <input type="radio" name="downloadOrder" id="downloadOrder1" class="need_beautify radio" value="desc" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="downloadOrder1" data-xztext="_降序" class="active">Descending</label>
      <input type="radio" name="downloadOrder" id="downloadOrder2" class="need_beautify radio" value="asc">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="downloadOrder2" data-xztext="_升序">Ascending</label>
    </div>
  </div>
</div>

## Prioritize downloading Ugoira

<div class="option settingsPanel_optionCard" data-no="58" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=58" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_优先下载动图">Prioritize downloading Ugoira</span>
  </a>
  <input type="checkbox" name="downloadUgoiraFirst" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## File size limit

<div class="option settingsPanel_optionCard" data-no="59" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=59" target="_blank" class="has_tip settingNameStyle" data-xztip="_文件体积限制的说明" data-tip="If a file does not meet the required size, the downloader will not download it." data-bind-click="true">
    <span data-xztext="_文件体积限制">File <span class="key">size</span> limit</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="sizeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="sizeSwitch" style="display: none;">
    <input type="text" name="sizeMin" class="setinput_style blue" value="0">MiB &nbsp;-&nbsp;
    <input type="text" name="sizeMax" class="setinput_style blue" value="100">MiB
  </div>
</div>

## Save file to the user's last selected location

<div class="option settingsPanel_optionCard" data-no="60" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=60" target="_blank" class="has_tip settingNameStyle" data-xztip="_使用前请先查看提示" data-tip="View the tip before use" data-bind-click="true">
    <span data-xztext="_把文件保存到用户上次选择的位置">Save file to the user's last <span class="key">selected</span> location</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="rememberTheLastSaveLocation" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_把文件保存到用户上次选择的位置" data-msg="_把文件保存到用户上次选择的位置的说明" data-xztext="_帮助">Help</button>
</div>

## Show notification after download is complete

<div class="option settingsPanel_optionCard" data-no="61" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-behavior?flag=61" target="_blank" class="has_tip settingNameStyle" data-xztip="_下载完成后显示通知的说明" data-tip="Show a system notification when all files have been downloaded. May require notification permission." data-bind-click="true">
    <span data-xztext="_下载完成后显示通知">Show <span class="key">notification</span> after download is complete</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="showNotificationAfterDownloadComplete" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

