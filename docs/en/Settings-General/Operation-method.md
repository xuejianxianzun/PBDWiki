## How to switch tabs

<div class="option settingsPanel_optionCard" data-no="95" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=95" target="_blank" class="has_tip settingNameStyle" data-xztip="_选项卡切换方式的说明" data-tip="Sets how to switch the primary category navigation of the Downloader." data-bind-click="true">
    <span data-xztext="_选项卡切换方式">How to switch <span class="key">tabs</span></span>
    <span class="gray"> ? </span>
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

<div class="option settingsPanel_optionCard" data-no="96" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=96" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置卡片时切换它的开关状态">Click the setting card to toggle its <span class="key">switch</span> status</span>
  </a>
  <input type="checkbox" name="clickOptionCardToToggleSwitch" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

If you enable this feature, when you click on any setting card, if the click position is a blank area (not an internal element) and the setting has a switch button, the downloader will automatically toggle the switch to enable/disable the setting. 

This way, when you want to enable/disable a setting, you don't need to click the switch button accurately, just click the blank area on the card, which is very convenient. 

If you're worried about misoperation, you can turn off this feature.

## Open Wiki link when clicking setting name

<div class="option settingsPanel_optionCard" data-no="97" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=97" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置名字时打开wiki链接">Open <span class="key">Wiki</span> link when clicking setting name</span>
  </a>
  <input type="checkbox" name="clickSettingNameOpenWiki" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

Each setting name is a hyperlink; clicking it will open the corresponding Wiki page.

If you’re worried about accidental clicks, you can disable this setting.

## Customize hotkeys

<div class="option settingsPanel_optionCard new" data-no="107" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=107" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_自定义快捷键">Customize <span class="key">hotkeys</span></span>
  </a>
  <slot data-name="hotkeysEditor"></slot>
  <span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
  </span>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

You can use these keys as hotkeys:

- Numbers `0` - `9`

- Letters `A` - `Z`

- Modifier keys: `Ctrl`, `Alt`, `Shift`, `Meta`

Details:

- Numbers and letters can be used on their own, so you can set a single-key hotkey. For example the hotkey `L`.

- You can combine any number of modifier keys, but you cannot use modifier keys alone. A modifier key must be used together with a number or letter. For example `Alt` + `X`.

- Many `Ctrl` combinations are browser-reserved function keys, so they cannot be set as in-page hotkeys. These combinations are: `Ctrl` + `T` / `W` / `N` / `R` / `Q` / `P` / `L` / `K`, and `Ctrl` + any number (`0` - `9`).

- Changes to hotkeys take effect immediately, no page refresh needed.

- You can modify the downloader's first-level hotkeys; second-level hotkeys (for example, those that only work when "previewing a work") are not supported.
