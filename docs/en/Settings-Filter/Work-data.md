## Number of bookmarks

<div class="option settingsPanel_optionCard" data-no="10" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=10" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_收藏数量">Number of <span class="key">bookmarks</span></span>
  </a>
  <input type="checkbox" name="BMKNumSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="BMKNumSwitch" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_最小值">Minimum</span>
      <input type="text" name="BMKNumMin" class="setinput_style blue bmkNum" value="0">
      &nbsp;
      <span data-xztext="_最大值">Maximum</span>
      <input type="text" name="BMKNumMax" class="setinput_style blue bmkNum" value="9999999">
    </div>
    <div class="optionLine">
      <span data-xztext="_或者"> or </span>
    </div>
    <div class="optionLine">
      <label for="BMKNumAverageSwitch">
        <span data-xztext="_满足日均收藏数量条件">Meet the average daily bookmarks number condition</span>
      </label>
      <input type="checkbox" name="BMKNumAverageSwitch" id="BMKNumAverageSwitch" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
      <div class="subOptionWrap" data-show="BMKNumAverageSwitch" style="display: none;">
        &gt;=&nbsp;
        <input type="text" name="BMKNumAverage" class="setinput_style blue bmkNum" value="600">
      </div>
    </div>
  </div>
</div>

Bookmark count is the number of people who bookmarked this work. A higher bookmark count usually means the work is more valuable.

This setting has two filtering methods:

1. Bookmark count (total)
2. Average daily bookmark count

As long as a work meets either of these options, it will be downloaded.

## Width and height

<div class="option settingsPanel_optionCard" data-no="11" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=11" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_图片的宽高"><span class="key">Width</span> and height</span>
  </a>
  <input type="checkbox" name="setWHSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="setWHSwitch" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_宽度">Width</span>
      <input type="radio" name="widthComparison" id="widthComparison1" class="need_beautify radio" value=">="
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison1">&gt;=</label>
      <input type="radio" name="widthComparison" id="widthComparison2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison2">=</label>
      <input
        type="radio"
        name="widthComparison"
        id="widthComparison3"
        class="need_beautify radio"
        value="<=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison3">&lt;=</label>
      <input type="text" name="setWidth" class="setinput_style blue" value="0">
    </div>
    <div class="optionLine">
      <input type="radio" name="setWidthAndOr" id="setWidth_AndOr1" class="need_beautify radio" value="&" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="setWidth_AndOr1" data-xztext="_并且" class="active"> and </label>
      <input type="radio" name="setWidthAndOr" id="setWidth_AndOr2" class="need_beautify radio" value="|">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="setWidth_AndOr2" data-xztext="_或者"> or </label>
    </div>
    <div class="optionLine">
      <span data-xztext="_高度">height</span>
      <input type="radio" name="heightComparison" id="heightComparison1" class="need_beautify radio" value=">="
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison1">&gt;=</label>
      <input type="radio" name="heightComparison" id="heightComparison2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison2">=</label>
      <input
        type="radio"
        name="heightComparison"
        id="heightComparison3"
        class="need_beautify radio"
        value="<=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison3">&lt;=</label>
      <input type="text" name="setHeight" class="setinput_style blue" value="0">
    </div>
  </div>
</div>

You can set the width and height conditions for the images you want to download. The downloader will not download images that do not meet these conditions.

You can separately set the width and height values and comparison methods.

**Tips:**

- The default values for width and height are 0, meaning no restrictions.
- Selecting `And` means the image's width and height must both meet the set width and height conditions.
- Selecting `Or` means the image's width and height only need one to meet the requirements, and the image will be kept.

## Aspect ratio

