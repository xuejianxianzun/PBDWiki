## Do not create folder

<div class="option settingsPanel_optionCard new" data-no="40" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Adjust-folders?flag=40" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_不创建文件夹">Do <span class="key">not create</span> folder</span>
  </a>
  <input type="checkbox" name="noFolderSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_不创建文件夹" data-msg="_不创建文件夹的帮助内容" data-xztext="_帮助">Help</button>
  <div class="subOptionWrap noGrow flexBasis100" data-show="noFolderSwitch" style="display: none;">
    <div class="optionLine">
      <input type="checkbox" name="noFolderWhenDownload1Image" id="noFolderWhenDownload1Image" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="noFolderWhenDownload1Image" data-xztext="_从插画漫画里下载1张图片时" class="active">When downloading 1 image from an illustration or manga</label>
    </div>
    <div class="optionLine">
      <input type="checkbox" name="noFolderWhenDownloadMultipleImages" id="noFolderWhenDownloadMultipleImages" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="noFolderWhenDownloadMultipleImages" data-xztext="_从插画漫画里下载多张图片时">When downloading multiple images from an illustration or manga</label>
    </div>
    <div class="optionLine">
      <input type="checkbox" name="noFolderWhenUgoira" id="noFolderWhenUgoira" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="noFolderWhenUgoira" data-xztext="_动图" class="active">Ugoira</label>
    </div>
    <div class="optionLine">
      <input type="checkbox" name="noFolderWhenNovel" id="noFolderWhenNovel" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="noFolderWhenNovel" data-xztext="_小说">Novels</label>
    </div>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Add a folder layer for multi-image works

<div class="option settingsPanel_optionCard new" data-no="41" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Adjust-folders?flag=41" target="_blank" class="settingNameStyle" data-xztext="_为多图作品添加一层文件夹" data-bind-click="true">Add a folder layer for <span class="key">multi-image</span> works</a>
  <input type="checkbox" name="folderForMultiImageWorksSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_为多图作品添加一层文件夹" data-msg="_为多图作品添加一层文件夹的帮助" data-xztext="_帮助">Help</button>
  <div class="subOptionWrap flexBasis100" data-show="folderForMultiImageWorksSwitch" style="display: none;">
    <div class="optionLine">
      <label for="folderForMultiImageWorksImageNumber" class="pr0" data-xztext="_当作品里的图片大于指定数量时启用">Enable when the number of images in the work exceeds the specified number: </label>
      <input class="setinput_style blue w50 noGrow" type="text" name="folderForMultiImageWorksImageNumber" id="folderForMultiImageWorksImageNumber" value="1">
    </div>
    <div class="optionLine">
      <label for="folderForMultiImageWorksRule" class="pr0" data-xztext="_要添加的这层文件夹的规则">Rule for the folder layer to add: </label>
      <input class="setinput_style blue w150 grow" type="text" name="folderForMultiImageWorksRule" id="folderForMultiImageWorksRule" value="{pid}" style="min-width: 100px">
    </div>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Add a folder layer for R-18(G) works

<div class="option settingsPanel_optionCard" data-no="42" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Adjust-folders?flag=42" target="_blank" class="settingNameStyle" data-xztext="_为r18作品添加一层文件夹" data-bind-click="true">Add a folder layer for <span class="key">R-18(G)</span> works</a>
  <input type="checkbox" name="r18Folder" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_为r18作品添加一层文件夹" data-msg="_为r18作品添加一层文件夹的帮助" data-xztext="_帮助">Help</button>
  <div class="subOptionWrap flexBasis100" data-show="r18Folder" style="display: none;">
    <label for="r18FolderName" class="pr0" data-xztext="_要添加的这层文件夹的规则">Rule for the folder layer to add: </label>
    <input type="text" name="r18FolderName" id="r18FolderName" class="setinput_style blue grow" value="[R-18&amp;R-18G]" style="min-width: 100px">
  </div>
</div>

## Create a folder with the first matched tag

<div class="option settingsPanel_optionCard" data-no="43" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Adjust-folders?flag=43" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_使用第一个匹配的标签建立文件夹">Create a folder with the first matched <span class="key">tag</span></span>
  </a>
  <input type="checkbox" name="createFolderByTag" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_使用第一个匹配的标签建立文件夹" data-msg="_使用第一个匹配的标签建立文件夹的说明" data-xztext="_帮助">Help</button>
  <div class="subOptionWrap namingTipArea flexBasis100" data-show="createFolderByTag" style="display: none;">
    <span class="name" data-bind-copy="true">{match_tag_folder1}</span>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="createFolderTagList" rows="1" placeholder="tag1,tag2,tag3"></textarea>
    <span class="name" data-bind-copy="true">{match_tag_folder2}</span>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="createFolderTagList2" rows="1" placeholder="tag1,tag2,tag3"></textarea>
  </div>
</div>

