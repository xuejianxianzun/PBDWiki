## Default behavior when the downloader bookmarks a work (✩)

<div class="option settingsPanel_optionCard" data-no="88" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Bookmark?flag=88" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_下载器收藏作品时的默认行为">Default behavior when the downloader <span class="key">bookmarks</span> a work (✩)</span>
  </a>

  <div class="optionLine">
    <span data-xztext="_是否公开" class="mr4">Public</span>
    <input type="radio" name="restrict" id="restrict1" class="need_beautify radio" value="no" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="restrict1" data-xztext="_公开" class="active">Public</label>
    <input type="radio" name="restrict" id="restrict2" class="need_beautify radio" value="yes">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="restrict2" data-xztext="_不公开">Private</label>
  </div>
  <div class="optionLine">
    <span data-xztext="_是否添加标签" class="mr4">Whether to add tags</span>
    <input type="radio" name="widthTag" id="widthTag1" class="need_beautify radio" value="origin" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="widthTag1" data-xztext="_添加作品的原始标签" class="active">Add the work's original tags</label>
    <input type="radio" name="widthTag" id="widthTag2" class="need_beautify radio" value="transl">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="widthTag2" data-xztext="_添加翻译后的标签">Add the translated tags</label>
    <input type="radio" name="widthTag" id="widthTag3" class="need_beautify radio" value="none">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="widthTag3" data-xztext="_不添加">Do not add</label>
  </div>
</div>

You can use this setting to control the downloader's behavior when bookmarking works.

?> Pixiv's original bookmark button (heart-shaped) is not affected by this setting.

**Features affected by this setting:**

1. Quick bookmark button (☆) on work pages:

![](../../template/en/images/20250910_235924.png)

2. Quick bookmark button (☆) when previewing search results on search pages:

![](../../template/publicImages/20250903_234654.png)

3. Bookmarking a work with the `B` shortcut while previewing.
4. Bookmarking a work by clicking the (☆) button in the image viewer.
5. [Automatically bookmark works after downloading](/en/Settings-Download/Download-behavior?id=automatically-bookmark-works-after-downloading) feature.
6. "Bookmark all works on this page" feature in the downloader's "More" tab on user homepages and search pages.

**Features not affected by this setting:**

The "Add tags to uncategorized works" button on the bookmark page is unaffected. This feature always includes tags and automatically sets public or private status based on the work's prior bookmark status.

**Sub-options:**

When using features affected by this setting, you can configure:
- Whether to include the work's tags
- Whether to bookmark as public or private

The default is to add tags and bookmark publicly.

?> If a work has already been bookmarked, you can still bookmark it again. This will not change its bookmark time (and thus will not affect its order on the bookmark page), but it can update its public status and tag list. For example: if a work was previously set to public and had tags added, you can, if needed, change the settings to private with no tags and have the downloader bookmark it again.

## Bookmark panel

<div class="option settingsPanel_optionCard new" data-no="117" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Bookmark?flag=117" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_收藏面板">Bookmark <span class="key">panel</span></span>
  </a>

  <div class="optionLine">
    <label for="showBookmarkPanel" data-xztext="_手动收藏作品时显示收藏面板" class="active">Show the bookmark panel when bookmarking a work manually</label>
    <input type="checkbox" name="showBookmarkPanel" id="showBookmarkPanel" class="need_beautify checkbox_switch" checked="">
    <span class="beautify_switch" tabindex="0"></span>
  </div>
  <div class="optionLine">
    <label for="bookmarkPanelCommonTagsMax" data-xztext="_显示多少个常用标签">How many frequently used tags to show</label>
    <input type="text" name="bookmarkPanelCommonTagsMax" id="bookmarkPanelCommonTagsMax" class="setinput_style blue w50" value="30">
    <span class="gray">0 - 100</span>
  </div>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent borderButton" id="clearBookmarkPanelCommonTags" data-event="clearBookmarkPanelCommonTags" data-xztext="_清空常用的标签">Clear frequently used tags</button>
  </div>
  <span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
  </span>
</div>

*The description of this setting is exactly the same as the description in the downloader.*

When you bookmark a work manually with the downloader, the downloader can show the bookmark panel.

In the bookmark panel you can set whether the bookmark is public and which tags to use (the tags of the work, custom tags, frequently used tags), and then add the bookmark.

How many frequently used tags to show:

When you add a bookmark with the bookmark panel, the downloader saves the tags you used and shows them in the panel by how often they are used, so later you can use a tag just by clicking it. This is useful if you often set bookmark tags by hand.

You can set how many frequently used tags are shown at most. The minimum is 0: then the downloader does not show the frequently used tags area.

The bookmark panel can be shown in these cases:

- You click the downloader's bookmark button (✩);

- You bookmark the work with the shortcut key (B) while previewing a work or using the image viewer.

All of these actions add only 1 bookmark.

Note:

- You only need this feature if you often set bookmark tags by hand, or often use different public options.

- The bookmark panel is not shown when bookmarking works in bulk, for example with the "Automatically bookmark works after downloading" feature or the bookmark buttons in the "Extra features" area. That is because a bulk bookmark may add dozens or hundreds of bookmarks, which is not suitable for handling one by one. When bookmarking in bulk, you can set the default behavior in "Default behavior when the downloader bookmarks a work (✩)".