<div class="option settingsPanel_optionCard" data-no="12" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=12" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_图片的宽高比例">Aspect <span class="key">ratio</span></span>
  </a>
  <input type="checkbox" name="ratioSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="ratioSwitch" style="display: none;">
    <input type="radio" name="ratio" id="ratio1" class="need_beautify radio" value="horizontal">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="ratio1" data-xztext="_横图">Horizontal</label>
    <input type="radio" name="ratio" id="ratio2" class="need_beautify radio" value="vertical">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="ratio2" data-xztext="_竖图">Vertical</label>
    <input type="radio" name="ratio" id="ratio0" class="need_beautify radio" value="square">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="ratio0" data-xztext="_正方形">Square</label>
    <input type="radio" name="ratio" id="ratio3" class="need_beautify radio" value="userSet">
    <span class="beautify_radio" tabindex="0"></span>
    <span class="has_tip settingNameStyle" data-xztip="_宽高比的提示" data-tip="Aspect ratio is the number obtained by dividing the width by the height.&lt;br&gt;When the aspect ratio is less than 1, the image is portrait.&lt;br&gt;When the aspect ratio is greater than 1, the image is landscape.&lt;br&gt;The larger the aspect ratio, the more elongated the image.">
      <label for="ratio3" style="padding: 0" data-xztext="_宽高比">Ratio</label>
      <span class="gray"> ? </span>
    </span>
    <!-- 这里使用了一个不可见的开关 userSetChecked，用来根据 radio 的值来控制子选项的显示或隐藏 -->
    <input type="checkbox" name="userSetChecked" class="need_beautify checkbox_switch" style="display: none">
    <span class="beautify_switch" tabindex="0" style="display: none"></span>
    <div class="subOptionWrap" data-show="userSetChecked" style="display: none;">
      <input type="radio" name="userRatioLimit" id="userRatioLimit1" class="need_beautify radio" value=">="
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit1">&gt;=</label>
      <input type="radio" name="userRatioLimit" id="userRatioLimit2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit2">=</label>
      <input
        type="radio"
        name="userRatioLimit"
        id="userRatioLimit3"
        class="need_beautify radio"
        value="<=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit3">&lt;=</label>
      <input type="text" name="userRatio" class="setinput_style blue" value="1.4">
    </div>
  </div>
</div>

You can download only images of specific shapes:

Horizontal, Vertical, or Square.

?> Horizontal images have a width greater than their height; vertical images have a width less than their height.

You can also manually set the range of the image aspect ratio.

?> The aspect ratio is the width divided by the height. An aspect ratio less than 1 indicates a vertical image. An aspect ratio greater than 1 indicates a horizontal image. The larger the aspect ratio, the flatter and longer the image appears.

## ID range

<div class="option settingsPanel_optionCard" data-no="13" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=13" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_id范围"><span class="key">ID</span> range</span>
  </a>
  <input type="checkbox" name="idRangeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap" data-show="idRangeSwitch" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_图像作品">Image works</span>
      <input type="radio" name="idRangeComparisonForImageWorks" id="idRangeComparisonForImageWorks1" class="need_beautify radio" value=">"
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForImageWorks1">&gt;</label>
      <input
        type="radio"
        name="idRangeComparisonForImageWorks"
        id="idRangeComparisonForImageWorks2"
        class="need_beautify radio"
        value="<">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForImageWorks2">&lt;</label>
      <input type="text" name="idRangeValueForImageWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_小说">Novels</span>
      <input type="radio" name="idRangeComparisonForNovelWorks" id="idRangeComparisonForNovelWorks1" class="need_beautify radio" value=">"
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelWorks1">&gt;</label>
      <input
        type="radio"
        name="idRangeComparisonForNovelWorks"
        id="idRangeComparisonForNovelWorks2"
        class="need_beautify radio"
        value="<">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelWorks2">&lt;</label>
      <input type="text" name="idRangeValueForNovelWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_系列小说">Novel series</span>
      <input type="radio" name="idRangeComparisonForNovelSeries" id="idRangeComparisonForNovelSeries1" class="need_beautify radio" value=">"
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelSeries1">&gt;</label>
      <input
        type="radio"
        name="idRangeComparisonForNovelSeries"
        id="idRangeComparisonForNovelSeries2"
        class="need_beautify radio"
        value="<">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelSeries2">&lt;</label>
      <input type="text" name="idRangeValueForNovelSeries" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_书签ID_图像作品">Bookmark ID (image works)</span>
      <input type="radio" name="idRangeComparisonForBookmarkImageWorks" id="idRangeComparisonForBookmarkImageWorks1" class="need_beautify radio" value=">"
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForBookmarkImageWorks1">&gt;</label>
      <input
        type="radio"
        name="idRangeComparisonForBookmarkImageWorks"
        id="idRangeComparisonForBookmarkImageWorks2"
        class="need_beautify radio"
        value="<">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForBookmarkImageWorks2">&lt;</label>
      <input type="text" name="idRangeValueForBookmarkImageWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_书签ID_小说">Bookmark ID (novels)</span>
      <input type="radio" name="idRangeComparisonForBookmarkNovelWorks" id="idRangeComparisonForBookmarkNovelWorks1" class="need_beautify radio" value=">"
        checked=""
      />
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForBookmarkNovelWorks1">&gt;</label>
      <input
        type="radio"
        name="idRangeComparisonForBookmarkNovelWorks"
        id="idRangeComparisonForBookmarkNovelWorks2"
        class="need_beautify radio"
        value="<">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForBookmarkNovelWorks2">&lt;</label>
      <input type="text" name="idRangeValueForBookmarkNovelWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
  </div>
