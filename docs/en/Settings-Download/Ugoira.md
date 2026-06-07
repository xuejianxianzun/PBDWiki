## Save the ugoira work as

<div class="option settingsPanel_optionCard" data-no="65" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Ugoira?flag=65" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_动图保存格式">Save the <span class="key">ugoira</span> work as</span>
  </a>
  <button type="button" class="textButton gray1 showMsgBtn" data-title="_动图保存格式" data-msg="_动图保存格式的说明" data-xztext="_帮助">Help</button>
  <div class="subOptionWrap flexBasis100" style="display: inline-flex">
    <div class="optionLine">
      <input type="checkbox" name="ugoiraSaveAsWebP" id="ugoiraSaveAsWebP" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsWebP" data-xztext="_webp图片">WebP image</label>
      <input type="checkbox" name="ugoiraSaveAsWebM" id="ugoiraSaveAsWebM" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsWebM" data-xztext="_webmVideo" class="active">WebM video</label>
      <input type="checkbox" name="ugoiraSaveAsGIF" id="ugoiraSaveAsGIF" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsGIF" data-xztext="_gif图片">GIF image</label>
      <input type="checkbox" name="ugoiraSaveAsAPNG" id="ugoiraSaveAsAPNG" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsAPNG" data-xztext="_apng图片">APNG image</label>
      <input type="checkbox" name="ugoiraSaveAsZIP" id="ugoiraSaveAsZIP" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsZIP" data-xztext="_zip文件">ZIP file</label>
      <input type="checkbox" name="ugoiraSaveAsUgoira" id="ugoiraSaveAsUgoira" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsUgoira" data-xztext="_Ugoira文件">Ugoira file</label>
    </div>
    <div class="optionLine">
      <span data-xztext="_WebP图像质量">WebP image quality</span>
      <input type="radio" name="animatedWebPQuality" id="webpUgoiraQuality0" class="need_beautify radio" value="lossy" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="webpUgoiraQuality0" data-xztext="_有损" class="active">Lossy</label>
      <input type="radio" name="animatedWebPQuality" id="webpUgoiraQuality1" class="need_beautify radio" value="lossless">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="webpUgoiraQuality1" data-xztext="_无损">Lossless</label>
    </div>
    <div class="optionLine">
      <label for="saveThumbnailForUgoira" data-xztext="_为动图保存一张缩略图">Save a thumbnail for Ugoira</label>
      <input type="checkbox" name="saveThumbnailForUgoira" id="saveThumbnailForUgoira" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
  </div>
</div>

## How many animations are converted at the same time

<div class="option settingsPanel_optionCard" data-no="66" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Ugoira?flag=66" target="_blank" class="has_tip settingNameStyle" data-xztip="_同时转换多少个动图的说明" data-tip="Converting multiple animations at the same time will increase resource consumption.&lt;br&gt;
    It is recommended not to exceed 3.
    " data-bind-click="true">
    <span data-xztext="_同时转换多少个动图">How many animations are <span class="key">converted</span> at the same time</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="text" name="convertUgoiraThread" class="setinput_style blue" value="1">
</div>

