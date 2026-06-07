## Color theme

<div class="option settingsPanel_optionCard" data-no="98" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Appearance?flag=98" target="_blank" class="settingNameStyle" data-xztext="_颜色主题" data-bind-click="true">Color <span class="key">theme</span></a>
  <input type="radio" name="theme" id="theme1" class="need_beautify radio" value="auto" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="theme1" data-xztext="_自动检测" class="active">Auto</label>
  <input type="radio" name="theme" id="theme2" class="need_beautify radio" value="white">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="theme2">White</label>
  <input type="radio" name="theme" id="theme3" class="need_beautify radio" value="dark">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="theme3">Dark</label>
</div>

## Background image

<div class="option settingsPanel_optionCard" data-no="99" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Appearance?flag=99" target="_blank" class="has_tip settingNameStyle" data-xztip="_背景图片的说明" data-tip="You can select a local image as the background image of the downloader." data-bind-click="true">
    <span data-xztext="_背景图片"><span class="key">Background</span> image</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="bgDisplay" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="bgDisplay" style="display: none;">
    <div class="optionLine">
      <button type="button" class="textButton fireEvent" data-event="selectBG" id="selectBG" data-xztext="_选择文件">Select a file</button>
      <button type="button" class="textButton fireEvent" data-event="clearBG" id="clearBG" data-xztext="_清除">Clear</button>
    </div>
    <div class="optionLine">
      <span data-xztext="_对齐方式">Alignment</span>&nbsp;
      <input type="radio" name="bgPositionY" id="bgPosition1" class="need_beautify radio" value="center" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="bgPosition1" data-xztext="_居中">center</label>
      <input type="radio" name="bgPositionY" id="bgPosition2" class="need_beautify radio" value="top">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="bgPosition2" data-xztext="_顶部" class="active">top</label>
    </div>
    <div class="optionLine">
      <span data-xztext="_不透明度" class="mr4">Opacity</span>
      <input name="bgOpacity" type="range">
    </div>
  </div>
</div>

## Highlight keywords

<div class="option settingsPanel_optionCard" data-no="100" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Appearance?flag=100" target="_blank" class="has_tip settingNameStyle" data-xztip="_高亮显示关键字的说明" data-tip="Highlight the keywords in each setting name so that you can quickly find the settings you need." data-bind-click="true">
    <span data-xztext="_高亮显示关键字"><span class="key">Highlight</span> keywords</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="boldKeywords" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

