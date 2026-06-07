## Manage download records

<div class="option settingsPanel_optionCard new" data-no="62" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-records?flag=62" target="_blank" class="settingNameStyle" data-xztext="_管理下载记录" data-bind-click="true">Manage download <span class="key">records</span></a>
  <button type="button" class="textButton gray1 showMsgBtn" data-title="_管理下载记录" data-msg="_管理下载记录的提示" data-xztext="_帮助">Help</button>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent" id="exportDownloadRecord" data-event="exportDownloadRecord" data-xztext="_导出">Export</button>
    <button type="button" class="textButton fireEvent" id="importDownloadRecord" data-event="importDownloadRecord" data-xztext="_导入">Import</button>
    <button type="button" class="textButton fireEvent" id="importDownloadRecordTXT" data-event="importDownloadRecordTXT" data-xztext="_导入txt">Import (TXT)</button>
    <button type="button" class="textButton fireEvent" id="clearDownloadRecord" data-event="clearDownloadRecord" data-xztext="_清除">Clear</button>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Don't download duplicate files

<div class="option settingsPanel_optionCard" data-no="63" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-records?flag=63" target="_blank" class="settingNameStyle" data-xztext="_不下载重复文件" data-bind-click="true">Don't download <span class="key">duplicate</span> files</a>
  <input type="checkbox" name="deduplication" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="deduplication" style="display: none;">
    <span data-xztext="_策略">Strategy:</span>
    <input type="radio" name="dupliStrategy" id="dupliStrategy2" class="need_beautify radio" value="loose">
    <span class="beautify_radio" tabindex="0"></span>
    <label class="has_tip active" for="dupliStrategy2" data-xztip="_宽松模式说明" data-xztext="_宽松" data-tip="Judgment conditions: id, upload date of the work">Loose</label>
    <input type="radio" name="dupliStrategy" id="dupliStrategy1" class="need_beautify radio" value="strict" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label class="has_tip" for="dupliStrategy1" data-xztip="_严格模式说明" data-xztext="_严格" data-tip="Judgment conditions: id, upload date, file name of the work">Strict</label>
  </div>
  <button type="button" class="textButton gray1 showMsgBtn" data-title="_不下载重复文件" data-msg="_不下载重复文件的提示" data-xztext="_帮助">Help</button>
</div>

