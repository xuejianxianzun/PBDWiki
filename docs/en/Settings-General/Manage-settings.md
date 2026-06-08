## Manage settings

<div class="option settingsPanel_optionCard" data-no="103" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-General/Manage-settings?flag=103" target="_blank" class="has_tip settingNameStyle" data-xztip="_管理设置的说明" data-tip="You can manage the Downloader settings, such as exporting to back up your settings, sharing with others, and resetting your settings." data-bind-click="true">
    <span data-xztext="_管理设置">Manage <span class="key">settings</span></span>
    <span class="gray1"> ? </span>
  </a>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent" data-event="exportSettings" id="exportSettings" data-xztext="_导出设置">Export settings</button>
    <button type="button" class="textButton fireEvent" data-event="importSettings" id="importSettings" data-xztext="_导入设置">Import settings</button>
    <button type="button" class="textButton fireEvent" data-event="resetSettings" id="resetSettings" data-xztext="_重置设置">Reset settings</button>
  </div>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent" data-event="resetFollowingData" id="resetFollowingData" data-xztext="_清除下载器保存的关注数据">Clear the following data saved by the Downloader</button>
  </div>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent" data-event="resetHelpTip" id="resetHelpTip" data-xztext="_重新显示帮助">Redisplay help</button>
  </div>
</div>



This feature includes four buttons:

- `Export settings`: Exports the downloader's settings to a JSON file, saved to the browser's download directory.
- `Import settings`: Allows you to select a previously exported JSON file to restore settings.
- `Reset settings`: Restores all downloader options to their default values.
- `Show help again`: When using certain features (e.g., previewing images), the downloader shows one-time help messages. Click this button to view these help messages again.

Possible use cases:
- Save multiple presets. If you need different settings at different times, export them separately and load specific settings as needed.
- If you plan to remove and reinstall the extension, export settings to avoid losing them.
- Share exported settings with others.
- When submitting an issue, export settings and include them as an attachment.

?> The downloader's settings are stored in `browser.storage.local`. They are only cleared when the extension is removed. Clearing browser data does not affect the downloader's settings.

?> If you want to understand how settings work, you can check: [How Settings Work](/en/SettingsPanel?id=how-settings-work).

