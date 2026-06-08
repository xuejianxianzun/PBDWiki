## Include tag

<div class="option settingsPanel_optionCard" data-no="15" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Tags-and-title?flag=15" target="_blank" class="has_tip settingNameStyle" data-xztip="_必须tag的提示文字" data-tip="Before downloading, you can set the tag that must be included. Not case sensitive; If you need to set multiple tags, you can use comma (,) separated." data-bind-click="true">
    <span data-xztext="_必须含有tag"><span class="key">Include</span> tag</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="needTagSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="needTagSwitch" style="display: none;">
    <span data-xztext="_匹配模式">Match mode: </span>
    <input type="radio" name="needTagMode" id="needTagMode1" class="need_beautify radio" value="all" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="needTagMode1" data-xztext="_全部" class="active">All</label>
    <input type="radio" name="needTagMode" id="needTagMode2" class="need_beautify radio" value="one">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="needTagMode2" data-xztext="_任一">One</label>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="needTag" rows="1" placeholder="tag1,tag2,tag3"></textarea>
  </div>
</div>


You can require works to contain certain tags. Works without these tags will not be crawled.

?> Tags refer to the tag list below the work's description, for example:

![](images/20250909_001538.png)

## Exclude tag

<div class="option settingsPanel_optionCard" data-no="16" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Tags-and-title?flag=16" target="_blank" class="has_tip settingNameStyle" data-xztip="_排除tag的提示文字" data-tip="Before downloading, you can set the tag you want to exclude. &lt;br&gt;Not case sensitive; If you need to set multiple tags, you can use comma (,) separated. &lt;br&gt;The excluded tag takes precedence over the included tag" data-bind-click="true">
    <span data-xztext="_不能含有tag"><span class="key">Exclude</span> tag</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="notNeedTagSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="notNeedTagSwitch" style="display: none;">
    <span data-xztext="_匹配模式">Match mode: </span>
    <span class="gray1" data-xztext="_任一">One</span>
    <span class="verticalSplit"></span>
    <input type="radio" id="tagMatchMode1" class="need_beautify radio" name="tagMatchMode" value="partial" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="tagMatchMode1" data-xztext="_部分一致">Partial match</label>
    <input type="radio" id="tagMatchMode2" class="need_beautify radio" name="tagMatchMode" value="whole" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="tagMatchMode2" data-xztext="_完全一致" class="active">Perfect match</label>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="notNeedTag" rows="1" placeholder="tag1,tag2,tag3"></textarea>
  </div>
</div>


You can require works to not contain certain tags. If a work has **any one** of the tags set here, the downloader will not crawl it.

**Tips:**

- You can add multiple tags, separated by **English commas** `,`.
- If multiple tags are set, a work with **any one** of them will not be downloaded.
- Case-insensitive.
- The **priority** of "Excluded Tags" is higher than "Required Tags". If a work meets both conditions, the downloader will exclude it (i.e., not crawl or download it).
- Using Japanese (original) tags is recommended. Translated tags are not recommended.

## Block tags for specific users

<div class="option settingsPanel_optionCard" data-no="17" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Tags-and-title?flag=17" target="_blank" class="has_tip settingNameStyle" data-xztip="_针对特定用户屏蔽tag的提示" data-tip="For example, when crawling the works of user 123456, exclude specific tags." data-bind-click="true">
    <span data-xztext="_针对特定用户屏蔽标签">Block <span class="key">tags</span> for specific users</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="blockTagsForSpecificUser" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="blockTagsForSpecificUser" style="display: none;">
    <slot data-name="blockTagsForSpecificUser"><div class="blockTagsForSpecificUserWrap theme-white">
    <div class="controlBar">
      <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_收起">Collapse</button>
      <button type="button" class="textButton showAdd" data-xztext="_添加">Add</button>
    </div>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem uid">
          <span class="label uidLabel" data-xztext="_用户id">User ID (Number)</span>
          <input type="text" class="setinput_style blue addUidInput" data-xzplaceholder="_必须是数字" placeholder="Number">
        </div>
        <div class="inputItem tags">
          <span class="label tagsLabel">Tags</span>
          <input type="text" class="setinput_style blue addTagsInput" data-xzplaceholder="_tag用逗号分割" placeholder="Multiple tags use comma (,) split">
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
    <div class="listWrap" style="display: block;"></div>
  </div></slot>
  </div>
</div>

## Title must contain

<div class="option settingsPanel_optionCard new" data-no="18" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Tags-and-title?flag=18" target="_blank" class="has_tip settingNameStyle" data-xztip="_标题必须含有的说明" data-tip="You can require that the work's title must contain specific characters. Case-insensitive.&lt;br&gt;
You can set multiple strings, separated by commas (,).&lt;br&gt;
The matching mode is &quot;any one&quot;, meaning as long as the title contains any one of the specified strings, the downloader will crawl it." data-bind-click="true">
    <span data-xztext="_标题必须含有"><span class="key">Title</span> must contain</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="titleIncludeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="titleIncludeSwitch" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="titleIncludeList" rows="1" placeholder="word1,word2,word3"></textarea>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Title must not contain

<div class="option settingsPanel_optionCard new" data-no="19" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Tags-and-title?flag=19" target="_blank" class="has_tip settingNameStyle" data-xztip="_标题不能含有的说明" data-tip="You can require that the work's title must not contain specific characters. Case-insensitive.&lt;br&gt;
You can set multiple strings, separated by commas (,).&lt;br&gt;
The matching mode is &quot;any one&quot;, meaning if the title contains any one of the specified strings, the downloader will not crawl it.&lt;br&gt;
Exclusion takes priority over inclusion." data-bind-click="true">
    <span data-xztext="_标题不能含有"><span class="key">Title</span> must not contain</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="titleExcludeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="titleExcludeSwitch" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="titleExcludeList" rows="1" placeholder="word1,word2,word3"></textarea>
    <label for="alsoCheckSeriesTitle" class="has_tip" data-xztext="_也检查系列标题" data-xztip="_也检查系列标题的说明" data-tip="If the work belongs to a series, enabling this setting will also check if the series title meets the conditions.">Also check series title</label>
    <span class="gray1 mr4"> ? </span>
    <input type="checkbox" name="alsoCheckSeriesTitle" id="alsoCheckSeriesTitle" class="need_beautify checkbox_switch" checked="">
    <span class="beautify_switch" tabindex="0"></span>
  </div>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


