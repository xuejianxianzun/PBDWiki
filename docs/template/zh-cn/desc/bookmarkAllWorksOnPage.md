下载器会抓取当前页面里的所有作品，然后自动添加收藏。

**说明：**
- 这个功能在图片和小说的分类页面里都可以使用。
- 下载器只会抓取当前页面（仅 1 页），不会抓取后续页面。
- 使用此功能添加收藏时，是否公开、是否附带标签，遵从 [setting:88] 设置。
- 使用此功能时，下载器不会应用过滤条件。假如你设置了收藏数量，即使有些作品的收藏数量低于要求，下载器依然会收藏它们。如果你希望应用过滤条件，那么不应该使用此功能，而是应该正常抓取和下载作品，并启用 [setting:53] 功能。

当你使用这个功能时，按钮上会显示进度信息。下载器会先显示抓取作品的进度，然后显示添加收藏的进度。例如：

<button id="bookmarkAllWorksOnPage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" disabled="disabled"><span data-xztext="_收藏本页面的所有作品">Get data 8 / 48</span><span class="ripple"></span></button>

<button id="bookmarkAllWorksOnPage" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand" disabled="disabled"><span data-xztext="_收藏本页面的所有作品">Add bookmark 4 / 48</span><span class="ripple"></span></button>
