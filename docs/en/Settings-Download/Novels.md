## Save the novel as

<div class="option settingsPanel_optionCard" data-no="67" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=67" target="_blank" class="has_tip settingNameStyle" data-xztip="_小说保存格式的说明" data-tip="TXT is a plain text file. When you select TXT format, the pictures in the novel will be saved separately. &lt;br&gt;EPUB is an e-book format, and the pictures in the novel will be embedded in the EPUB file." data-bind-click="true">
    <span data-xztext="_小说保存格式">Save the <span class="key">novel</span> as</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="radio" name="novelSaveAs" id="novelSaveAs2" class="need_beautify radio" value="epub" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="novelSaveAs2"> EPUB </label>
  <input type="radio" name="novelSaveAs" id="novelSaveAs1" class="need_beautify radio" value="txt">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="novelSaveAs1" class="active"> TXT </label>
</div>

## Save metadata in the novel

<div class="option settingsPanel_optionCard" data-no="68" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=68" target="_blank" class="has_tip settingNameStyle" data-xztip="_在小说里保存元数据提示" data-tip="Save the novel's title, author, tags and other information to the beginning of the novel." data-bind-click="true">
    <span data-xztext="_在小说里保存元数据">Save <span class="key">metadata</span> in the novel</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="saveNovelMeta" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Download the novel's cover image

<div class="option settingsPanel_optionCard" data-no="69" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=69" target="_blank" class="settingNameStyle" data-xztext="_下载小说的封面图片" data-bind-click="true">Download the novel's <span class="key">cover</span> image</a>
  <input type="checkbox" name="downloadNovelCoverImage" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Download embedded images in novels

<div class="option settingsPanel_optionCard" data-no="70" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=70" target="_blank" class="settingNameStyle" data-xztext="_下载小说里的内嵌图片" data-bind-click="true">Download <span class="key">embedded</span> images in novels</a>
  <input type="checkbox" name="downloadNovelEmbeddedImage" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Automatically merge novel series

<div class="option settingsPanel_optionCard" data-no="71" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=71" target="_blank" class="has_tip settingNameStyle" data-xztip="_自动合并系列小说的说明" data-tip="When crawling works, if a novel belongs to a series, automatically crawl all novels in that series and merge them." data-bind-click="true">
    <span data-xztext="_自动合并系列小说">Automatically <span class="key">merge</span> novel series</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="autoMergeNovel" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="autoMergeNovel" style="display: none;">
    <label for="skipNovelsInSeriesWhenAutoMerge" data-xztext="_不再单独下载系列里的小说" class="has_tip active" data-xztip="_不再单独下载系列里的小说的说明" data-tip="When you enable &quot;Automatically merge series novels&quot;, there is usually no need to download novels in the series individually, as they are already included in the merged novel file.&lt;br&gt;If you still want to download them, you can uncheck this sub-setting.">No longer download novels in the series individually</label>
    <span class="gray1"> ? &nbsp;</span>
    <input type="checkbox" name="skipNovelsInSeriesWhenAutoMerge" id="skipNovelsInSeriesWhenAutoMerge" class="need_beautify checkbox_switch" checked="">
    <span class="beautify_switch" tabindex="0"></span>
  </div>
</div>

## Split threshold when merging series novels

<div class="option settingsPanel_optionCard new" data-no="72" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Novels?flag=72" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_合并系列小说时的分割阈值">Split <span class="key">threshold</span> when merging series novels</span>
  </a>
  <input type="text" name="singleEPUBFileSizeLimit" class="setinput_style blue" value="200">
  <span>MiB</span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_合并系列小说时的分割阈值" data-msg="_合并系列小说时的分割阈值的帮助" data-xztext="_帮助">Help</button>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

