## Naming rule for image works

<div class="option settingsPanel_optionCard" data-no="32" data-pin-bound="true" style="display: flex;">
  <span class="fileNameRuleLine1">
    <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=32" target="_blank" class="settingNameStyle optionName" data-xztext="_图像作品的命名规则" data-bind-click="true"><span class="key">Naming</span> rule for image works</a>
    <span class="fileNameRuleBtnsArea">
      <slot data-name="saveNamingRuleForArtwork"><div class="saveNamingRuleWrap theme-white">
    <button class="nameSave textButton has_tip" type="button" data-xztip="_保存命名规则提示" data-xztext="_保存" data-tip="Save naming rule, up to 20">Save</button>
    <button class="nameLoad textButton" type="button" data-xztext="_加载">Load</button>
  </div></slot>
      <button type="button" class="showFileNameTip textButton toggleArea" data-toggle-target="#fileNameTip" data-for-no="32" data-xztext="_提示">Tip</button>
      &nbsp;
      <select name="fileNameSelect" class="beautify_scrollbar">
        <option value="default">…</option>
        <option value="{id}">{id}</option>
<option value="{pid}">{pid}</option>
<option value="{p}">{p}</option>
<option value="{user}">{user}</option>
<option value="{user_id}">{user_id}</option>
<option value="{title}">{title}</option>
<option value="{page_title}">{page_title}</option>
<option value="{tags}">{tags}</option>
<option value="{tags_translate}">{tags_translate}</option>
<option value="{tags_transl_only}">{tags_transl_only}</option>
<option value="{page_tag}">{page_tag}</option>
<option value="{type}">{type}</option>
<option value="{type_illust}">{type_illust}</option>
<option value="{type_manga}">{type_manga}</option>
<option value="{type_ugoira}">{type_ugoira}</option>
<option value="{type_novel}">{type_novel}</option>
<option value="{AI}">{AI}</option>
<option value="{age}">{age}</option>
<option value="{age_r}">{age_r}</option>
<option value="{like}">{like}</option>
<option value="{bmk}">{bmk}</option>
<option value="{bmk_1000}">{bmk_1000}</option>
<option value="{bmk_id}">{bmk_id}</option>
<option value="{view}">{view}</option>
<option value="{rank}">{rank}</option>
<option value="{date}">{date}</option>
<option value="{upload_date}">{upload_date}</option>
<option value="{task_date}">{task_date}</option>
<option value="{px}">{px}</option>
<option value="{char_count}">{char_count}</option>
<option value="{series_title}">{series_title}</option>
<option value="{series_order}">{series_order}</option>
<option value="{series_id}">{series_id}</option>
<option value="{sl}">{sl}</option>
<option value="{multi_image_folder}">{multi_image_folder}</option>
<option value="{r18_g_folder}">{r18_g_folder}</option>
<option value="{match_tag_folder1}">{match_tag_folder1}</option>
<option value="{match_tag_folder2}">{match_tag_folder2}</option>
      </select>
    </span>
  </span>
  <ul class="namingRuleList artwork"><li>
      <span class="rule">pixiv/{user}-{user_id}/{id}-{title}</span>
      <button class="delete textButton" type="button" data-index="0">×</button>
    </li><li>
      <span class="rule">pixiv/书签-{task_date}/{bmk_id}-{id}-{title}</span>
      <button class="delete textButton" type="button" data-index="1">×</button>
    </li></ul>
  <textarea class="centerPanelTextArea beautify_scrollbar grow fileNameRule" name="userSetName" rows="1" placeholder="pixiv/{user}-{user_id}/{id}-{title}">pixiv/{user}-{user_id}/{id}-{title}</textarea>
  <p class="tip fileNameTip namingTipArea" id="fileNameTip">
    <span data-xztext="_命名标记的提示">The naming rule sets the names of folders and files. A naming rule can consist of 3 parts:<br>
