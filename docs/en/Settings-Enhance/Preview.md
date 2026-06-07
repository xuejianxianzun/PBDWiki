## Preview works

<div class="option settingsPanel_optionCard" data-no="75" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Preview?flag=75" target="_blank" class="has_tip settingNameStyle" data-xztip="_预览作品的说明" data-tip="When you hover the mouse over the image thumbnail, the downloader can display a larger image." data-bind-click="true">
    <span data-xztext="_预览作品"><span class="key">Preview</span> works</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="PreviewWork" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="PreviewWork" style="display: inline-flex;">
    <div class="optionLine">
      <input type="checkbox" name="previewSingleImageWork" id="previewSingleImageWork" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="previewSingleImageWork" data-xztext="_单图作品" class="active">Single image works</label>
      <input type="checkbox" name="previewMultiImageWork" id="previewMultiImageWork" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="previewMultiImageWork" data-xztext="_多图作品" class="active">Multi-image works</label>
      <input type="checkbox" name="previewUgoira" id="previewUgoira" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="previewUgoira" data-xztext="_动图" class="active">Ugoira</label>
    </div>
    <div class="optionLine">
      <label for="checkBlockTagsForPreviewWork" data-xztext="_检查屏蔽的标签">Check blocked tags</label>
      <input type="checkbox" name="checkBlockTagsForPreviewWork" id="checkBlockTagsForPreviewWork" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
      <button type="button" class="gray1 textButton showMsgBtn" data-title="_检查屏蔽的标签" data-msg="_检查屏蔽的标签的帮助" data-xztext="_帮助">Help</button>
    </div>
    <div class="optionLine">
      <label for="wheelScrollSwitchImageOnPreviewWork" class="has_tip active" data-xztext="_使用鼠标滚轮切换作品里的图片" data-xztip="_这可能会阻止页面滚动" data-tip="This might stop the page from scrolling">Use the mouse wheel to switch images in multi-image works</label>
      <input type="checkbox" name="wheelScrollSwitchImageOnPreviewWork" id="wheelScrollSwitchImageOnPreviewWork" class="need_beautify checkbox_switch" checked="">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
    <div class="optionLine">
      <label for="swicthImageByKeyboard" class="has_tip active" data-xztext="_使用方向键和空格键切换图片" data-xztip="_使用方向键和空格键切换图片的提示" data-tip="← ↑ Previous image&lt;br&gt;→ ↓ Next image&lt;br&gt;Spacebar Next image">Use the arrow keys and space bar to switch images</label>
      <input type="checkbox" name="swicthImageByKeyboard" id="swicthImageByKeyboard" class="need_beautify checkbox_switch" checked="">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
    <div class="optionLine">
      <label for="previewWorkWait" data-xztext="_等待时间">Waiting time</label>
      <input type="text" name="previewWorkWait" id="previewWorkWait" class="setinput_style blue" value="400">
      <span>ms</span>
    </div>
    <div class="optionLine">
      <label for="showPreviewWorkTip" data-xztext="_显示摘要信息" class="active">Show summary</label>
      <input type="checkbox" name="showPreviewWorkTip" id="showPreviewWorkTip" class="need_beautify checkbox_switch" checked="">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_查看的图片尺寸">View image dimensions</span>
      <input type="radio" name="prevWorkSize" id="prevWorkSize1" class="need_beautify radio" value="original">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="prevWorkSize1" data-xztext="_原图">Original</label>
      <input type="radio" name="prevWorkSize" id="prevWorkSize2" class="need_beautify radio" value="regular" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="prevWorkSize2" data-xztext="_普通" class="active">Regular</label>
    </div>
    <div class="optionLine">
      <button type="button" class="gray1 textButton toggleArea" data-toggle-target="#previewWorkShortcutTip" data-for-no="75" data-xztext="_快捷键列表">Shortcut list</button>
    </div>
  </div>
  <p class="tip" id="previewWorkShortcutTip">
    <span data-xztext="_预览作品的快捷键说明"><span class="blue">Alt</span> + <span class="blue">P</span> Toggle preview work function on/off<br>
When viewing the preview image, you can use the following shortcut keys:<br>
<span class="blue">B</span>(ookmark) Bookmark the previewed work<br>
<span class="blue">C</span>(urrent) Download the currently previewed image (if the work has multiple images, only the current one will be downloaded)<br>
<span class="blue">D</span>(ownload) Download the currently previewed work (if the work has multiple images, all will be downloaded by default)<br>
<span class="blue">Alt</span> + <span class="blue">C</span> Copy the currently previewed image and work information<br>
<span class="blue">Esc</span> Close the preview image<br>
<span class="blue">← ↑</span> Previous image<br>
<span class="blue">→ ↓</span> Next image<br>
<span class="blue">Spacebar</span> Next image</span>
  </p>
</div>

## Long press the right mouse button on the thumbnail to display the large image

<div class="option settingsPanel_optionCard" data-no="76" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Preview?flag=76" target="_blank" class="settingNameStyle" data-xztext="_长按右键显示大图" data-bind-click="true">Long press the right mouse button on the thumbnail to display the <span class="key">large image</span></a>
  <input type="checkbox" name="showOriginImage" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="showOriginImage" style="display: inline-flex;">
    <div class="optionLine">
      <span class="settingNameStyle" data-xztext="_查看的图片尺寸">View image dimensions</span>
      <input type="radio" name="showOriginImageSize" id="showOriginImageSize1" class="need_beautify radio" value="original">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="showOriginImageSize1" data-xztext="_原图" class="active">Original</label>
      <input type="radio" name="showOriginImageSize" id="showOriginImageSize2" class="need_beautify radio" value="regular" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="showOriginImageSize2" data-xztext="_普通">Regular</label>
    </div>
    <div class="optionLine">
      <button type="button" class="gray1 textButton toggleArea" data-toggle-target="#showOriginImageShortcutTip" data-for-no="76" data-xztext="_快捷键列表">Shortcut list</button>
    </div>
  </div>
  <p class="tip" id="showOriginImageShortcutTip">
    <span data-xztext="_查看作品大图时的快捷键">When viewing the large image of the work, press the shortcut key <span class="blue">D</span> to download the work.
    <br>
    Press the shortcut key <span class="blue">C</span> to download only the currently displayed image.
    <br>
    <span class="blue">Alt</span> + <span class="blue">C</span> Copy the currently previewed image and work information.
    <br>
    </span>
  </p>
</div>

## Preview the details of the work

<div class="option settingsPanel_optionCard" data-no="77" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Preview?flag=77" target="_blank" class="has_tip settingNameStyle" data-xztip="_预览作品的详细信息的说明" data-tip="Mouse over the thumbnail of the work to view the work data" data-bind-click="true">
    <span data-xztext="_预览作品的详细信息">Preview the <span class="key">details</span> of the work</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="PreviewWorkDetailInfo" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="PreviewWorkDetailInfo" style="display: none;">
    <span data-xztext="_显示区域宽度">Display area width</span>&nbsp;
    <input type="text" name="PreviewDetailInfoWidth" class="setinput_style blue" value="400">
    <span>&nbsp;px</span>
  </div>
</div>

