## Highlight following users

<div class="option settingsPanel_optionCard" data-no="86" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Other?flag=86" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_高亮关注的用户"><span class="key">Highlight</span> following users</span>
  </a>
  <input type="checkbox" name="highlightFollowingUsers" class="need_beautify checkbox_switch" checked="">
  <span class="beautify_switch" tabindex="0"></span>
</div>

The names of users you are following will be highlighted, allowing you to quickly see whether you are following a user.

The visual effect varies depending on the color mode of the Pixiv page.

In default (light) mode, usernames will have a yellow background:

![](../../template/publicImages/20250903_020510.png)

In night mode, usernames will be displayed in yellow:

![](../../template/publicImages/20250903_020520.png)

## Display a border on downloaded works

<div class="option settingsPanel_optionCard" data-no="87" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Other?flag=87" target="_blank" class="settingNameStyle" data-xztext="_在下载过的作品上显示边框" data-bind-click="true">Display a <span class="key">border</span> on downloaded works</a>
  <input type="checkbox" name="showBorderOnDownloadedWorks" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="showBorderOnDownloadedWorks" style="display: none;">
    <div class="optionLine">
      <span data-xztext="_宽度" class="mr4">Width</span>
      <input type="text" name="borderWidth" class="setinput_style blue w40" value="3">
      px
    </div>
    <div class="optionLine">
      <span data-xztext="_颜色" class="mr4">Color</span> (Hex)
      <input type="text" name="borderColor" class="setinput_style blue w80" id="borderColor" value="#ff4060">
    </div>
  </div>
</div>

This feature depends on the download records saved by the downloader itself.

If you want to see at a glance whether a work has already been downloaded, you can enable this setting.

The downloader will display a border on downloaded works. The default border is red, as shown below:

![](../../template/publicImages/20260426_231619.png)

The left one has not been downloaded, and the right one has.

This setting has 2 sub-options: you can set the border width and color. Below is the effect with a border width of `4` px and a color of `#91e2df`:

![](../../template/publicImages/20260426_231819.png)

Known issue:

To prevent the border from being covered or clipped by other elements, the downloader displays it inside the thumbnail area. Because of that, it covers the edge area. This usually does not matter for image works, but on some pages for novel works it may cover the text at the top:

![](../../template/publicImages/20260426_232332.png)

## Copy work info

<div class="option settingsPanel_optionCard" data-no="89" data-pin-bound="true" style="display: flex;">
  <a href="/#/en/Settings-Enhance/Other?flag=89" target="_blank" class="settingNameStyle" data-bind-click="true">
    <span data-xztext="_复制作品信息带高亮关键字"><span class="key">Copy</span> work info</span>
  </a>

  <div class="optionLine">
    <span data-xztext="_复制内容" class="mr4">Copy content</span>
    <input type="checkbox" name="copyFormatImage" id="setCopyFormatImage" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatImage">image/png</label>
    <input type="checkbox" name="copyFormatText" id="setCopyFormatText" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatText" class="active">text/plain</label>
    <input type="checkbox" name="copyFormatHtml" id="setCopyFormatHtml" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setCopyFormatHtml" class="active">text/html</label>
  </div>
  <div class="optionLine nowrap">
    <span class="mr4" data-xztext="_图片尺寸">Image size</span>
    <input type="radio" name="copyImageSize" id="copyImageSize1" class="need_beautify radio" value="original">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="copyImageSize1" data-xztext="_原图">Original</label>
    <input type="radio" name="copyImageSize" id="copyImageSize2" class="need_beautify radio" value="regular" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label for="copyImageSize2" data-xztext="_普通" class="active">Regular</label>
  </div>
  <div class="optionLine nowrap">
    <span data-xztext="_文本格式" class="mr4">Text format</span>
    <button type="button" class="gray textButton toggleArea" data-toggle-target="#copyWorkInfoFormatTip" data-for-no="89" data-xztext="_提示">Tip</button>
    <textarea class="centerPanelTextArea beautify_scrollbar" name="copyWorkInfoFormat" rows="5" placeholder="id: {id} title: {title} tags: {tags} user: {user} url: {url}"></textarea>
  </div>
  <p class="tip namingTipArea" id="copyWorkInfoFormatTip">
    <span data-xztext="_复制内容的格式的提示">You can set the format of the text content, which will affect the content copied in <span class="blue">text/plain</span> and <span class="blue">text/html</span> formats.
<br>
You can use all tags from the naming rule, or input custom characters, such as spaces, underscores, or descriptive text.<br>
You can press Enter to insert line breaks, and the downloader will keep the line breaks as you set them.<br>
Additionally, you can use these tags:</span>
    <br>
    <span class="blue name" data-bind-copy="true">{url}</span>
    <span data-xztext="_url标记的说明">This work's URL</span>
    <br>
  </p>
</div>

The downloader will display a copy button on the work thumbnail and within the work page. Clicking it allows you to copy the work's image and some data. You can paste it into other software to save or share with others. For example:

![](../../template/publicImages/20251012_033111.webp)

### Usable Scenarios

Overall, there are two methods:
- In some scenarios, the downloader displays a copy button; clicking it performs the copy.
- In some scenarios, there is no copy button; use the shortcut `Alt` + `C`.

Detailed explanations follow:

#### Copy Button on Thumbnails

![](../../template/publicImages/20251022_025758.webp)

Click the copy button to copy.

At this point, the downloader will only copy the first image of the work.

#### Copy Button Below the Image in the Work Page

![](../../template/en/images/20251022_025855.png)

