## Tags must contain

<div class="option settingsPanel_optionCard" data-no="15" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Tags-and-title?flag=15" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_标签必须含有"><span class="key">Tags</span> must contain</span>
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

You can require that works must contain certain tags. Works without these tags will not be crawled.

?> Tags refer to the tag list below the description of a work, for example:

![](../../template/en/images/20250909_001538.png)

**Tips:**

- You can add multiple tags, separated by **English commas** `,`.
- It is not case-sensitive. The downloader compares the tags you set with the tags of the work one by one.
- It is a full match. If you set `ab`, it will only match `ab`, and will not match `abc`, and vice versa.
- Match mode: `all` means the work must contain all the tags you set; `any` means the work only needs to contain any one of the tags you set.
- The downloader checks both the original tags and the translated tags. If the original tags do not contain the tag you set, but the translated tags do, then the downloader considers that the work contains this tag.
- Depending on the language you use on Pixiv, Pixiv returns different translated tags. For example, the English translation of `巨乳` is `large breasts`, and the Korean translation is `거유`. So when the downloader checks translated tags, it only checks the translated tags in the current language.
- It is recommended to use original tags first, so that the check can be performed earlier in some scenarios.

## Tags must not contain

<div class="option settingsPanel_optionCard" data-no="16" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Tags-and-title?flag=16" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_标签不能含有"><span class="key">Tags</span> must not contain</span>
  </a>
  <input type="checkbox" name="notNeedTagSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="notNeedTagSwitch" style="display: none;">
    <div class="optionLine">
      <label for="notNeedTagWholeSwitch">
        <span data-xztext="_使用全字匹配的标签">Use exact match tags</span>
      </label>
      <input type="checkbox" name="notNeedTagWholeSwitch" id="notNeedTagWholeSwitch" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
      <div class="subOptionWrap flexBasis100" data-show="notNeedTagWholeSwitch" style="display: none;">
        <textarea class="centerPanelTextArea beautify_scrollbar" name="notNeedTagWhole" rows="1" placeholder="tag1,tag2,tag3"></textarea>
      </div>
    </div>
    <div class="optionLine">
      <label for="notNeedTagPartialSwitch">
        <span data-xztext="_使用部分匹配的标签">Use partial match tags</span>
      </label>
      <input type="checkbox" name="notNeedTagPartialSwitch" id="notNeedTagPartialSwitch" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
      <div class="subOptionWrap flexBasis100" data-show="notNeedTagPartialSwitch" style="display: none;">
        <textarea class="centerPanelTextArea beautify_scrollbar" name="notNeedTagPartial" rows="1" placeholder="tag1,tag2,tag3"></textarea>
      </div>
    </div>
  </div>
</div>

You can require that works must not contain certain tags. If a work has **any** tag that matches the tags set here, the downloader will not crawl it.

This setting is used in a similar way to "Must contain tags". The differences are:

- The match mode is always `any`: if you set multiple tags, then the work will not be downloaded as long as it contains **any one of them**.
- You can choose full match or partial match: full match and partial match each have their own input box and switch, and they can be set and toggled separately. The default `exact match` is a full match: the `ab` you set will only match the `ab` tag. `partial match` allows partial matching: the `ab` you set can match the `abc` tag of a work, but the `abc` you set will not match the `ab` of a work, that is, the tag you set cannot be longer than the target tag.
- Higher priority: the priority of "Must not contain tags" is **higher than** "Must contain tags". If a work meets both settings at the same time, the downloader will exclude it (that is, it will not be crawled or downloaded).

**How it works:**

- Some tags may be displayed as translated tags, for example `绝区零`-`Zenless Zone Zero`, `プリキュア`-`Pretty Cure`. The downloader checks both the original tags and the translated tags of a work.
- It is recommended to use original tags first, so that the check can be performed earlier in some scenarios.

## Block tags for specific users

<div class="option settingsPanel_optionCard" data-no="17" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Tags-and-title?flag=17" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_针对特定用户屏蔽标签">Block <span class="key">tags</span> for specific users</span>
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
    <div class="listWrap">
    </div>
  </div></slot>
  </div>
</div>

If you do not like some works of a user and do not want the downloader to crawl and download them, you can enable this setting.

You can enter the user ID and some tags of this user's works. When the downloader crawls the works of this user, it will not crawl the works that contain these tags.

For example, you can set it to exclude `tag1,tag2,tag3` of the user ID `123456`.

**Matching method:**

- It is not case-sensitive.
- Partial match: the `ab` you set can match the `abc` tag of a work.
- Any: as long as the tags of a work contain any one of the tags you set, the work will be excluded.

## Title must contain

<div class="option settingsPanel_optionCard" data-no="18" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Tags-and-title?flag=18" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_标题必须含有"><span class="key">Title</span> must contain</span>
  </a>
  <input type="checkbox" name="titleIncludeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="titleIncludeSwitch" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="titleIncludeList" rows="1" placeholder="word1,word2,word3"></textarea>
  </div>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

You can require the title of a work to contain specific characters; only then will the downloader crawl it.

If the title does not contain the characters you set, the downloader will not crawl it.

You can set multiple entries, separated by a comma `,`.

Matching rules:

- Case-insensitive.

- One: as long as the title contains any one of the entries you set, the downloader will crawl it.

## Title must not contain

<div class="option settingsPanel_optionCard" data-no="19" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Tags-and-title?flag=19" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_标题不能含有"><span class="key">Title</span> must not contain</span>
  </a>
  <input type="checkbox" name="titleExcludeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="titleExcludeSwitch" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="titleExcludeList" rows="1" placeholder="word1,word2,word3"></textarea>
    <label for="alsoCheckSeriesTitle" data-xztext="_也检查系列标题" class="active">Also check series title</label>
    <input type="checkbox" name="alsoCheckSeriesTitle" id="alsoCheckSeriesTitle" class="need_beautify checkbox_switch" checked="">
    <span class="beautify_switch" tabindex="0"></span>
  </div>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

You can require the title of a work not to contain specific characters.

If the title contains the characters you set, the downloader will not crawl it.

You can set multiple entries, separated by a comma `,`.

Matching rules:

- Case-insensitive.

- One: as long as the title contains any one of the entries you set, the downloader will not crawl it.

Also check series title:

If you enable "Also check series title", then when a work belongs to a series, the downloader will also check whether the series title contains the characters to be excluded. If it does, the downloader will not crawl this series.

Priority:

Exclusion takes priority over inclusion. If a work's title satisfies both "Title must contain" and "Title must not contain", the downloader will not crawl it.
