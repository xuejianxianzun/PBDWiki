## Show larger thumbnails

<div class="option settingsPanel_optionCard" data-no="78" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnails?flag=78" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_显示更大的缩略图">Show <span class="key">larger</span> thumbnails</span>
  </a>
  <input type="checkbox" name="showLargerThumbnails" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

Pixiv's work thumbnails are small, typically 184 px in size. Here's a screenshot of the default situation:

![](../../template/publicImages/20250903_192559.webp)

Because thumbnails are small and lack detail, I often need to click to view the full image to decide if I like it.

Enabling this feature widens the page display area and increases thumbnail size to 250 px.

If the "Replace square thumbnails to show image aspect ratio" feature below is enabled, thumbnails will increase to 540 px, as shown below:

![](../../template/publicImages/20250903_192618.webp)

This makes images clearer and easier on the eyes, reducing fatigue.

?> The number of images displayed per row varies depending on screen resolution and DPI scaling.

## Replace square thumbnails to show image ratio

<div class="option settingsPanel_optionCard" data-no="79" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnails?flag=79" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_替换方形缩略图以显示图片比例">Replace square <span class="key">thumbnails</span> to show image ratio</span>
  </a>
  <input type="checkbox" name="replaceSquareThumb" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

Pixiv's thumbnails are 250 px square images, making it impossible to see the image's aspect ratio (horizontal or vertical) or its full content, as edges are cropped. For example:

![](../../template/publicImages/20220801_182750.jpg)

Enabling this feature replaces square thumbnails with 540 px thumbnails, showing the image's original aspect ratio and full content. For example:

![](../../template/publicImages/20220801_182801.jpg)

## Show thumbnail list on multi-image work pages

<div class="option settingsPanel_optionCard" data-no="80" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnails?flag=80" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_在多图作品页面里显示缩略图列表">Show <span class="key">thumbnail</span> list on multi-image work pages</span>
  </a>
  <input type="checkbox" name="displayThumbnailListOnMultiImageWorkPage" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

When on a **multi-image work** page (e.g., [121525173](https://www.pixiv.net/artworks/121525173)), the downloader can display thumbnails for each image. For example:

![](../../template/en/images/20260830_174125.png)

You can preview or download each image.

### Select some images to download

Some buttons are displayed at the top of the thumbnail list. If you only need to download some images of this work, you can use these buttons.

Click the `Manually select images` button to enter/exit manual selection mode. In manual selection mode, click an image to select it; click it again to deselect it.

After you finish selecting, click the `Download` button on the right side of this area to download the selected images.

?> Tip: If you click the `Download` button without selecting any images, the downloader will download all images.

### Enhanced features

When hovering over a thumbnail, you can use enhancement features, such as:

![](../../template/en/images/20260830_174439.webp)

These features include:
- Copy button (click it to copy the work info)
- Download button (clicking this button downloads only the image it belongs to)
- Preview work (you can still use shortcuts `C` to download a single image or `D` to download the entire work)
- View full image by long-pressing the right mouse button
- Clicking a thumbnail opens the image viewer, for example:

![](../../template/publicImages/20260830_174657.webp)

## Display images in grayscale

<div class="option settingsPanel_optionCard" data-no="81" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Thumbnails?flag=81" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_把图片显示为灰色">Display images in <span class="key">grayscale</span></span>
  </a>
  <input type="checkbox" name="imageToGray" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
</div>

This is a hidden setting.