- Special tokens, such as <span class="blue name" data-bind-copy="true">{id}</span>, <span class="blue name" data-bind-copy="true">{user}</span>, <span class="blue name" data-bind-copy="true">{title}</span>, etc. Each token may output some characters. The meaning of each token is described below.<br>
- A slash <span class="blue name" data-bind-copy="true">/</span> is used to create folders. The content before each slash is the folder name, and the part after the last slash is the file name. You can add multiple levels of folders and organize the folder structure freely.<br>
- Regular characters and symbols. You can add regular characters between tokens, for example: <span class="blue">pixiv/{id}-title {title}-user {user}</span><br>
<br>
Notes on creating folders:<br>
- If you want to create a folder for each work, add a folder level before the file name. Using the work ID <span class="blue name" data-bind-copy="true">{pid}</span> as the folder name is a common choice, for example: <span class="blue">pixiv/{user}/{pid}/{id}</span>. Of course, you can use other tokens based on your needs.<br>
- If you want to put AI-generated works in a separate folder, use the <span class="blue name" data-bind-copy="true">{AI}</span> token, for example: <span class="blue">pixiv/{user}/{AI}/{id}</span><br>
- If you want to create folders by work type, use the <span class="blue name" data-bind-copy="true">{type}</span> token, for example: <span class="blue">pixiv/{user}/{type}/{id}</span><br>
<br>
Tips:<br>
- * Some tokens are not always available and may be empty strings — the downloader will ignore them.<br>
- If you want to use the work's ID in a folder name, use <span class="blue name" data-bind-copy="true">{pid}</span> instead of <span class="blue name" data-bind-copy="true">{id}</span>. Since each image has a different ID, using <span class="blue name" data-bind-copy="true">{id}</span> would create a separate folder for each image.<br>
- To prevent duplicate file names, the file name must contain <span class="blue name" data-bind-copy="true">{id}</span>. If you don't want to use <span class="blue name" data-bind-copy="true">{id}</span>, you must include both <span class="blue name" data-bind-copy="true">{pid}</span> and <span class="blue name" data-bind-copy="true">{p}</span>.<br>
<br>
List of naming tokens:<br>
Tip: Click a token name to copy it.<br></span>
    <span class="blue name" data-bind-copy="true">{id}</span>
      <span data-xztext="_命名标记id">The ID of each file. Image files include a sequence number, such as <span class="blue">85633671_p0</span>; novel files do not have a sequence number. Note: this is not the work ID, but the file ID. If a work contains multiple images, the {id} for each image is different, for example <span class="blue">85633671_p1</span> and <span class="blue">85633671_p2</span>.</span>
      <br>
<span class="blue name" data-bind-copy="true">{pid}</span>
      <span data-xztext="_命名标记pid">The numeric ID of the work, excluding the sequence number, for example <span class="blue">85633671</span>.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{p}</span>
      <span data-xztext="_命名标记p">The sequence number of the image within the work, for example <span class="blue">0</span>, <span class="blue">1</span>, <span class="blue">2</span> ... Each work will recount. Novel works do not have this property, and the downloader will ignore it.</span>
      <br>
<span class="blue name" data-bind-copy="true">{user}</span>
      <span data-xztext="_命名标记user">User name</span>
      <br>
<span class="blue name" data-bind-copy="true">{user_id}</span>
      <span data-xztext="_用户id">User ID (Number)</span>
      <br>
<span class="blue name" data-bind-copy="true">{title}</span>
      <span data-xztext="_命名标记title">Works title</span>
      <br>
<span class="blue name" data-bind-copy="true">{page_title}</span>
      <span data-xztext="_命名标记page_title">Page title when starting the scrape</span>
      <br>
<span class="blue name" data-bind-copy="true">{tags}</span>
      <span data-xztext="_命名标记tags">The tags of the work</span>
      <br>
<span class="blue name" data-bind-copy="true">{tags_translate}</span>
      <span data-xztext="_命名标记tags_trans">The tag list of the work, without translated tags</span>
      <br>
<span class="blue name" data-bind-copy="true">{tags_transl_only}</span>
      <span data-xztext="_命名标记tags_transl_only">Translated tags</span>
      <br>
* <span class="blue name" data-bind-copy="true">{page_tag}</span>
      <span data-xztext="_文件夹标记page_tag">If the works on the page belong to the same tag, the downloader will output this tag; otherwise, ignore it. It usually has a value when you are on these pages: searching for a certain tag, viewing works under a certain tag category on the user page, viewing works under a certain tag category in your own bookmarks.</span>
      <br>
