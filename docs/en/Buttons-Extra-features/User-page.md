## Save user avatar

<button id="saveUserAvatar" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_保存用户头像">Save user avatar</span><span class="ripple"></span></button>


The downloader saves the user's avatar (full-size image) to the download directory.

![](../images/20250907_015845.png)

## Save user avatar as icon

<button id="saveUserAvatarAsIcon" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" data-xztitle="_保存用户头像为图标说明" title="Save user avatar as icon"><span data-xztext="_保存用户头像为图标">Save user avatar as icon</span><span class="ripple"></span></button>


The downloader generates a 256x256 pixel ico file from the user's avatar and saves it to the download directory.

![](../images/20250907_015910.png)

?> The ico file can be set as a folder icon, so you can use the user's avatar as the icon for their folder.

## Save user cover

<button id="saveUserCoverImage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_保存用户封面">Save user cover</span><span class="ripple"></span></button>


The downloader saves the cover image from the user's homepage to the download directory.

![](../images/20250907_020727.png)

?> Some users may not have set a cover image, in which case this button has no effect.

## Bookmark all works on this page

<button id="bookmarkAllWorksOnPage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_收藏本页面的所有作品">Bookmark all works on this page</span><span class="ripple"></span></button>

The downloader crawls all works on the current page and automatically adds them to your bookmarks.

**Notes:**
- This feature works on both image and novel category pages.
- The downloader only crawls the current page (one page only), not subsequent pages.
- When using this feature to add bookmarks, whether they are public or tagged follows the settings in [Downloader's bookmark feature (✩)](/en/Settings-More-Enhance?flag=34).
- This feature does not apply filter conditions. Even if you set a bookmark count filter, works below the threshold will still be bookmarked. If you want to apply filters, use the regular crawl and download process with the [Bookmark works after downloading](/en/Settings-Download/Download-behavior?id=Bookmark-Works-After-Downloading) feature instead.

When using this feature, the button displays progress information. The downloader first shows the progress of crawling works, then the progress of adding bookmarks. For example:

<button id="bookmarkAllWorksOnPage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" disabled="disabled"><span data-xztext="_收藏本页面的所有作品">Get data 8 / 48</span><span class="ripple"></span></button>

<button id="bookmarkAllWorksOnPage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" disabled="disabled"><span data-xztext="_收藏本页面的所有作品">Add bookmark 4 / 48</span><span class="ripple"></span></button>
