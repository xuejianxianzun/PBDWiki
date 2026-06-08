## Maximum number of images for multi-image works

<div class="option settingsPanel_optionCard" data-no="20" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=20" target="_blank" class="has_tip settingNameStyle" data-xztip="_多图作品的图片数量上限提示" data-tip="If the number of images in a multi-image work exceeds the set number, the downloader will not crawl this work." data-bind-click="true">
    <span data-xztext="_多图作品的图片数量上限"><span class="key">Maximum number</span> of images for multi-image works</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="multiImageWorkImageLimitSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="multiImageWorkImageLimitSwitch" style="display: none;">
    &lt;=&nbsp;
    <input type="text" name="multiImageWorkImageLimit" class="setinput_style blue" value="1">
  </div>
</div>

## Only crawl the first few images of multi-image works

<div class="option settingsPanel_optionCard" data-no="21" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=21" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_多图作品只抓取前几张图片">Only crawl the <span class="key">first few</span> images of multi-image works</span>
  </a>
  <input type="checkbox" name="onlyCrawlFirstFewImagesSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="onlyCrawlFirstFewImagesSwitch" style="display: none;">
    <input type="text" name="onlyCrawlFirstFewImagesCount" class="setinput_style blue" value="1">
  </div>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_多图作品只抓取前几张图片" data-msg="_多图作品只抓取前几张图片的说明" data-xztext="_帮助">Help</button>
</div>


You can filter original works and non-original works.

**How it works:**

When artists submit a work, they can set whether it is an original work. This becomes a property of the work (`isOriginal`).

For original works, Pixiv displays the bolded word "Original" at the beginning of the tag list, for example:

![](images/20260405_005635.png)

If it is not an original work, there will be no bold "Original" text. Even if it contains tags related to originality, it is **not** considered an original work, for example:

![](images/20260405_005754.png)

The downloader first checks the work's `isOriginal` property to determine whether it is an original work. If `isOriginal` is `true`, it is an original work; otherwise, it is a non-original work.

Additionally, the downloader enables the `Loose matching` rule by default: for non-original works, if it contains any of the specific tags, the downloader will treat it as an original work when checking this filter condition. These tags are:

```
原创,原創,創作,オリジナル,Original,original,Creation,creation,창작,오리지널,Asli,ออริจินัล,Оригинал
```

PS: If you disable the `Loose matching` rule, the downloader will not check the tag list, so non-original works will never be treated as original works.

## Only crawl the last few images of multi-image works

<div class="option settingsPanel_optionCard new" data-no="22" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=22" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_多图作品只抓取后几张图片">Only crawl the <span class="key">last few</span> images of multi-image works</span>
  </a>
  <input type="checkbox" name="onlyCrawlLastFewImagesSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="onlyCrawlLastFewImagesSwitch" style="display: none;">
    <input type="text" name="onlyCrawlLastFewImagesCount" class="setinput_style blue" value="1">
  </div>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_多图作品只抓取后几张图片" data-msg="_多图作品只抓取后几张图片的说明" data-xztext="_帮助">Help</button>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


You can filter original works and non-original works.

**How it works:**

When artists submit a work, they can set whether it is an original work. This becomes a property of the work (`isOriginal`).

For original works, Pixiv displays the bolded word "Original" at the beginning of the tag list, for example:

![](images/20260405_005635.png)

If it is not an original work, there will be no bold "Original" text. Even if it contains tags related to originality, it is **not** considered an original work, for example:

![](images/20260405_005754.png)

The downloader first checks the work's `isOriginal` property to determine whether it is an original work. If `isOriginal` is `true`, it is an original work; otherwise, it is a non-original work.

Additionally, the downloader enables the `Loose matching` rule by default: for non-original works, if it contains any of the specific tags, the downloader will treat it as an original work when checking this filter condition. These tags are:

```
原创,原創,創作,オリジナル,Original,original,Creation,creation,창작,오리지널,Asli,ออริจินัล,Оригинал
```

PS: If you disable the `Loose matching` rule, the downloader will not check the tag list, so non-original works will never be treated as original works.

## Do not crawl the first few images of multi-image works

