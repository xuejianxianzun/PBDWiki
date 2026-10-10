## Other tabs when you change settings

<div class="option settingsPanel_optionCard new" data-no="105" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Manage-settings?flag=105" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_当你修改设置时其他标签页">Other tabs when you <span class="key">change</span> settings</span>
    <span class="mr4">:</span>
  </a>
  <input type="radio" name="settingsAcrossDifferentTabs" id="settingsAcrossDifferentTabs1" class="need_beautify radio" value="synchronizeChanges" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="settingsAcrossDifferentTabs1" data-xztext="_同步变化" class="active">Sync changes</label>
  <input type="radio" name="settingsAcrossDifferentTabs" id="settingsAcrossDifferentTabs2" class="need_beautify radio" value="doNotSynchronizeChanges">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="settingsAcrossDifferentTabs2">
    <span data-xztext="_保持不变">Keep unchanged</span>
    <span class="gray" data-xztext="_旧版行为">(Legacy behavior)</span>
  </label>
  <span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
  </span>
</div>

Users often have several Pixiv.net tabs open. This setting determines whether those tabs use the same settings or keep independent settings.

**Sub-options:**

- Synchronize changes (default): When you change settings in one tab, settings in the other tabs change accordingly. All tabs use the same settings.
- Keep unchanged (legacy behavior): When you change settings in one tab, settings in the other tabs do not change. In other words, changes in any tab do not affect other tabs. Other tabs use the latest settings only after they are refreshed, or when a new tab is opened.

**About the legacy behavior:**

Its advantage is that when users crawl or download in several tabs at the same time, they can use different settings. For example, you can enable the "Bookmark count" condition in Tab A but leave it disabled in Tab B, then crawl in both tabs at the same time. This is a useful technique, but you do not need this behavior unless you are crawling simultaneously.

The legacy behavior also has some disadvantages:

1. It is counterintuitive. New users usually expect settings to synchronize across tabs, but settings in other tabs do not actually change. This can lead to mistakes and wasted time. Even users who know this behavior often need to confirm whether a tab has the expected settings, which increases cognitive load.
2. It can cause data added to some settings to be lost. For example, you add an excluded tag (`tag1`) in Tab A, and the downloader saves those settings. Tab B still uses the old settings without `tag1`. You then add another excluded tag (`tag2`) in Tab B. The downloader saves the settings again, but they contain only `tag2`, not `tag1`. Some changes made in Tab A have disappeared.

Because of these disadvantages, starting with version 19.3.0 (August 2026), the downloader synchronizes settings across tabs by default. You can change this setting if you truly need the legacy behavior.

## Automatically export settings

<div class="option settingsPanel_optionCard new" data-no="106" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Manage-settings?flag=106" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_自动导出设置">Automatically <span class="key">export</span> settings</span>
  </a>
  <input type="checkbox" name="autoExportSettings" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="autoExportSettings" style="display: none;">
    <div class="optionLine">
      <input type="radio" name="autoExportSettingsStrategy" id="autoExportSettingsStrategyTimed" class="need_beautify radio" value="timed" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="autoExportSettingsStrategyTimed" class="active">
        <span data-xztext="_定时导出间隔">Timed export, interval:</span>
        <input type="text" name="autoExportSettingsInterval" class="setinput_style blue" value="24">
        <span data-xztext="_小时">hours</span>
      </label>
    </div>
    <div class="optionLine">
      <input type="radio" name="autoExportSettingsStrategy" id="autoExportSettingsStrategyOnChange" class="need_beautify radio" value="onSettingChange">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="autoExportSettingsStrategyOnChange" data-xztext="_每当设置变化后立即导出">Export immediately whenever settings change</label>
    </div>
  </div>
  <span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
  </span>
</div>

Enable this feature to automatically export (back up) your settings. Exported settings are saved in the `PPD Settings` folder within the browser's download directory.

You can choose between two export strategies:

1. Export at a specified hourly interval. The default is 24 hours.
2. Export immediately whenever settings change. Note: if you change settings frequently, the downloader may export settings frequently.

## Manage settings

<div class="option settingsPanel_optionCard" data-no="103" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-General/Manage-settings?flag=103" target="_blank" class="has_tip settingNameStyle" data-xztip="_管理设置的说明" data-tip="You can manage the Downloader settings, such as exporting to back up your settings, sharing with others, and resetting your settings." data-bind-click="true">
    <span data-xztext="_管理设置">Manage <span class="key">settings</span></span>
    <span class="gray"> ? </span>
  </a>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent borderButton" data-event="exportSettings" id="exportSettings" data-xztext="_导出设置">Export settings</button>
    <button type="button" class="textButton fireEvent borderButton" data-event="importSettings" id="importSettings" data-xztext="_导入设置">Import settings</button>
    <button type="button" class="textButton fireEvent borderButton" data-event="resetSettings" id="resetSettings" data-xztext="_重置设置">Reset settings</button>
  </div>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent borderButton" data-event="resetFollowingData" id="resetFollowingData" data-xztext="_清除下载器保存的关注数据">Clear the follow data saved by the Downloader</button>
  </div>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent borderButton" data-event="resetHelpTip" id="resetHelpTip" data-xztext="_重新显示帮助">Redisplay help</button>
  </div>
</div>

This feature includes multiple buttons:

- `Export settings`: Exports the downloader's settings to a JSON file, saved in the `PPD Settings` folder within the browser's download directory.
- `Import settings`: Allows you to select a previously exported JSON file to restore settings.
- `Reset settings`: Restores all downloader options to their default values.
- `Clear the following data saved by the Downloader`: The downloader caches your following list locally for some enhanced features. Clicking this button clears the local cache, and the downloader will fetch your following list again later.
- `Show help again`: When using certain features (e.g., previewing images), the downloader shows one-time help messages. After they are shown once, they will not appear again. If you want to see them again, click this button.

Possible use cases:
- Save multiple presets. If you need different settings at different times, export them separately and load specific settings as needed.
- If you plan to remove and reinstall the extension, export settings to avoid losing them.
- Share exported settings with others.
- When submitting an issue, export settings and include them as an attachment.

?> The downloader's settings are stored in `browser.storage.local`. They are only cleared when the extension is removed. Clearing browser data does not affect the downloader's settings.