<span class="blue name" data-bind-copy="true">{type}</span>
      <span data-xztext="_命名标记type">Output the work type. Illustration outputs <span class="blue">Illustration</span>, manga outputs <span class="blue">Manga</span>, Ugoira outputs <span class="blue">Ugoira</span>, novel outputs <span class="blue">Novel</span>.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{type_illust}</span>
      <span data-xztext="_命名标记type_illust">Output <span class="blue">Illustration</span> only when the work is an illustration.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{type_manga}</span>
      <span data-xztext="_命名标记type_manga">Output <span class="blue">Manga</span> only when the work is a manga.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{type_ugoira}</span>
      <span data-xztext="_命名标记type_ugoira">Output <span class="blue">Ugoira</span> only when the work is a Ugoira.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{type_novel}</span>
      <span data-xztext="_命名标记type_novel">Output <span class="blue">Novel</span> only when the work is a novel.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{AI}</span>
      <span data-xztext="_命名标记AI">If the work is AI-generated, output <span class="blue">AI</span>; otherwise, ignore it.</span>
      <br>
<span class="blue name" data-bind-copy="true">{age}</span>
      <span data-xztext="_命名标记age">The age restriction of the work is divided into: <span class="blue">All Ages</span>, <span class="blue">R-18</span>, <span class="blue">R-18G</span></span>
      <br>
* <span class="blue name" data-bind-copy="true">{age_r}</span>
      <span data-xztext="_命名标记age_r">Output its age restriction only when the work is restricted, divided into: <span class="blue">R-18</span>, <span class="blue">R-18G</span>; otherwise, ignore it.</span>
      <br>
<span class="blue name" data-bind-copy="true">{like}</span>
      <span data-xztext="_命名标记like">Like count.</span>
      <br>
<span class="blue name" data-bind-copy="true">{bmk}</span>
      <span data-xztext="_命名标记bmk">Bookmark count, bookmarks number of works.</span>
      <br>
<span class="blue name" data-bind-copy="true">{bmk_1000}</span>
      <span data-xztext="_命名标记bmk_1000">Simplified number of bookmark, e.g. <span class="blue">0+</span>、<span class="blue">1000+</span>、<span class="blue">2000+</span>、<span class="blue">3000+</span> ……</span>
      <br>
<span class="blue name" data-bind-copy="true">{bmk_id}</span>
      <span data-xztext="_命名标记bmk_id">Bookmark ID. Every work in your bookmarks will have a Bookmark ID. The later the bookmark is added, the larger the Bookmark ID. When you download your bookmarks, you can use {bmk_id} as a sorting basis.</span>
      <br>
<span class="blue name" data-bind-copy="true">{view}</span>
      <span data-xztext="_命名标记view">View count.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{rank}</span>
      <span data-xztext="_命名标记rank">The ranking of the work in the leaderboard. Such as <span class="blue">#1</span>, <span class="blue">#2</span> ... Can only be used on the leaderboard page, and will be ignored on other pages.</span>
      <br>
<span class="blue name" data-bind-copy="true">{date}</span>
      <span data-xztext="_命名标记date">The time the creation of the work. Such as <span class="blue">2019-08-29</span></span>
      <br>
<span class="blue name" data-bind-copy="true">{upload_date}</span>
      <span data-xztext="_命名标记upload_date">The time when the content of the work was last modified. Such as <span class="blue">2019-08-30</span>.</span>
      <br>
<span class="blue name" data-bind-copy="true">{task_date}</span>
      <span data-xztext="_命名标记taskDate">The time when the task was crawl completed. For example: <span class="blue">2020-10-21</span></span>
      <br>