</div>

You can enter a work ID and crawl works with IDs greater than it (newer works) or less than it (older works).

It is divided into 3 work types:
- `Image works`: including illustration, manga, and Ugoira
- `Novel`
- `Novel series`

You can set the ID for each type according to your needs.

## Posting time

<div class="option settingsPanel_optionCard" data-no="14" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=14" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_投稿时间">Posting <span class="key">time</span></span>
  </a>
  <input type="checkbox" name="postDate" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap" data-show="postDate" style="display: none;">
    <div class="optionLine">
      <span class="pr4" data-xztext="_起始时间">Start time</span>
      <input type="datetime-local" name="postDateStart" placeholder="yyyy-MM-dd HH:mm" class="setinput_style postDate blue" value="2009-01-01T00:00">
      <button type="button" class="textButton grayButton mr0" role="setDate" data-for="postDateStart" data-value="2009-01-01T00:00" data-xztext="_过去">Past</button>
      <button type="button" class="textButton grayButton" role="setDate" data-for="postDateStart" data-value="now" data-xztext="_现在">Now</button>
    </div>
    <div class="optionLine">
      <span class="pr4" data-xztext="_截止时间">End time</span>
      <input type="datetime-local" name="postDateEnd" placeholder="yyyy-MM-dd HH:mm" class="setinput_style postDate blue" value="2100-01-01T00:00">
      <button type="button" class="textButton grayButton mr0" role="setDate" data-for="postDateEnd" data-value="now" data-xztext="_现在">Now</button>
      <button type="button" class="textButton grayButton" role="setDate" data-for="postDateEnd" data-value="2100-01-01T00:00" data-xztext="_未来">Future</button>
    </div>
  </div>
</div>

You can download only works published within a specific time range.

You can click the icon to the right of the input field to use the browser's time and date picker, or you can enter the value manually.

**Note:** When entering the value manually, you must include the full time and date. As shown in the image below, the value on the left is incorrect because it doesn't include the time:

![](../../template/en/images/20250910_012836.png)

?> The first illustration on Pixiv is https://www.pixiv.net/artworks/20, published at `2007-09-09T13:14:07+00:00`.

## Only download novels in these languages

<div class="option settingsPanel_optionCard new" data-no="111" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Filter/Work-data?flag=111" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_只下载这些语言的小说">Only download novels in these <span class="key">languages</span></span>
  </a>
  <input type="checkbox" name="novelLanguageSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>

  <div class="subOptionWrap flexBasis100" data-show="novelLanguageSwitch" style="display: none;">
    <textarea class="centerPanelTextArea beautify_scrollbar" name="novelLanguageList" rows="1" placeholder="zh-cn,ja,en"></textarea>
  </div>
  <span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
  </span>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

You can require the language of a novel to be one of the specific languages; only then will the downloader crawl it.

The downloader checks the language of every novel, including the novels in a series.

You can set one or more language codes. Separate multiple language codes with a comma `,`. For example: `zh-cn,ja,en`

Matching rules:

- Case-insensitive.

- Any: as long as the novel's language is any one of the entries you set, the downloader will crawl it.
