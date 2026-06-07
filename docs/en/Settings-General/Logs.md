## Default visibility of the log area

<div class="option settingsPanel_optionCard" data-no="101" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Logs?flag=101" target="_blank" class="has_tip settingNameStyle" data-xztip="_日志区域的默认可见性的说明" data-tip="When the downloader outputs logs at the top of the page, you can control whether the log area is shown or hidden by default." data-bind-click="true">
    <span data-xztext="_日志区域的默认可见性">Default <span class="key">visibility</span> of the log area</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="radio" name="logVisibleDefault" id="logVisibleDefault1" class="need_beautify radio" value="show" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="logVisibleDefault1" data-xztext="_显示" class="active">Show</label>
  <input type="radio" name="logVisibleDefault" id="logVisibleDefault2" class="need_beautify radio" value="hide">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="logVisibleDefault2" data-xztext="_隐藏">Hide</label>
</div>

## Export log

<div class="option settingsPanel_optionCard" data-no="102" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Logs?flag=102" target="_blank" class="settingNameStyle" data-xztext="_导出日志" data-bind-click="true">Export <span class="key">log</span></a>
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
      <label for="exportLogNormal" data-xztext="_正常">Normal</label>
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

