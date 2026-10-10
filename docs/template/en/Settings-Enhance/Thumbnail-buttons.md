## Button position on thumbnails

<div class="option settingsPanel_optionCard new" data-no="82" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnail-buttons?flag=82" target="_blank" class="settingNameStyle has_tip" data-xztip="_缩略图上按钮的位置的说明" data-tip="The downloader will display some buttons on the work thumbnails. You can set whether they appear on the left or right side of the thumbnail." data-bind-click="true">
    <span data-xztext="_缩略图上按钮的位置">Button <span class="key">position</span> on thumbnails</span>
    <span class="gray"> ? </span>
  </a>
  <input type="radio" name="magnifierPosition" id="magnifierPosition1" class="need_beautify radio" value="left">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="magnifierPosition1" data-xztext="_左侧">Left</label>
  <input type="radio" name="magnifierPosition" id="magnifierPosition2" class="need_beautify radio" value="right" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="magnifierPosition2" data-xztext="_右侧" class="active">Right</label>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


When you hover over a thumbnail, the downloader displays some buttons on it, as shown below:

![](../images/20260426_233917.png)

By default they are shown on the right side, but you can switch them to the left side if you want.

## Show Image viewer button on thumbnail

<div class="option settingsPanel_optionCard" data-no="83" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnail-buttons?flag=83" target="_blank" class="settingNameStyle" data-xztext="_在作品缩略图上显示图片查看器按钮" data-bind-click="true">Show <span class="key">Image viewer</span> button on thumbnail</a>
  <input type="checkbox" name="magnifier" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="magnifier" style="display: inline-flex;">
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_查看的图片尺寸">View image dimensions</span>
      <input type="radio" name="magnifierSize" id="magnifierSize1" class="need_beautify radio" value="original">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="magnifierSize1" data-xztext="_原图" class="active">Original</label>
      <input type="radio" name="magnifierSize" id="magnifierSize2" class="need_beautify radio" value="regular" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="magnifierSize2" data-xztext="_普通">Regular</label>
    </div>
    <button type="button" class="gray textButton toggleArea pl0" data-toggle-target="#showMagnifierTip" data-for-no="83" data-xztext="_快捷键列表">Shortcut list</button>
  </div>
  <p class="tip" id="showMagnifierTip">
    <span data-xztext="_图片查看器的快捷键列表">When using the image viewer, you can use these control keys:<br>
<span class="blue">←</span> Previous image<br>
<span class="blue">→</span> Next image<br>
<span class="blue">↑</span> Increase zoom<br>
<span class="blue">↓</span> Decrease zoom<br>
<span class="blue">Esc</span> Exit the image viewer<br>
You can also use the mouse wheel to switch images or control zoom, depending on whether the mouse pointer is over the image:<br>
- When the mouse wheel scrolls over the image, the image zooms in or out;<br>
- When the mouse wheel scrolls outside the image, the image switches.<br>
<br>
In addition, there are some function buttons at the bottom of the image viewer, each with its own hotkey:<br>
<span class="blue">F</span>(ull) Toggle display scale: 100% or fit-to-screen<br>
<span class="blue">L</span>(ink) Copy the work link<br>
<span class="blue">B</span>(ookmark) Quickly bookmark the current work<br>
<span class="blue">Alt</span> + <span class="blue">C</span>(opy) Copy the currently viewed image and work info (you can modify this hotkey)<br>
<span class="blue">C</span>(urrent) Download the currently viewed image (if the work has multiple images, only the current one is downloaded)<br>
<span class="blue">D</span>(ownload) Download the currently viewed work (if the work has multiple images, all of them are downloaded by default)<br></span>
  </p>
</div>

When the mouse hovers over a work's thumbnail, the downloader displays a magnifier icon, as shown below:

![](../images/20250910_235026.png)

Clicking the magnifier icon opens the image viewer to view each image in the work. The effect is shown below:

![](../images/20260830_174657.webp)

You can find detailed information about the image viewer here: [Image Viewer](/en/Convenience-Features?id=image-viewer).

## Display copy button on thumbnail

<div class="option settingsPanel_optionCard" data-no="84" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnail-buttons?flag=84" target="_blank" class="settingNameStyle" data-xztext="_在缩略图上显示复制按钮" data-bind-click="true">Display <span class="key">copy</span> button on thumbnail</a>
  <input type="checkbox" name="showCopyBtnOnThumb" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

When you hover the mouse over a work's thumbnail, the downloader will show a Copy button on the thumbnail, as shown below:

![](../images/20260609_202250.png)

Clicking it copies the original image and some information about the work. You can adjust what gets copied in the [Copy work info](/en/Settings-Enhance/Other?flag=89) settings.

## Show download button on thumbnail

<div class="option settingsPanel_optionCard" data-no="85" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnail-buttons?flag=85" target="_blank" class="settingNameStyle" data-xztext="_在作品缩略图上显示下载按钮" data-bind-click="true">Show <span class="key">download</span> button on thumbnail</a>
  <input type="checkbox" name="showDownloadBtnOnThumb" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>


When the mouse hovers over a work thumbnail, the downloader will display a download button on the thumbnail. Clicking the download button allows you to download this work. This feature makes downloading works much more convenient.

![](../images/20260609_202802.png)