<div class="option settingsPanel_optionCard new" data-no="23" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=23" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_多图作品不抓取前几张图片">Do not crawl the <span class="key">first few</span> images of multi-image works</span>
  </a>
  <input type="checkbox" name="doNotCrawlFirstImagesSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="doNotCrawlFirstImagesSwitch" style="display: none;">
    <input type="text" name="doNotCrawlFirstImagesCount" class="setinput_style blue" value="1">
  </div>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_多图作品不抓取前几张图片" data-msg="_多图作品不抓取前几张图片的说明" data-xztext="_帮助">Help</button>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


You can filter original works and non-original works.

**How it works:**

When artists submit a work, they can set whether it is an original work. This becomes a property of the work (`isOriginal`).

For original works, Pixiv displays the bolded word "Original" at the beginning of the tag list, for example:

![](images/20260405_005635.png)

If it is not an original work, there will be no bold "Original" text. Even if it contains tags related to originality, it is **not** considered an original work, for example:

![](images/20260405_005754.png)

The downloader first checks the work's `isOriginal` property to determine whether it is an original work. If `isOriginal` is `true`, it is an original work; otherwise, it is a non-original work.

Additionally, the downloader enables the `Loose matching` rule by default: for non-original works, if it contains any of the specific tags, the downloader will treat it as an original work when checking this filter condition. These tags are:

```
原创,原創,創作,オリジナル,Original,original,Creation,creation,창작,오리지널,Asli,ออริจินัล,Оригинал
```

PS: If you disable the `Loose matching` rule, the downloader will not check the tag list, so non-original works will never be treated as original works.

## Do not crawl the last few images of multi-image works

<div class="option settingsPanel_optionCard new" data-no="24" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=24" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_多图作品不抓取后几张图片">Do not crawl the <span class="key">last few</span> images of multi-image works</span>
  </a>
  <input type="checkbox" name="doNotCrawlLastImagesSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="doNotCrawlLastImagesSwitch" style="display: none;">
    <input type="text" name="doNotCrawlLastImagesCount" class="setinput_style blue" value="1">
  </div>
  <button type="button" class="gray1 textButton showMsgBtn" data-title="_多图作品不抓取后几张图片" data-msg="_多图作品不抓取后几张图片的说明" data-xztext="_帮助">Help</button>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


You can filter original works and non-original works.

**How it works:**

When artists submit a work, they can set whether it is an original work. This becomes a property of the work (`isOriginal`).

For original works, Pixiv displays the bolded word "Original" at the beginning of the tag list, for example:

![](images/20260405_005635.png)

If it is not an original work, there will be no bold "Original" text. Even if it contains tags related to originality, it is **not** considered an original work, for example:

![](images/20260405_005754.png)

The downloader first checks the work's `isOriginal` property to determine whether it is an original work. If `isOriginal` is `true`, it is an original work; otherwise, it is a non-original work.

Additionally, the downloader enables the `Loose matching` rule by default: for non-original works, if it contains any of the specific tags, the downloader will treat it as an original work when checking this filter condition. These tags are:

```
原创,原創,創作,オリジナル,Original,original,Creation,creation,창작,오리지널,Asli,ออริจินัล,Оригинал
```

PS: If you disable the `Loose matching` rule, the downloader will not check the tag list, so non-original works will never be treated as original works.

## Don't download the last few images for specific user's multi-image works

<div class="option settingsPanel_optionCard" data-no="25" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Multi-image-works?flag=25" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_特定用户的多图作品不下载最后几张图片">Don't download the <span class="key">last few</span> images for specific user's multi-image works</span>
  </a>
  <slot data-name="DoNotDownloadLastFewImagesSlot"><span class="DoNotDownloadLastFewImagesWarp theme-white">
    <span class="controlBar">
    <span class="total">0</span>
      <button type="button" class="textButton expand" data-xztext="_展开">Expand</button>
      <button type="button" class="textButton showAdd" data-xztext="_添加">Add</button>
    </span>
    <div class="addWrap">
      <div class="settingItem addInputWrap">
        <div class="inputItem uid">
          <span class="label uidLabel" data-xztext="_用户id">User ID (Number)</span>
          <input type="text" class="setinput_style blue addUidInput" data-xzplaceholder="_必须是数字" placeholder="Number">
        </div>
        <div class="inputItem value">
          <span class="label nameLabel" data-xztext="_不下载最后几张图片">Do not download last few images</span>
          <input type="text" class="has_tip setinput_style blue addValueInput" data-xztip="_提示0表示不生效" data-tip="0 means no effect">
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
    <div class="listWrap" style="display: none;"></div>
  </span></slot>
</div>


