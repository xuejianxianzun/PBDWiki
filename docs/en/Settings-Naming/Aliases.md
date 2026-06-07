## Tag alias

<div class="option settingsPanel_optionCard new" data-no="44" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Aliases?flag=44" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_标签别名">Tag <span class="key">alias</span></span>
  </a>
  <label for="useTagAliasForTagsNamingRule" data-xztext="_应用到文件名里的tags系列标记">{tags} series tokens applied to the file name</label>
  <input type="checkbox" name="useTagAliasForTagsNamingRule" id="useTagAliasForTagsNamingRule" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_标签别名" data-msg="_标签别名的帮助" data-xztext="_帮助">Help</button>
  <slot data-name="setTagAliasSlot"><span class="setUserNameWrap setTagAliasWrap theme-white">
    <span class="controlBar">
    <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_收起">Collapse</button>
      <button type="button" class="textButton showAdd" data-xztext="_添加">Add</button>
    </span>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem uid">
          <span class="label uidLabel" data-xztext="_别名">Alias</span>
          <input type="text" class="setinput_style blue addUidInput">
        </div>
        <div class="inputItem name">
          <span class="label nameLabel" data-xztext="_标签列表">Tag list</span>
          <input type="text" class="setinput_style blue addNameInput" placeholder="tag1,tag2,tag3">
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
  </span></slot>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

## Customize username

<div class="option settingsPanel_optionCard" data-no="45" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Aliases?flag=45" target="_blank" class="has_tip settingNameStyle" data-xztip="_自定义用户名的说明" data-tip="Some users may change their name. If you want to use his original name, you can manually set his name here. &lt;br&gt;
    You can also set aliases for users. &lt;br&gt;
    When you use the {user} tag in the naming rule, the downloader will give priority to the name you set." data-bind-click="true">
    <span data-xztext="_自定义用户名">Customize <span class="key">username</span></span>
    <span class="gray1"> ? </span>
  </a>
  <slot data-name="setUserNameSlot"><span class="setUserNameWrap theme-white">
    <span class="controlBar">
    <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_收起">Collapse</button>
      <button type="button" class="textButton showAdd" data-xztext="_添加">Add</button>
    </span>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem uid">
          <span class="label uidLabel" data-xztext="_用户id">User ID (Number)</span>
          <input type="text" class="setinput_style blue addUidInput" data-xzplaceholder="_必须是数字" placeholder="Number">
        </div>
        <div class="inputItem name">
          <span class="label nameLabel" data-xztext="_命名标记user">User name</span>
          <input type="text" class="setinput_style blue addNameInput">
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
  </span></slot>
</div>

