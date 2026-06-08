## Highlight following users

<div class="option settingsPanel_optionCard" data-no="86" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Other?flag=86" target="_blank" class="has_tip settingNameStyle" data-xztip="_高亮关注的用户的说明" data-tip="The names of users you are following will have a yellow background, or be displayed in yellow. &lt;br&gt;This is convenient for you to confirm whether you follow a certain user." data-bind-click="true">
    <span data-xztext="_高亮关注的用户"><span class="key">Highlight</span> following users</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="highlightFollowingUsers" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Display a border on downloaded works

<div class="option settingsPanel_optionCard new" data-no="87" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Other?flag=87" target="_blank" class="settingNameStyle" data-xztext="_在下载过的作品上显示边框" data-bind-click="true">Display a <span class="key">border</span> on downloaded works</a>
  <input type="checkbox" name="showBorderOnDownloadedWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="showBorderOnDownloadedWorks" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_宽度" class="mr4">Width</span>
      <input type="text" name="borderWidth" class="setinput_style blue w30" value="3">
      px
    </div>
    <div class="optionLine">
      <span data-xztext="_颜色" class="mr4">Color</span> (Hex)
      <input type="text" name="borderColor" class="setinput_style blue w80" id="borderColor" value="#ff4060">
    </div>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Downloader's bookmark feature (✩)

<div class="option settingsPanel_optionCard" data-no="88" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Other?flag=88" target="_blank" class="has_tip settingNameStyle" data-xztip="_收藏设置的说明" data-tip="Sometimes you'll see a bookmark button (✩) added by the downloader, which you can click to bookmark the work. &lt;br&gt;
You can choose whether to include tags for the work, and whether to make it public.&lt;br&gt;
This setting is also used when you use the Downloader to bookmark works in batches." data-bind-click="true">
    <span data-xztext="_收藏设置">Downloader's <span class="key">bookmark</span> feature (✩)</span>
    <span class="gray1"> ? </span>
  </a>
  <div class="optionLine">
    <span data-xztext="_是否添加标签" class="mr4">Whether to add tags</span>
    <input type="radio" name="widthTag" id="widthTag1" class="need_beautify radio" value="yes" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="widthTag1" data-xztext="_添加" class="active">Add</label>
    <input type="radio" name="widthTag" id="widthTag2" class="need_beautify radio" value="no">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="widthTag2" data-xztext="_不添加">Do not add</label>
  </div>
  <div class="optionLine">
    <span data-xztext="_是否公开" class="mr4">Public</span>
    <input type="radio" name="restrict" id="restrict1" class="need_beautify radio" value="no" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="restrict1" data-xztext="_公开" class="active">Public</label>
    <input type="radio" name="restrict" id="restrict2" class="need_beautify radio" value="yes">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="restrict2" data-xztext="_不公开">Private</label>
  </div>
</div>

## Copy button

<div class="option settingsPanel_optionCard" data-no="89" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Other?flag=89" target="_blank" class="has_tip settingNameStyle" data-xztip="_显示复制按钮的提示" data-tip="The downloader will display a copy button on the work thumbnail and within the work page. Clicking it allows you to copy the work's image and some data.
&lt;br&gt;
You can customize the data and format to be copied.
&lt;br&gt;
On the work page, and when previewing a work, you can use the shortcut key &lt;span class=&quot;blue&quot;&gt;Alt + C&lt;/span&gt; to copy." data-bind-click="true">
    <span data-xztext="_复制按钮"><span class="key">Copy</span> button</span>
    <span class="gray1"> ? </span>
  </a>
  <div class="optionLine">
    <span data-xztext="_复制内容" class="mr4">Copy content</span>
    <input type="checkbox" name="copyFormatImage" id="setCopyFormatImage" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatImage">image/png</label>
    <input type="checkbox" name="copyFormatText" id="setCopyFormatText" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatText" class="active">text/plain</label>
    <input type="checkbox" name="copyFormatHtml" id="setCopyFormatHtml" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatHtml" class="active">text/html</label>
    <button type="button" class="gray1 textButton showMsgBtn" data-title="_复制内容" data-msg="_对复制的内容的说明" data-xztext="_帮助">Help</button>
  </div>
  <div class="optionLine nowrap">
    <span class="mr4" data-xztext="_图片尺寸2">Image size</span>
    <input type="radio" name="copyImageSize" id="copyImageSize1" class="need_beautify radio" value="original">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="copyImageSize1" data-xztext="_原图" class="active">Original</label>
    <input type="radio" name="copyImageSize" id="copyImageSize2" class="need_beautify radio" value="regular" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="copyImageSize2" data-xztext="_普通">Regular</label>
  </div>
  <div class="optionLine nowrap">
    <span data-xztext="_文本格式" class="mr4">Text format</span>
    <button type="button" class="gray1 textButton toggleArea" data-toggle-target="#copyWorkInfoFormatTip" data-for-no="89" data-xztext="_提示">Tip</button>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="copyWorkInfoFormat" rows="1" placeholder="id: {id}{n}title: {title}{n}tags: {tags}{n}url: {url}{n}user: {user}">id: {id}{n}title: {title}{n}tags: {tags}{n}url: {url}{n}user: {user}</textarea>
  </div>
  <p class="tip namingTipArea" id="copyWorkInfoFormatTip">
    <span data-xztext="_复制内容的格式的提示">You can set the format of the text content, which will affect the content copied in <span class="blue">text/plain</span> and <span class="blue">text/html</span> formats.
<br>
You can use all tags from the naming rule, or input custom characters, such as spaces, underscores, the name of each tag.
<br>
Additionally, you can use these tags:</span>
    <br>
    <span class="blue name" data-bind-copy="true">{url}</span>
    <span data-xztext="_url标记的说明">This work's URL</span>
    <br>
    <span class="blue name" data-bind-copy="true">{n}</span>
    <span data-xztext="_换行标记的说明">Line break</span>
    <br>
  </p>
</div>

