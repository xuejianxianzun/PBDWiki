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

