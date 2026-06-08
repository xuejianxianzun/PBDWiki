## Show larger thumbnails

<div class="option settingsPanel_optionCard" data-no="78" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Thumbnails?flag=78" target="_blank" class="has_tip settingNameStyle" data-xztip="_显示更大的缩略图的说明" data-tip="Pixiv's default thumbnails are relatively small, and the downloader can display larger thumbnails for easier preview.&lt;br&gt;This feature is not very stable, because Pixiv's code updates may cause this feature to partially fail." data-bind-click="true">
    <span data-xztext="_显示更大的缩略图">Show <span class="key">larger</span> thumbnails</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="showLargerThumbnails" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>


Pixiv's work thumbnails are small, typically 184 px in size. Here's a screenshot of the default situation:

![](../images/20250903_192559.webp)

Because thumbnails are small and lack detail, I often need to click to view the full image to decide if I like it.

Enabling this feature widens the page display area and increases thumbnail size to 250 px.

If the "Replace square thumbnails to show image aspect ratio" feature below is enabled, thumbnails will increase to 540 px, as shown below:

![](../images/20250903_192618.webp)

This makes images clearer and easier on the eyes, reducing fatigue.

?> The number of images displayed per row varies depending on screen resolution and DPI scaling.

## Replace square thumbnails to show image ratio

<div class="option settingsPanel_optionCard" data-no="79" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Thumbnails?flag=79" target="_blank" class="has_tip settingNameStyle" data-xztip="_替换方形缩略图以显示图片比例的说明" data-tip="Pixiv's thumbnails are square, so you can't see the whole picture or whether it's horizontal or vertical. &lt;br&gt;The downloader can display the full thumbnail to show the image ratio." data-bind-click="true">
    <span data-xztext="_替换方形缩略图以显示图片比例">Replace square <span class="key">thumbnails</span> to show image ratio</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="replaceSquareThumb" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>


Pixiv's thumbnails are 250 px square images, making it impossible to see the image's aspect ratio (horizontal or vertical) or its full content, as edges are cropped. For example:

![](../images/20220801_182750.jpg)

Enabling this feature replaces square thumbnails with 540 px thumbnails, showing the image's original aspect ratio and full content. For example:

![](../images/20220801_182801.jpg)

## Show thumbnail list on multi-image work pages

<div class="option settingsPanel_optionCard" data-no="80" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Thumbnails?flag=80" target="_blank" class="has_tip settingNameStyle" data-xztip="_在多图作品页面里显示缩略图列表的说明" data-tip="On a multi-image artwork page (/artworks/), the downloader can display a preview of each image." data-bind-click="true">
    <span data-xztext="_在多图作品页面里显示缩略图列表">Show <span class="key">thumbnail</span> list on multi-image work pages</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="displayThumbnailListOnMultiImageWorkPage" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>


When on a **multi-image work** page (e.g., [121525173](https://www.pixiv.net/artworks/121525173)), the downloader can display thumbnails for each image. For example:

![](../images/20250910_235702.webp)

You can preview or download each image.

When hovering over a thumbnail, you can use enhancement features, such as:

![](../images/20250903_230346.webp)

These features include:
- Preview work (you can still use shortcuts `C` to download a single image or `D` to download the entire work)
- View full image by long-pressing the right mouse button
- Show download button on thumbnails (clicking this button downloads only the specific image)
- Clicking a thumbnail opens the image viewer, for example:

![](../images/20250903_230239.webp)

## Display images in grayscale

<div class="option settingsPanel_optionCard" data-no="81" data-pin-bound="true">
  <a href="http://localhost:3000/#/en/Settings-Enhance/Thumbnails?flag=81" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_把图片显示为灰色">Display images in <span class="key">grayscale</span></span>
  </a>
  <input type="checkbox" name="imageToGray" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>