* <span class="blue name" data-bind-copy="true">{px}</span>
      <span data-xztext="_命名标记px">The width and height of the original image. For example: <span class="blue">600x900</span>. Novel works do not have this property, and the downloader will ignore it.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{char_count}</span>
      <span data-xztext="_命名标记char_count">The number of characters or words in the novel (depending on the language of the novel), it is a number. It will be ignored when the work is not a novel.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{series_title}</span>
      <span data-xztext="_命名标记seriesTitle">Series title. Available when the work belongs to a series.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{series_order}</span>
      <span data-xztext="_命名标记seriesOrder">The number of the work in the series, such as <span class="blue">#1</span> <span class="blue">#2</span>. Available when the work belongs to a series.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{series_id}</span>
      <span data-xztext="_命名标记seriesId">Series ID, it is a number. Available when the work belongs to a series.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{sl}</span>
      <span data-xztext="_命名标记_sl">The sanity_level property of image works has a value of one of the following numbers: <span class="blue">0</span>, <span class="blue">2</span>, <span class="blue">4</span>, <span class="blue">6</span>. Novel works do not have this property and will ignore this marker.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{multi_image_folder}</span>
      <span data-xztext="_命名标记_multi_image_folder">It represents the folder rule set in "Add a folder layer for multi-image works". If you have enabled this setting, the downloader will replace it with the folder rule you set when creating the filename for multi-image works. Non-multi-image works will ignore this marker.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{r18_g_folder}</span>
      <span data-xztext="_命名标记_r18_g_folder">It represents the folder rule set in "Add a folder layer for R-18(G) works". If you have enabled this setting, the downloader will replace it with the folder rule you set when generating the filename for R-18(G) works. Non R-18(G) works will ignore this marker.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{match_tag_folder1}</span>
      <span data-xztext="_命名标记_match_tag_folder1">This is the match result of the first tag list in "Create folder using the first matching tag". If you have enabled this setting and a matching tag is found, it will output that tag; otherwise it will be ignored.</span>
      <br>
* <span class="blue name" data-bind-copy="true">{match_tag_folder2}</span>
      <span data-xztext="_命名标记_match_tag_folder2">This is the match result of the second tag list in "Create folder using the first matching tag". If you have enabled this setting and a matching tag is found, it will output that tag; otherwise it will be ignored.</span>
      <br>
  </p>
</div>

## Naming rule for novels

<div class="option settingsPanel_optionCard new" data-no="33" data-pin-bound="true" style="display: flex;">
  <span class="fileNameRuleLine1">
    <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=33" target="_blank" class="settingNameStyle optionName" data-xztext="_小说的命名规则" data-bind-click="true"><span class="key">Naming</span> rule for novels</a>
    <span class="fileNameRuleBtnsArea">
      <slot data-name="saveNamingRuleForNovel"><div class="saveNamingRuleWrap theme-white">
    <button class="nameSave textButton has_tip" type="button" data-xztip="_保存命名规则提示" data-xztext="_保存" data-tip="Save naming rule, up to 20">Save</button>
    <button class="nameLoad textButton" type="button" data-xztext="_加载">Load</button>
  </div></slot>
      <button type="button" class="showFileNameTip textButton toggleArea" data-toggle-target="#fileNameTipForNovel" data-for-no="33" data-xztext="_提示">Tip</button>
      &nbsp;
      <select name="fileNameSelectForNovel" class="beautify_scrollbar">
        <option value="default">…</option>
        <option value="{id}">{id}</option>
<option value="{pid}">{pid}</option>
<option value="{p}">{p}</option>
<option value="{user}">{user}</option>
<option value="{user_id}">{user_id}</option>
<option value="{title}">{title}</option>
<option value="{page_title}">{page_title}</option>
<option value="{tags}">{tags}</option>
<option value="{tags_translate}">{tags_translate}</option>
<option value="{tags_transl_only}">{tags_transl_only}</option>
<option value="{page_tag}">{page_tag}</option>
<option value="{type}">{type}</option>
<option value="{type_illust}">{type_illust}</option>
<option value="{type_manga}">{type_manga}</option>
<option value="{type_ugoira}">{type_ugoira}</option>
<option value="{type_novel}">{type_novel}</option>
<option value="{AI}">{AI}</option>
<option value="{age}">{age}</option>
<option value="{age_r}">{age_r}</option>
<option value="{like}">{like}</option>
<option value="{bmk}">{bmk}</option>
<option value="{bmk_1000}">{bmk_1000}</option>
<option value="{bmk_id}">{bmk_id}</option>
<option value="{view}">{view}</option>
<option value="{rank}">{rank}</option>
<option value="{date}">{date}</option>
<option value="{upload_date}">{upload_date}</option>
<option value="{task_date}">{task_date}</option>
<option value="{px}">{px}</option>
<option value="{char_count}">{char_count}</option>
<option value="{series_title}">{series_title}</option>
<option value="{series_order}">{series_order}</option>
<option value="{series_id}">{series_id}</option>
<option value="{sl}">{sl}</option>
<option value="{multi_image_folder}">{multi_image_folder}</option>
<option value="{r18_g_folder}">{r18_g_folder}</option>
<option value="{match_tag_folder1}">{match_tag_folder1}</option>
<option value="{match_tag_folder2}">{match_tag_folder2}</option>
        <option value="{follow_artwork}">{follow_artwork}</option>
      </select>
    </span>
  </span>
  <ul class="namingRuleList novel"><li>
      <span class="rule">{follow_artwork}</span>
      <button class="delete textButton" type="button" data-index="0">×</button>
    </li></ul>
  <textarea class="centerPanelTextArea beautify_scrollbar grow fileNameRule" name="userSetNameForNovel" rows="1" placeholder="{follow_artwork}">{follow_artwork}</textarea>
  <p class="tip fileNameTip namingTipArea" id="fileNameTipForNovel">
    <span data-xztext="_小说的命名标记的提示">Novels can use the same naming tokens as image works, and there is one special token:<br>
