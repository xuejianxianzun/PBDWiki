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

The bookmark count refers to how many users have bookmarked the work. The higher the bookmark count, the higher the value of the work.

This setting has two filtering methods:

1. Bookmark count (the total number)
2. Average daily bookmark count

**Minimum / Maximum:**

It is used to check the total bookmark count of a work. You can set a bookmark count range to exclude works you do not need.

**Average daily bookmark count:**

This is a supplementary setting, intended to filter **recently posted** high-quality works. You can enable it as needed.

The average daily bookmark count is the average obtained by dividing the bookmark count of a work by the number of days since it was posted. If a work was posted 3 days ago and has 600 bookmarks, then its average daily bookmark count is 200.

Example use case:

You want to crawl high-quality works, so you set the minimum bookmark count to 3000. But for newly posted works, even if the quality is high, they may not reach 3000 bookmarks within a day or two.

In this case, you can enable "Average daily bookmark count" as a supplement. The default value of this setting is 600, which means that for a work posted 3 days ago, as long as its bookmark count is greater than 1800, the downloader will crawl it.

?> The bookmark count of a work often grows fastest right after it is posted, then gradually slows down. Therefore, if a work has been posted for less than a day, the downloader will discount its bookmark count based on how long it has been posted (the shorter the posting time, the larger the discount), to estimate its average daily bookmark count when it has been posted for a full day. For example: if a work was posted 2 hours ago and has 200 bookmarks, the downloader will estimate its average daily bookmark count as 800; if it has been posted for a day or longer, the downloader will normally calculate the average daily bookmark count as the bookmark count divided by the number of days since posting.

**Tips:**

The bookmark count range and the average daily bookmark count are two independent and complementary filter conditions. As long as a work meets either of these two conditions, it will be crawled.

The average daily bookmark count is suitable as a supplementary method for filtering recently posted works. It is not suitable for filtering works posted a long time ago, because the longer a work has been posted, the lower its average daily bookmark count.

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

You can set the width and height conditions of the images you want to download, and the downloader will not download images that do not meet these conditions.

You can set the value and the comparison method for width and height separately.

**Tips:**

- The default value of both width and height is 0, which means no limit.
- Selecting `and` means both the width and the height of the image must meet the width and height conditions you set.
- Selecting `or` means the image will be kept as long as either its width or its height meets the requirement.

**Working details:**

For single-image works (works with only one image), the downloader checks the width and height when crawling.

For multi-image works, the downloader does not check when crawling, but waits until before downloading each image to check. This is because the width and height of each image in a multi-image work may differ, but when crawling only the width and height data of the first image is available, so it cannot be checked during crawling.

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

*The description of this setting is exactly the same as the description in the downloader.*

You can set it to download only images with a specified shape:

Horizontal, vertical, and square.

If you need more precise conditions, you can also set the aspect ratio manually.

Aspect ratio:

The aspect ratio is the number you get by dividing the width by the height. When the aspect ratio is less than 1, the image is vertical. When the aspect ratio is greater than 1, the image is horizontal. The larger the aspect ratio, the more elongated the image.

Example: if you want to download images with an aspect ratio of 16:9 or wider, set the aspect ratio to >= 1.78.

How it works:

For single image works (works that contain only one image), the downloader checks the shape of the image while crawling;

For multi-image works, the downloader does not check while crawling. Instead, it checks just before downloading each image. This is because the width and height of each image in a multi-image work may differ, but while crawling only the width and height of the first image are available, so it cannot check at that time.

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

*The description of this setting is exactly the same as the description in the downloader.*

You can enter an ID to crawl works with IDs larger than it (new works) or smaller than it (old works).

You can set the ID range separately for different work types:

- Image works: including illustrations, manga and Ugoira

- Novels

- Novel series

- Bookmark ID (image works)

- Bookmark ID (novels)

About "Bookmark ID":

This is designed for filtering newly added bookmarks on your bookmarks page.

On the bookmarks page, works are not ordered by work ID but by the time you added them to your bookmarks; the most recently bookmarked works are shown first.

Each of your bookmarks has a Bookmark ID, which identifies its position on the bookmarks page. So if you want to download "the bookmarks added after this one", you need to filter by Bookmark ID.

How do you get the Bookmark ID of a specific work? One way is:

- Hover over this work and click the download button to download it on its own

- Click the "Export results" button in the download area

- Open the exported JSON file with a text editor; the number after "bmkId" is its Bookmark ID.

Note:

A bookmark ID only exists for works you have already bookmarked, so the downloader does not check the bookmark ID setting for works you have not bookmarked.

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

You can download only the works that were posted within a certain time range.

**Usage examples:**

- If you want to download works posted after a certain time, set "Start time" to that time, and set "End time" to a time in the future.
- If you want to download works posted before a certain time, set "Start time" to a time in the past, and set "End time" to that time.
- If you want to download works posted within a specific period (such as one year or one month), set both the start time and the end time.

**How to enter the time:**

You can click the icon on the right side of the input box to use the time and date picker provided by the browser, or click the input box and enter the numbers manually, or use the "Past", "Now" and "Future" buttons to set the time quickly.

**Note:** When you enter it manually, the complete time and date must be included. As shown in the image below, the value on the left is wrong because it does not include the time:

![](../../template/en/images/20250910_012836.png)

?> The first illustration on pixiv is https://www.pixiv.net/artworks/20 , and its posting time is `2007-09-09T13:14:07+00:00`

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
