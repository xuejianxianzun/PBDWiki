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
    <input type="text" name="multiImageWorkImageLimit" class="setinput_style blue" value="10">
  </div>
</div>

If a multi-image work contains more images than the number you set, the downloader will not crawl that work.

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

If you do not want to download too many images from a multi-image work, or if you think the first image is the most valuable one, you can enable this setting.

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

A common use case is when users post character cards or scene cards from games such as Koikatsu. The earlier images are screenshots, while the last image contains the actual card data. You can enable this setting to crawl only the last one or several images.

For example, in multi-image works by [日月](https://www.pixiv.net/users/42064021/artworks), the last image is the character card.

**Tip:**
- The two `crawl only` conditions can be used at the same time. In that case, an image is kept if it matches either condition. This lets you skip the middle images and download only the images at the beginning and the end.

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

A common use case is when an artist's first image contains text while the second image does not, or the first image is all-ages while the second image is R-18. If you want to skip the first image and start crawling from the second image, you can use this setting.

For example, in multi-image works by [こけもも](https://www.pixiv.net/users/1472682), the first image contains text while the second one is clean. If you want to exclude the first image, you can use this setting.

Also, their last images are promotional images, so this setting can be used together with `Multi-image works: do not crawl the last few images`.

**Notes:**

- If the number you set is larger than the number of images in the work, the downloader will keep the last image instead of excluding the whole work.
- `Crawl only` and `do not crawl` conditions for the first/last few images can be used together. `Do not crawl` has higher priority. If an image matches both kinds of conditions, the downloader will not crawl it.

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


A common use case is when an artist's last one or several images are promotional images, or images with mosaics, and you do not want to crawl them. In that case, you can use this setting to exclude the last one or several images.

For example, in multi-image works by [儒宅 Ruzhai](https://www.pixiv.net/users/12539859), the last image is always a promotional image, so this setting is useful.

**Notes:**
- If the number you set is larger than the number of images in the work, the downloader will keep the first image instead of excluding the whole work.
- `Crawl only` and `do not crawl` conditions for the first/last few images can be used together. `Do not crawl` has higher priority. If an image matches both kinds of conditions, the downloader will not crawl it.

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
          <input type="text" class="setinput_style blue addUidInput w100" data-xzplaceholder="_必须是数字" placeholder="Number">
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


This is a hidden setting.

This setting is always active, whether displayed or not. By default, it has no rules, so it has no effect. It only takes effect after you add rules.

Click the "Add" button to enter a user ID and specify how many of their work's last images to exclude from downloading.
