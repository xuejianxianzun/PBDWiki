## Save the ugoira work as

<div class="option settingsPanel_optionCard" data-no="65" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Download/Ugoira?flag=65" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_动图保存格式">Save the <span class="key">ugoira</span> work as</span>
  </a>

  <div class="subOptionWrap flexBasis100" style="display: inline-flex">
    <div class="optionLine">
      <input type="checkbox" name="ugoiraSaveAsWebP" id="ugoiraSaveAsWebP" class="need_beautify checkbox_common" checked="">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsWebP" data-xztext="_webp图片" class="active">WebP image</label>
      <input type="checkbox" name="ugoiraSaveAsWebM" id="ugoiraSaveAsWebM" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsWebM" data-xztext="_webmVideo">WebM video</label>
      <input type="checkbox" name="ugoiraSaveAsGIF" id="ugoiraSaveAsGIF" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsGIF" data-xztext="_gif图片">GIF image</label>
      <input type="checkbox" name="ugoiraSaveAsAPNG" id="ugoiraSaveAsAPNG" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsAPNG" data-xztext="_apng图片">APNG image</label>
      <input type="checkbox" name="ugoiraSaveAsZIP" id="ugoiraSaveAsZIP" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsZIP" data-xztext="_zip文件">ZIP file</label>
      <input type="checkbox" name="ugoiraSaveAsUgoira" id="ugoiraSaveAsUgoira" class="need_beautify checkbox_common">
      <span class="beautify_checkbox" tabindex="0"></span>
      <label for="ugoiraSaveAsUgoira" data-xztext="_Ugoira文件">Ugoira file</label>
    </div>
    <div class="optionLine">
      <span data-xztext="_WebP图像质量">WebP image quality</span>
      <input type="radio" name="animatedWebPQuality" id="webpUgoiraQuality0" class="need_beautify radio" value="lossy" checked="">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="webpUgoiraQuality0" data-xztext="_有损" class="active">Lossy</label>
      <input type="radio" name="animatedWebPQuality" id="webpUgoiraQuality1" class="need_beautify radio" value="lossless">
      <span class="beautify_radio" tabindex="0"></span>
      <label for="webpUgoiraQuality1" data-xztext="_无损">Lossless</label>
    </div>
    <div class="optionLine">
      <label for="saveThumbnailForUgoira" data-xztext="_为动图保存一张缩略图">Save a thumbnail for Ugoira</label>
      <input type="checkbox" name="saveThumbnailForUgoira" id="saveThumbnailForUgoira" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
  </div>
</div>

The downloader can save Ugoira in multiple formats, and you can select multiple formats at the same time as needed.

**Format list:**

- WebP image: lossy or lossless compression can be selected. Compared with other image formats, it has the smallest file size at the same image quality. Recommended.

- WebM video: lossy compression. It is a video file and needs to be opened with a video player.

- GIF image: lossy compression. The advantage is good compatibility; the disadvantages are the worst image quality and a relatively large file size. Not recommended.

- APNG image: lossless compression. The disadvantages are the largest file size and the longest conversion time.

- ZIP file: lossless. It is the source file of the Ugoira, containing multiple static images, and the downloader adds a JSON file inside it to save the metadata of the animation.

- Ugoira file: lossless. It is actually a ZIP file, only with the .ugoira extension.

**Sub-options:**

- WebP image quality: you can set the quality of WebP images. The default is high-quality lossy compression. You can also change it to lossless compression.

- Save a thumbnail for the Ugoira: when downloading Ugoira, save a static thumbnail file of it.

**Recommended formats:**

I recommend using WebP images first, because it has the smallest file size at the same image quality. The disadvantage is that some older image viewers may not support viewing animated WebP images.

In addition, for Windows users I also highly recommend the Ugoira file. You can install [BandiView](https://www.bandisoft.com/bandiview/) to play .ugoira files (the free version is enough). In this case the Ugoira file has many advantages: it is the original file, lossless, has animation effects, requires no conversion, and has a small file size. But other systems may not have similar software.

**File size of each format:**

I downloaded 1000 recent Ugoira works for testing. Below is the average file size of each format, for reference only:

- ZIP/Ugoira: 9MB

- WebP: 7 MB (lossy compression) or 35 MB (lossless compression)

- WebM: 10 MB

- GIF: 20 MB

- APNG: 48 MB

Sorted from smallest to largest: WebP (lossy) < ZIP/Ugoira < WebM < GIF < WebP (lossless) < APNG.

**Showing thumbnails in File Explorer:**

This part only applies to Windows. With some settings, you can view thumbnails of all Ugoira formats in File Explorer.

- GIF image: the system supports showing its thumbnails natively.

- WebP image: install [BandiView](https://www.bandisoft.com/bandiview/), then press F5 to open its settings, and select the WebP format in the "Thumbnail Preview" setting under "Context Menu", to show thumbnails of animated WebP images.

- WebM video: install [K-Lite Codec Pack](https://www.codecguide.com/download_k-lite_codec_pack_standard.htm) to show thumbnails of WebM videos.

- APNG image, ZIP file, Ugoira file: add the extensions of these formats in Icaros to show their thumbnails. If you have installed K-Lite Codec Pack, it should include Icaros, and you can find it by searching in the Start menu. If you cannot find it, you can also install [Icaros](https://github.com/Xanashi/Icaros/releases) separately. Run Icaros, enable its thumbnail feature, and add `;apng;zip;ugoira` at the end of the file type list, or drag files of the corresponding type into the Icaros window to add them.

**Tips:**

- The default format is WebP image (lossy).

- Saving Ugoira as ZIP or Ugoira format does not require conversion, so it is very fast. All other formats require conversion.

- Converting the Ugoira format takes some time, which may range from a few seconds to a few minutes, depending on the original resolution and file size of the Ugoira, and the target format of the conversion.

- When converting Ugoira, the progress bar of the downloader may not change. This is normal, because the downloader is waiting for the Ugoira conversion to complete.

- The WebM video generated by Firefox is smaller than the WebM video generated by Chrome; its average file size is about 40% of the latter, and the bit rate is also lower. This is because the internal VideoEncoder of the two browsers is different.

## How many animations are converted at the same time

<div class="option settingsPanel_optionCard" data-no="66" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Download/Ugoira?flag=66" target="_blank" class="has_tip settingNameStyle" data-xztip="_同时转换多少个动图的说明" data-tip="Converting multiple animations at the same time will increase resource consumption.&lt;br&gt;
It is recommended not to exceed 3." data-bind-click="true">
    <span data-xztext="_同时转换多少个动图">How many animations are <span class="key">converted</span> at the same time</span>
    <span class="gray"> ? </span>
  </a>
  <input type="text" name="convertUgoiraThread" class="setinput_style blue" value="1">
</div>

The default value is `1`.

**Tips:**

- Converting Ugoira uses quite a lot of CPU and memory.
- Converting multiple Ugoira simultaneously increases resource usage. If a page uses too much memory, it may crash, so this value should not be set too high. It is recommended not to exceed `3`.
- The number of simultaneous Ugoira conversions will not exceed the number of simultaneous downloads. If the downloader downloads 3 files simultaneously, at most 3 Ugoira will be converted simultaneously.
