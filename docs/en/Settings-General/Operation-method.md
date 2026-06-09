## How to switch tabs

<div class="option settingsPanel_optionCard" data-no="95" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Operation-method?flag=95" target="_blank" class="has_tip settingNameStyle" data-xztip="_选项卡切换方式的说明" data-tip="Sets how to switch the primary category navigation of the Downloader." data-bind-click="true">
    <span data-xztext="_选项卡切换方式">How to switch <span class="key">tabs</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="radio" name="switchTabBar" id="switchTabBar1" class="need_beautify radio" value="over" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="switchTabBar1" data-xztext="_鼠标经过" class="active">Mouse over</label>
  <input type="radio" name="switchTabBar" id="switchTabBar2" class="need_beautify radio" value="click">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="switchTabBar2" data-xztext="_鼠标点击">Mouse click</label>
</div>

“Tab” refers to the downloader’s navigation categories. You can choose how to activate a navigation category:
- `Mouse over`: the default. Moving the mouse pointer over a title will immediately switch tabs, which is convenient.
- `Mouse click`: hovering over a title will not switch tabs; you must click the title to switch. This option is for users who find mouse-over causes accidental switches.

## Click the setting card to toggle its switch status

<div class="option settingsPanel_optionCard new" data-no="96" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Operation-method?flag=96" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置卡片时切换它的开关状态">Click the setting card to toggle its <span class="key">switch</span> status</span>
  </a>
  <input type="checkbox" name="clickOptionCardToToggleSwitch" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_点击设置卡片时切换它的开关状态" data-msg="_点击设置卡片时切换它的开关状态的说明" data-xztext="_帮助">Help</button>
</div>

If a settings card contains a toggle switch (like this card), clicking the blank area of the card will toggle that switch.

If you’re worried about accidental clicks, you can disable this setting.

## Open Wiki link when clicking setting name

<div class="option settingsPanel_optionCard" data-no="97" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Operation-method?flag=97" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置名字时打开wiki链接">Open Wiki link when clicking setting name</span>
  </a>
  <input type="checkbox" name="clickSettingNameOpenWiki" class="need_beautify checkbox_switch" checked>
  <span class="beautify_switch" tabindex="0"></span>
</div>

Each setting name is a hyperlink; clicking it will open the corresponding Wiki page.

If you’re worried about accidental clicks, you can disable this setting.

