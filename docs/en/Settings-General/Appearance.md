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


You can choose the downloader's color theme.

- `Auto`: Default. The downloader automatically detects Pixiv's color theme and uses the same.
- `White`: Light mode
- `Dark`: Dark mode

?> The downloader defaults to following Pixiv's color theme.

Pixiv's pages default to light mode. To use dark mode, click your Pixiv avatar and select "Dark mode" from the menu, as shown:

![](images/20250909_221310.png)

!> Some users may use [Dark Reader](https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh), an extension that displays websites in dark mode. If you want dark mode on Pixiv, use Pixiv's built-in dark mode. If you keep Pixiv in its default light theme and use Dark Reader to display it in dark mode, the downloader's `Auto` option will still use light mode, which may not meet your expectations. You can manually set the downloader's color theme to `Dark`.

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


    &nbsp;
    <span data-xztext="_Alignment">Alignment</span>&nbsp;
    <input type="radio" name="bgPositionY" id="bgPosition1" class="need_beautify radio" value="center" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="bgPosition1" data-xztext="_Center" class="active">Center</label>
    <input type="radio" name="bgPositionY" id="bgPosition2" class="need_beautify radio" value="top">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="bgPosition2" data-xztext="_Top">Top</label>
    <span data-xztext="_Opacity">Opacity</span>&nbsp;
    <input name="bgOpacity" type="range">
    </span>
    </p>

You can set a favorite image as the downloader's background image and adjust its transparency and alignment.

The effect is shown below:

![](images/20250909_221755.webp)

?> The downloader does not include built-in background images, so you need to select one yourself. The background image in the example above is from [92215267](https://www.pixiv.net/artworks/92215267).

?> It's recommended to use a darker image as the background, as bright backgrounds can make text harder to read.

This setting includes buttons and options:

## Highlight keywords

<div class="option settingsPanel_optionCard" data-no="100" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Appearance?flag=100" target="_blank" class="has_tip settingNameStyle" data-xztip="_高亮显示关键字的说明" data-tip="Highlight the keywords in each setting name so that you can quickly find the settings you need." data-bind-click="true">
    <span data-xztext="_高亮显示关键字"><span class="key">Highlight</span> keywords</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="boldKeywords" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>



The downloader displays keywords in each setting item in blue and bold, for example:

![](images/20250909_221934.png)

This is because the downloader has many settings, and finding a specific one can take time. This feature improves efficiency.