<span class="blue name" data-bind-copy="true">{follow_artwork}</span> follows the naming rule of image works. It is also the default value, meaning novels use the same naming rule as image works. If you want to set a separate naming rule for novels, remove this token and configure the rule as you like.</span>
  </p>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Use different naming rules in different page types

<div class="option settingsPanel_optionCard" data-no="34" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=34" target="_blank" class="settingNameStyle" data-xztext="_在不同的页面类型中使用不同的命名规则" data-bind-click="true">Use <span class="key">different</span> naming rules in different page types</a>
  <input type="checkbox" name="setNameRuleForEachPageType" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_在不同的页面类型中使用不同的命名规则" data-msg="_在不同的页面类型中使用不同的命名规则的帮助" data-xztext="_帮助">Help</button>
</div>

## Use a different naming rule for the work if it has certain tags

<div class="option settingsPanel_optionCard" data-no="35" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=35" target="_blank" class="settingNameStyle" data-xztext="_如果作品含有某些标签则对这个作品使用另一种命名规则" data-bind-click="true">Use a different naming rule for the work if it has certain <span class="key">tags</span></a>
  <input type="checkbox" name="UseDifferentNameRuleIfWorkHasTagSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="UseDifferentNameRuleIfWorkHasTagSwitch" style="display: none;">
    <slot data-name="UseDifferentNameRuleIfWorkHasTagSlot"><div class="UseDifferentNameRuleIfWorkHasTagWarp theme-white">
    <span class="controlBar">
    <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_收起">Collapse</button>
      <button type="button" class="textButton showAdd" data-xztext="_添加">Add</button>
    </span>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem tags">
          <span class="label uidLabel">Tags</span>
          <input type="text" class="setinput_style blue addTagsInput" data-xzplaceholder="_tag用逗号分割" placeholder="Multiple tags use comma (,) split">
        </div>
        <div class="inputItem rule">
          <span class="label nameLabel" data-xztext="_命名规则">Naming rule</span>
          <input type="text" class="setinput_style blue addRuleInput">
        </div>
        <div class="btns">
          <button type="button" class="textButton add" data-xztitle="_添加" title="Add">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#yes_submit"></use>
            </svg>
          </button>
          
          <button type="button" class="textButton cancel" data-xztitle="_取消" title="Cancel">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#close_cancel"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="listWrap" style="display: flex;"></div>
  </div></slot>
  </div>
</div>

## Naming rule when merging novel series

<div class="option settingsPanel_optionCard" data-no="36" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=36" target="_blank" class="settingNameStyle" data-xztext="_合并系列小说时的命名规则" data-bind-click="true"><span class="key">Naming</span> rule when merging novel series</a>
  <button type="button" class="showFileNameTip textButton toggleArea" data-toggle-target="#seriesNovelNameTip" data-for-no="36" data-xztext="_提示">Tip</button>
  <div class="optionLine">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="seriesNovelNameRule" rows="1">novel series/{page_tag}/{series_title}-{series_id}-{user}-{part}-{tags}.{ext}</textarea>
  </div>
  <p class="tip fileNameTip namingTipArea" id="seriesNovelNameTip">
    <span data-xztext="_系列小说的命名标记提醒">This naming rule is used to set the name of the collection file, not the name of individual novels.<br>