Click the copy button to copy.

At this point, the downloader will only copy the first image of the work.

?> In the work page, you can press the shortcut `Alt` + `C` to use the copy function.

#### When Previewing Work Details

![](../../template/publicImages/20251022_030440.png)

Click the copy button to copy.

At this point, the downloader will only copy the first image of the work.

-----------

In the following usage scenarios, the downloader will copy the currently viewed image, rather than always the first one.

#### Copy Button on Thumbnail List in the Work Page

![](../../template/publicImages/20251022_025834.webp)

The downloader adds a thumbnail list on multi-image work pages. Click the copy button to copy.

The downloader will copy the image corresponding to this thumbnail, not fixed to the first one.

#### When Previewing a Work

Press the shortcut `Alt` + `C` to copy the currently viewed image.

#### When Long-Pressing the Right Mouse Button on a Work Thumbnail to View the Large Image

Press the shortcut `Alt` + `C` to copy the currently viewed image.

#### In the Image Viewer

![](../../template/publicImages/20251022_030735.png)

Click the copy button, or use the shortcut `Alt` + `C` to copy the currently viewed image.

### Copy Content

You can choose the content to copy based on your needs.

**Description of Each Format:**
- `image/png` copies the work's image. Not selected by default, because its priority is too high in some social software, causing `text/html` content to be ignored.
You can choose to copy the original image or the thumbnail.
- `text/plain` copies the work's text information. Almost all applications support pasting plain text content.
- `text/html` copies both the work's image and text information simultaneously. This is rich text format, containing both of the above. In the HTML-formatted text, the downloader adds hyperlinks to the work ID, URL, and author name, but many software remove the hyperlinks during pasting, retaining only the text, so there may be no hyperlinks after pasting.

**Tips:**
- The focus of this feature in design is to copy both image and text content (`text/html`) simultaneously for sharing or archiving, but the actual effect depends on the target application. Some applications may not support this format or cannot display the image correctly.
- You can select multiple formats at the same time, meaning copying multiple contents. However, when pasting in an application, the application will only use one of them—the format with the highest priority. Other formats will be ignored.
- Priorities may differ across applications. This is unrelated to the downloader.
- For example: if you copy both `image/png` and `text/html` content, some applications will use the former, while others may use the latter. If the pasted content does not meet your expectations, you can deselect one of the formats.

### Image Size

You can choose the size of the image to copy:
- `Original`: Default value, the downloader will copy the original image.
- `Regular`: The downloader will copy the thumbnail (maximum size 1200px).

**Behavior When Copying Images:**

- The downloader copies the original image by default. However, some original images are quite large (for example, over 30 MiB), and may not paste properly in certain applications. If you encounter this issue, you can change the "Image Size" setting to `Regular`.
- For illustration and manga works, the downloader copies the first image or the one you're viewing, depending on the scenario.
- For Ugoira works, the downloader always copies its static thumbnail.
- For novel works, the downloader always copies its cover image.

### Text Format

You can set the format for the downloader to copy text content, which affects the generated `text/plain` and `text/html` content.

You can use all tags from the naming rule, or input custom characters, such as spaces, underscores, or tag names.

Additionally, you can use these tags:

- `{url}` the URL of this work
- `{n}` line break

-----------

The default text format rule is `id: {id}{n}title: {title}{n}tags: {tags}{n}url: {url}{n}user: {user}`, and the generated text content example is as follows:

id: [134304155](https://www.pixiv.net/i/134304155)

title: 黑塔

tags: #女の子,#崩壊スターレイル,#尻神様,#おっぱい,#裸足,#ヘルタ,#黑塔,#網タイツ,#AI生成作品,#崩坏星穹铁道

url: [https://www.pixiv.net/i/134304155](https://www.pixiv.net/i/134304155)

user: [光怪陆离](https://www.pixiv.net/users/95485582)

### Some Screenshots

I tested the pasting effects. Many PC software perform well, but Android applications do not, so I only recommend using this feature on PC.

#### Browser

Input areas on web pages can only paste plain text content by default, i.e., `text/plain`.

Some web applications may have targeted optimizations, for example, in Discord you can paste images `image/png`.

In Gmail, you can paste both image and text simultaneously, i.e., `text/html`, for example:

![](../../template/publicImages/20251012_032638.webp)

#### Microsoft Word

Word prioritizes `text/html` format content, then `image/png`, and finally `text/plain`. For example:

![](../../template/publicImages/20251009_172842.webp)

#### Telegram

Telegram does not support `text/html` format, so you cannot paste both image and text simultaneously in Telegram.

Other format priorities are: `image/png`, `text/plain`.

If you want to paste an image in Telegram, select the `image/png` format to paste the image:

![](../../template/publicImages/20251012_033232.png)

#### QQ

QQ's priority is: `image/png`, `text/html`, `text/plain`.

If you want to paste both image and text in QQ, select `text/html` and deselect `image/png`; otherwise, only the image will be pasted.

![](../../template/publicImages/20251012_033111.webp)

#### WeChat

WeChat has the same priority as QQ. You can paste both image and text simultaneously, but WeChat splits them during sending. For example:

![](../../template/publicImages/20251012_033032.png)

#### Android Applications

Some Android applications can paste `text/html` content, but the image may not display:

![](../../template/publicImages/20251022_033641.png)

If you want to send an image, select the `image/png` format and deselect other formats. This way, the downloader only copies the image, which can be pasted in some applications.

Some Android applications can paste images copied by the downloader, such as Telegram and WeChat. But in some applications, images cannot be pasted, such as QQ.
