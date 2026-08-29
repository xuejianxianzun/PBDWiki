## Customize hotkeys

<div class="option settingsPanel_optionCard new" data-no="107" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Operation-method?flag=107" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_自定义快捷键">Customize <span class="key">hotkeys</span></span>
  </a>
  <button type="button" class="gray textButton showMsgBtn" data-title="_自定义快捷键" data-msg="_自定义快捷键的说明" data-xztext="_帮助">Help</button>
  <slot data-name="hotkeysEditor"><div class="hotkeyEditorWrap flexBasis100 theme-white">
    <div class="hotkeyTable">
      <div class="tableHeader">
        <div class="cell" data-xztext="_命令">Command</div>
        <div class="cell" data-xztext="_快捷键">Shortcut</div>
        <div class="cell" data-xztext="_操作">Action</div>
      </div>
      <div class="listWrap">
    <div class="settingItem" data-command="commandToggleLogArea">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_查看关闭日志区域">Show/hide log area</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">L</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandToggleSettingsPanel">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_查看关闭设置面板">Show/hide settings panel</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+X</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandStartDefaultCrawl">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_点击默认的抓取按钮">Click the default crawl button</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+Z</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandToggleSelectWork">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_手动选择作品">Manually select</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+S</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandToggleExcludeWork">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_手动排除作品">Manually exclude</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+E</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandQuickDownload">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_快捷键快速下载">Quickly download the current work<br>(only works on a work page)</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+Q</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandQuickBookmark">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_快速收藏当前作品">Quickly bookmark the current work<br>(only works on a work page)</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+B</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandCopyWorkInfo">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_复制作品信息">Copy work info</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+C</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div>
    <div class="settingItem" data-command="commandTogglePreviewWork">
      <div class="cell cellCommand">
        <span class="label" data-xztext="_快捷键预览作品">Enable/disable the preview work feature</span>
      </div>
      <div class="cell cellHotkey">
        <span class="value">Alt+P</span>
        <button type="button" class="textButton escCancel" data-xztext="_Esc取消">Esc to cancel</button>
      </div>
      <div class="cell cellAction">
        <button type="button" class="textButton edit" data-xztitle="_修改快捷键" title="Edit hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#category-names-line"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_修改">Modify</span>
        </button>
        <button type="button" class="textButton delete" data-xztitle="_删除快捷键" title="Delete hotkey">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#close_cancel"></use>
          </svg>
          <span class="buttonLabel" data-xztext="_清除">Clear</span>
        </button>
      </div>
    </div></div>
    </div>
    <div class="btns">
      <button type="button" class="textButton reset borderButton" data-xztext="_重置所有快捷键">Reset all hotkeys</button>
    </div>
  </div></slot>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>

You can use these keys as hotkeys:<br>
- Numbers <span class="blue">0</span> - <span class="blue">9</span><br>
- Letters <span class="blue">A</span> - <span class="blue">Z</span><br>
- Modifier keys: <span class="blue">Ctrl</span>, <span class="blue">Alt</span>, <span class="blue">Shift</span>, <span class="blue">Meta</span><br>
<br>
Details:<br>
- Numbers and letters can be used on their own, so you can set a single-key hotkey. For example the hotkey <span class="blue">L</span>.<br>
- You can combine any number of modifier keys, but you cannot use modifier keys alone. A modifier key must be used together with a number or letter. For example <span class="blue">Alt</span> + <span class="blue">X</span>.<br>
- Many <span class="blue">Ctrl</span> combinations are browser-reserved function keys, so they cannot be set as in-page hotkeys. These combinations are: <span class="blue">Ctrl</span> + <span class="blue">T</span> / <span class="blue">W</span> / <span class="blue">N</span> / <span class="blue">R</span> / <span class="blue">Q</span> / <span class="blue">P</span> / <span class="blue">L</span> / <span class="blue">K</span>, and <span class="blue">Ctrl</span> + any number (<span class="blue">0</span> - <span class="blue">9</span>).<br>
- Changes to hotkeys take effect immediately, no page refresh needed.<br>
- You can modify the downloader's first-level hotkeys; second-level hotkeys (for example, those that only work when "previewing a work") are not supported.

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

<div class="option settingsPanel_optionCard new" data-no="96" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=96" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置卡片时切换它的开关状态">Click the setting card to toggle its <span class="key">switch</span> status</span>
  </a>
  <input type="checkbox" name="clickOptionCardToToggleSwitch" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray textButton showMsgBtn" data-title="_点击设置卡片时切换它的开关状态" data-msg="_点击设置卡片时切换它的开关状态的说明" data-xztext="_帮助">Help</button>
</div>

If a settings card contains a toggle switch (like this card), clicking the blank area of the card will toggle that switch.

If you’re worried about accidental clicks, you can disable this setting.

## Open Wiki link when clicking setting name

<div class="option settingsPanel_optionCard" data-no="97" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Operation-method?flag=97" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_点击设置名字时打开wiki链接">Open <span class="key">Wiki</span> link when clicking setting name</span>
  </a>
  <input type="checkbox" name="clickSettingNameOpenWiki" class="need_beautify checkbox_switch" checked>
  <span class="beautify_switch" tabindex="0"></span>
</div>

Each setting name is a hyperlink; clicking it will open the corresponding Wiki page.

If you’re worried about accidental clicks, you can disable this setting.

