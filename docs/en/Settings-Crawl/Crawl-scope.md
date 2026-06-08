## How many works to crawl

<div class="option settingsPanel_optionCard" data-no="0" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Crawl-scope?flag=0" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span class="textTip" data-xztext="_抓取多少作品">How <span class="key">many</span> works to crawl</span>
  </a>
  <input type="text" name="setWantWork" class="setinput_style blue" value="-1">
  <button type="button" class="textButton grayButton mr0" role="setMin">1</button>
  <button type="button" class="textButton grayButton" role="setMax">-1</button>
  <span class="gray1" data-xztext="_负1或者大于0" role="tip">-1, or greater than 0</span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_抓取多少作品" data-msg="_抓取多少作品的提示" data-xztext="_帮助">Help</button>
</div>

For pages where downloading is **based on works**, this setting will be displayed. You can set how many works to crawl.

?> The right side of this setting shows gray text to indicate the range of acceptable numbers. This range may vary depending on the page.

**Instructions for Different Usage Scenarios:**

- On **illustration or novel work pages**, crawling starts from the current work (including the current work). Setting it to 1 will crawl only the current work. Setting it to -1 means no limit on the number of works, and the downloader will crawl from the current work to the last one.

- On **other pages** (e.g., rankings or followed users' new works), the downloader starts crawling from the first work on the current page. Setting it to 1 will crawl only the first work. Setting it to -1 means crawling all works on the current page.

**Note:**

If you modify the default crawl filter conditions, some works may be excluded.

For example: If you set to crawl 10 works, and 6 of them are excluded, the downloader will only keep the 4 that meet the conditions.

## How many pages to crawl

<div class="option settingsPanel_optionCard" data-no="1" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Crawl-scope?flag=1" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span class="textTip" data-xztext="_抓取多少页面">How <span class="key">many</span> pages to crawl</span>
  </a>
  <input type="text" name="setWantPage" class="setinput_style blue" value="-1">
  <button type="button" class="textButton grayButton mr0" role="setMin"></button>
  <button type="button" class="textButton grayButton" role="setMax"></button>
  <span class="gray1" data-xztext="_负1或者大于0" role="tip">-1, or greater than 0</span>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_抓取多少页面" data-msg="_抓取多少页面的提示" data-xztext="_帮助">Help</button>
</div>

When you are on **paginated list pages**, you will see this setting. You can set how many pages to crawl.

?> The right side of this setting shows gray text to indicate the range of acceptable numbers. This range may vary depending on the page.

The downloader always starts crawling **from the current page** (including the current page). If you are on page 1, it starts from page 1. If you are on page 2, it starts from page 2.

- Setting it to 1 will crawl only the works on the current page.
- Setting it to 2 will crawl the current page and the next page, and so on.
- Setting it to -1 will make the downloader crawl from the current page to the last page.

## Crawl the latest few works of each user

<div class="option settingsPanel_optionCard" data-no="2" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Crawl-scope?flag=2" target="_blank" class="has_tip settingNameStyle" data-xztip="_必须大于0" data-tip="must be greater than 0" data-bind-click="true">
    <span data-xztext="_抓取每个用户最新的几个作品">Crawl the <span class="key">latest</span> few works of each user</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="crawlLatestFewWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="crawlLatestFewWorks" style="display: none;">
    <input type="text" name="crawlLatestFewWorksNumber" class="setinput_style blue" value="10">
  </div>
</div>

This is a hidden setting, and it only works on the Following page.

When you crawl on the Following page, if this setting is enabled and the number of works is greater than 0, the downloader only crawls the latest few works of each user.

For example, if you set it to 1, the downloader will crawl only the latest work of each user.

