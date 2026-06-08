## Remove Emoji from filename

<div class="option settingsPanel_optionCard new" data-no="49" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Remove-special-characters?flag=49" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_移除文件名里的emoji">Remove <span class="key">Emoji</span> from filename</span>
  </a>
  <input type="checkbox" name="removeEmoji" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


Usernames and work titles often contain emoji. If you do not want emoji to appear in filenames, you can enable this setting.

## Remove @ and subsequent characters in username

<div class="option settingsPanel_optionCard" data-no="50" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Remove-special-characters?flag=50" target="_blank" class="has_tip settingNameStyle" data-xztip="_移除用户名中的at和后续字符的说明" data-tip="For example：Anmi@画集発売中 → Anmi" data-bind-click="true">
    <span data-xztext="_移除用户名中的at和后续字符">Remove <span class="key">@</span> and subsequent characters in username</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="removeAtFromUsername" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>



Some users add an @ suffix to their usernames, for example:

- Anmi@画集発売中
- 奥馬@skeb募集中
- TonyG@__tony_g

Additionally, the text after the @ may change over time.

If you want to remove the @ and subsequent text, enable this option. This will cause the `{user}` naming tag to truncate the username at the @, resulting in:

- Anmi
- 奥馬
- TonyG