You can use <span class="key">/</span> to create folders.<br>
You can use multiple tags and add custom text. For example: novel series/title {series_title} id {series_id}<br>
To prevent duplicate filenames, it is recommended to always add {series_id}.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{series_title}</span>
    <span data-xztext="_系列小说的命名标记_series_title">Series title</span>
    <br>
    <span class="blue name" data-bind-copy="true">{series_id}</span>
    <span data-xztext="_系列小说的命名标记_series_id">Series ID, it is a number.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{user}</span>
    <span data-xztext="_系列小说的命名标记_user">Username (author's name)</span>
    <br>
    <span class="blue name" data-bind-copy="true">{user_id}</span>
    <span data-xztext="_系列小说的命名标记_user_id">User (Author) ID, Numeric</span>
    <br>
    * <span class="blue name" data-bind-copy="true">{part}</span>
    <span data-xztext="_系列小说的命名标记_part">If the novel's size is relatively large, the downloader may split it into multiple files. In this case, {part} is the number of this file, such as <span class="blue">1</span>, <span class="blue">2</span>, <span class="blue">3</span>... If this novel is not split, {part} will be ignored.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{ext}</span>
    <span data-xztext="_系列小说的命名标记_ext">The save format for novels may be <span class="blue">txt</span> or <span class="blue">epub</span></span>
    <br>
    <span class="blue name" data-bind-copy="true">{age}</span>
    <span data-xztext="_系列小说的命名标记_age">The age restriction of this series is divided into: <span class="blue">All Ages</span>, <span class="blue">R-18</span>, <span class="blue">R-18G</span></span>
    <br>
    * <span class="blue name" data-bind-copy="true">{age_r}</span>
    <span data-xztext="_系列小说的命名标记_age_r">If this series is restricted, output its age restriction, divided into: <span class="blue">R-18</span>, <span class="blue">R-18G</span>; otherwise, ignore this tag.</span>
    <br>
    * <span class="blue name" data-bind-copy="true">{AI}</span>
    <span data-xztext="_系列小说的命名标记_AI">If this series is AI-generated, output <span class="blue">AI</span>; otherwise, ignore this tag.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{lang}</span>
    <span data-xztext="_系列小说的命名标记_lang">The language code of this series, for example <span class="blue">zh-cn</span>, <span class="blue">ja</span>, <span class="blue">en</span>, etc. Note: This is not always accurate, because some authors have not set the correct language.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{total}</span>
    <span data-xztext="_系列小说的命名标记_total">How many novels this series contains in total, it is a number.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{char_count}</span>
    <span data-xztext="_系列小说的命名标记_char_count">The total word count of all novels in this series, it is a number.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{create_date}</span>
    <span data-xztext="_系列小说的命名标记_create_date">The creation time of this series, for example <span class="blue">2025-01-01</span>.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{last_date}</span>
    <span data-xztext="_系列小说的命名标记_last_date">The date when the latest novel in this series was added, for example <span class="blue">2025-10-01</span>.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{task_date}</span>
    <span data-xztext="_系列小说的命名标记_task_date">The time when the downloader starts merging this novel series, for example <span class="blue">2025-11-25</span>.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{first_id}</span>
    <span data-xztext="_系列小说的命名标记_first_id">The ID of the first novel in this series, it is a number.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{latest_id}</span>
    <span data-xztext="_系列小说的命名标记_latest_id">The ID of the last novel in this series, it is a number.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{tags}</span>
    <span data-xztext="_系列小说的命名标记_tags">The tag list of this novel series. Note that these are the series' tags, not the tags of each novel in the series.</span>
    <br>
    * <span class="blue name" data-bind-copy="true">{page_tag}</span>
    <span data-xztext="_文件夹标记page_tag">If the works on the page belong to the same tag, the downloader will output this tag; otherwise, ignore it. It usually has a value when you are on these pages: searching for a certain tag, viewing works under a certain tag category on the user page, viewing works under a certain tag category in your own bookmarks.</span>
    <br>
    <span class="blue name" data-bind-copy="true">{page_title}</span>
    <span data-xztext="_系列小说的命名标记_page_title">Title of the current page</span>
  </p>
</div>

## Tag separation symbol

<div class="option settingsPanel_optionCard" data-no="37" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=37" target="_blank" class="settingNameStyle" data-xztext="_标签分隔符号" data-bind-click="true">Tag <span class="key">separation</span> symbol</a>
  <input type="text" name="tagsSeparator" class="setinput_style blue" value=",">
  <button type="button" class="gray1 textButton toggleArea" data-toggle-target="#tagsSeparatorTip" data-for-no="37" data-xztext="_提示">Tip</button>
  <p class="tip" id="tagsSeparatorTip">
    <span data-xztext="_标签分隔符号提示">Only affects results for these named tags: <span class="blue">{tags}</span>, <span class="blue">{tags_translate}</span>, <span class="blue">{ tags_transl_only}</span>. <br>Recommended symbols <span class="blue"> , # ^ &amp; _</span></span>
  </p>
</div>


This affects only the results of these naming tags: `{tags}`, `{tags_translate}`, `{tags_transl_only}`.

By default, the downloader uses `,` to separate tags, so the output of these tags looks like: `tag1,tag2,tag3`. If you want to use a different symbol, you can change it here.

For example, if you set it to `#`, the tag list output will be `tag1#tag2#tag3`.

Here are some commonly used separators:

```
,
#
&
_
-
```

?> The separator can be a single character or multiple characters (if needed).

## Date and time format

<div class="option settingsPanel_optionCard" data-no="38" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=38" target="_blank" class="settingNameStyle" data-xztext="_日期格式" data-bind-click="true">Date and time <span class="key">format</span></a>
  <input type="text" name="dateFormat" class="setinput_style blue" value="YYYY-MM-DD">
  <button type="button" class="gray1 textButton toggleArea" data-toggle-target="#dateFormatTip" data-for-no="38" data-xztext="_提示">Tip</button>
  <p class="tip" id="dateFormatTip">
    <span data-xztext="_日期格式提示">You can use the following notation to set the date and time format. This will affect <span class="blue">{date}</span> and <span class="blue">{upload_date}</span> and <span class="blue">{task_date}</span> in the naming rules. <br>For time such as 2021-04-30T06:40:08</span>
    <br>
    <span class="blue">YYYY</span> <span>2021</span>
    <br>
    <span class="blue">YY</span> <span>21</span>
    <br>
    <span class="blue">MM</span> <span>04</span>
    <br>
    <span class="blue">MMM</span> <span>Apr</span>
    <br>
    <span class="blue">MMMM</span> <span>April</span>
    <br>
    <span class="blue">DD</span> <span>30</span>
    <br>
    <span class="blue">hh</span> <span>06</span>
    <br>
    <span class="blue">mm</span> <span>40</span>
    <br>
    <span class="blue">ss</span> <span>08</span>
    <br>
  </p>
</div>


Some naming tags in the downloader generate date and time strings:
- `{date}`
- `{upload_date}`
- `{task_date}`

Their default format is `YYYY-MM-DD` (for example `2021-04-30`), which includes only the date and not the time.

If you want to change the format, modify this setting.

For a time such as `2021-04-30T06:40:08`, the available tags and their outputs are as follows (**case-sensitive**):

- `YYYY` 2021
- `YY` 21
- `MM` 04
- `MMM` Apr
- `MMMM` April
- `DD` 30
- `hh` 06
- `mm` 40
- `ss` 08

## File name length limit

<div class="option settingsPanel_optionCard" data-no="39" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Folder-and-file-names?flag=39" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_文件名长度限制">File name <span class="key">length</span> limit</span>
  </a>
  <input type="checkbox" name="fullNameLengthLimitSwitch" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="fullNameLengthLimitSwitch" style="display: inline-flex;">
    <input type="text" name="fullNameLengthLimit" class="setinput_style blue" value="210">
    <button type="button" class="gray1 textButton showMsgBtn" data-title="_文件名长度限制" data-msg="_文件名长度限制的说明" data-xztext="_帮助">Help</button>
  </div>
</div>



You can set a character limit for the full filename. The full filename includes: the folder name, path separators, the filename itself, and the extension.

The default value is `210`. If the total number of characters in the full filename exceeds this limit, the downloader will prioritize truncating the filename to keep the character count below the limit. If necessary, it will also truncate folder names.

**Why might filenames become too long?**

Some tags in the naming rule can output a large amount of text, which may cause the filename length to exceed the limit allowed by the operating system (usually no more than 256 characters).

Two types of tags are particularly likely to cause this issue:
- Titles, including `{title}` and `{page_title}`, because some novel titles are very long.
- Tag lists, including `{tags}`, `{tags_translate}`, `{tags_transl_only}`, and `{page_tag}`, because some tags contain a large number of characters.

