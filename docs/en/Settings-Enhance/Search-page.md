## Add a quick search area on the search page

<div class="option settingsPanel_optionCard" data-no="90" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Search-page?flag=90" target="_blank" class="has_tip settingNameStyle" data-xztip="_在搜索页面添加快捷搜索区域的说明" data-tip="At the top of the search page (/tags/), the downloader can display some bookmarks tags, such as &quot;10000users入り&quot;, and you can click it to add it after the searched tag." data-bind-click="true">
    <span data-xztext="_在搜索页面添加快捷搜索区域">Add a quick <span class="key">search</span> area on the search page</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="showFastSearchArea" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Filter works on the search page

<div class="option settingsPanel_optionCard" data-no="91" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Search-page?flag=91" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_过滤搜索页面的作品"><span class="key">Filter</span> works on the search page</span>
  </a>
  <input type="checkbox" name="filterSearchResults" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_过滤搜索页面的作品" data-msg="_过滤搜索页面的作品的说明" data-xztext="_帮助">Help</button>
</div>

## Remove the works of followed users from the search page

<div class="option settingsPanel_optionCard" data-no="92" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Search-page?flag=92" target="_blank" class="has_tip settingNameStyle" data-xztip="_在搜索页面里移除已关注用户的作品的说明" data-tip="This will only display the works of unfollowed users, making it easier for you to discover new users you like.&lt;br&gt;Only works on the search page (/tags/)." data-bind-click="true">
    <span data-xztext="_在搜索页面里移除已关注用户的作品"><span class="key">Remove</span> the works of followed users from the search page</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="removeWorksOfFollowedUsersOnSearchPage" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

## Preview filter results on search page

<div class="option settingsPanel_optionCard" data-no="93" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Search-page?flag=93" target="_blank" class="has_tip settingNameStyle" data-xztip="_预览搜索结果说明" data-tip="When crawling in the search page (/tags/), the downloader can display the crawled works on the current page and sort them from high to low according to the number of bookmarks. &lt;br&gt;
    When the preview function is enabled, the downloader will not automatically start downloading, so that users can filter the crawled results again. &lt;br&gt;
    You can set how many previews to display. If there are too many previews, the page may crash." data-bind-click="true">
    <span data-xztext="_预览搜索结果"><span class="key">Preview</span> filter results on search page</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="previewResult" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="previewResult" style="display: inline-flex;">
    <span class="settingNameStyle" data-xztext="_上限">Upper limit</span>
    <input type="text" name="previewResultLimit" class="setinput_style blue w80" value="1000">
  </div>
</div>

