## Bookmark status

<div class="option settingsPanel_optionCard" data-no="9" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=9" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_收藏状态"><span class="key">Bookmark</span> status</span>
  </a>
  <input type="checkbox" name="downNotBookmarked" id="setDownNotBookmarked" class="need_beautify checkbox_common" checked="">
  <span class="beautify_checkbox" tabindex="0"></span>
  <label for="setDownNotBookmarked" data-xztext="_未收藏" class="active">Not bookmarked</label>
  <input type="checkbox" name="downBookmarked" id="setDownBookmarked" class="need_beautify checkbox_common" checked="">
  <span class="beautify_checkbox" tabindex="0"></span>
  <label for="setDownBookmarked" data-xztext="_已收藏" class="active">Bookmarked</label>
</div>

## Number of bookmarks

<div class="option settingsPanel_optionCard" data-no="10" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=10" target="_blank" class="has_tip settingNameStyle" data-xztip="_设置收藏数量的提示" data-tip="If the number of bookmarks of the work is less than the set number, the work will not be downloaded." data-bind-click="true">
    <span data-xztext="_收藏数量">Number of <span class="key">bookmarks</span></span>
    <span class="gray1"> ? </span>
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
      <label for="BMKNumAverageSwitch" class="has_tip" data-xztip="_日均收藏数量的提示" data-tip="You can set the average daily bookmarks number of works. Works that meet the conditions will be downloaded.">
        <span data-xztext="_满足日均收藏数量条件">Meet the average daily bookmarks number condition</span>
        <span class="gray1"> ? </span>
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

## Width and height

<div class="option settingsPanel_optionCard" data-no="11" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=11" target="_blank" class="has_tip settingNameStyle" data-xztip="_筛选宽高的提示文字" data-tip="Please type the minimum width and minimum height. Will not download images that do not meet the requirements" data-bind-click="true">
    <span data-xztext="_图片的宽高"><span class="key">Width</span> and height</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="setWHSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="setWHSwitch" style="display: inline-flex;">
    <div class="optionLine">
      <span data-xztext="_宽度">Width</span>
      <input type="radio" name="widthComparison" id="widthComparison1" class="need_beautify radio" value="&gt;=" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison1" class="active">&gt;=</label>
      <input type="radio" name="widthComparison" id="widthComparison2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison2">=</label>
      <input type="radio" name="widthComparison" id="widthComparison3" class="need_beautify radio" value="&lt;=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="widthComparison3">&lt;=</label>
      <input type="text" name="setWidth" class="setinput_style blue" value="0">
    </div>
    <div class="optionLine">
      <input type="radio" name="setWidthAndOr" id="setWidth_AndOr1" class="need_beautify radio" value="&amp;" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="setWidth_AndOr1" data-xztext="_并且" class="active"> and </label>
      <input type="radio" name="setWidthAndOr" id="setWidth_AndOr2" class="need_beautify radio" value="|">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="setWidth_AndOr2" data-xztext="_或者"> or </label>
    </div>
    <div class="optionLine">
      <span data-xztext="_高度">height</span>
      <input type="radio" name="heightComparison" id="heightComparison1" class="need_beautify radio" value="&gt;=" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison1" class="active">&gt;=</label>
      <input type="radio" name="heightComparison" id="heightComparison2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison2">=</label>
      <input type="radio" name="heightComparison" id="heightComparison3" class="need_beautify radio" value="&lt;=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="heightComparison3">&lt;=</label>
      <input type="text" name="setHeight" class="setinput_style blue" value="0">
    </div>
  </div>
</div>

## Aspect ratio

<div class="option settingsPanel_optionCard" data-no="12" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=12" target="_blank" class="has_tip settingNameStyle" data-xztip="_设置宽高比例Title" data-tip="Set the aspect ratio, or manually type the aspect ratio" data-bind-click="true">
    <span data-xztext="_图片的宽高比例">Aspect <span class="key">ratio</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="ratioSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="ratioSwitch" style="display: none;">
    <input type="radio" name="ratio" id="ratio1" class="need_beautify radio" value="horizontal">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="ratio1" data-xztext="_横图" class="active">Horizontal</label>
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
      <span class="gray1"> ? </span>
    </span>
    <!-- 这里使用了一个不可见的开关 userSetChecked，用来根据 radio 的值来控制子选项的显示或隐藏 -->
    <input type="checkbox" name="userSetChecked" class="need_beautify checkbox_switch" style="display: none">
    <span class="beautify_switch" tabindex="0" style="display: none"></span>
    <div class="subOptionWrap" data-show="userSetChecked" style="display: none;">
      <input type="radio" name="userRatioLimit" id="userRatioLimit1" class="need_beautify radio" value="&gt;=" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit1" class="active">&gt;=</label>
      <input type="radio" name="userRatioLimit" id="userRatioLimit2" class="need_beautify radio" value="=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit2">=</label>
      <input type="radio" name="userRatioLimit" id="userRatioLimit3" class="need_beautify radio" value="&lt;=">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="userRatioLimit3">&lt;=</label>
      <input type="text" name="userRatio" class="setinput_style blue" value="1.4">
    </div>
  </div>
</div>

## ID range

<div class="option settingsPanel_optionCard" data-no="13" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=13" target="_blank" class="has_tip settingNameStyle" data-xztip="_设置id范围提示" data-tip="You can enter a work ID to crawl works with IDs larger than it (new works) or smaller than it (old works)" data-bind-click="true">
    <span data-xztext="_id范围"><span class="key">ID</span> range</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="idRangeSwitch" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="idRangeSwitch" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_图像作品">Image works</span>
      <input type="radio" name="idRangeComparisonForImageWorks" id="idRangeComparisonForImageWorks1" class="need_beautify radio" value="&gt;" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForImageWorks1" class="active">&gt;</label>
      <input type="radio" name="idRangeComparisonForImageWorks" id="idRangeComparisonForImageWorks2" class="need_beautify radio" value="&lt;">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForImageWorks2">&lt;</label>
      <input type="text" name="idRangeValueForImageWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_小说">Novels</span>
      <input type="radio" name="idRangeComparisonForNovelWorks" id="idRangeComparisonForNovelWorks1" class="need_beautify radio" value="&gt;" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelWorks1" class="active">&gt;</label>
      <input type="radio" name="idRangeComparisonForNovelWorks" id="idRangeComparisonForNovelWorks2" class="need_beautify radio" value="&lt;">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelWorks2">&lt;</label>
      <input type="text" name="idRangeValueForNovelWorks" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
    <div class="optionLine">
      <span data-xztext="_系列小说">Novel series</span>
      <input type="radio" name="idRangeComparisonForNovelSeries" id="idRangeComparisonForNovelSeries1" class="need_beautify radio" value="&gt;" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelSeries1" class="active">&gt;</label>
      <input type="radio" name="idRangeComparisonForNovelSeries" id="idRangeComparisonForNovelSeries2" class="need_beautify radio" value="&lt;">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="idRangeComparisonForNovelSeries2">&lt;</label>
      <input type="text" name="idRangeValueForNovelSeries" class="setinput_style w100 blue" value="0" placeholder="0">
    </div>
  </div>
</div>

## Posting time

<div class="option settingsPanel_optionCard" data-no="14" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Crawl/Work-data?flag=14" target="_blank" class="has_tip settingNameStyle" data-xztip="_设置投稿时间提示" data-tip="You can download works posted in a specified period of time" data-bind-click="true">
    <span data-xztext="_投稿时间">Posting <span class="key">time</span></span>
    <span class="gray1"> ? </span>
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

