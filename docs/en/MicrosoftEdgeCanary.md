# Installing on Microsoft Edge Canary Browser

Video: https://www.youtube.com/shorts/ignhT72ybRA

## Installation Steps

Install the Microsoft Edge Canary browser from Google Play:

![](./images/20250827_221754.png)

*Currently, the stable version of Microsoft Edge does not support installing extensions, so you need to install the Canary version.*

After installation, open the menu, go to **Settings** > **About Microsoft Edge**, and tap the version number multiple times to enable developer options:

![](./images/20250828_013934.png)

Then return to the menu and tap **Developer Options** at the bottom:

![](./images/20250828_014037.png)

There are many features here. Tap **Extension install by crx**:

![](./images/20250827_230459.png)

Tap **Choose .crx file**:

![](./images/20250828_014137.png)

Select the downloader's crx file from the file manager and tap **OK**:

![](./images/20250828_014143.png)

!> You must use a crx file, not a zip file.

----------

**How to Obtain a crx File:**

You can download the crx file from the [releases page](https://github.com/xuejianxianzun/PixivBatchDownloader/releases) and transfer it to your Android device:

![](./images/20250828_001142.png)

If no crx file is available, you can download the zip file, extract it to a folder, and then, on a PC browser's extension management page, select the folder to package it as a crx file. For example:

![](./images/20250828_014324.png)

----------

Then agree to add the extension:

![](./images/20250828_014410.png)

Afterward, from the Edge Canary browser's menu, tap **Extensions**, and you should see the extension:

![](./images/20250828_014617.png)

Open or refresh a pixiv.net page, and you should see the downloader's button on the right:

![](./images/20250827_231241.png)

You can now use the downloader. Most of its features are the same as on PC, allowing batch downloads on various pages.

### Notes

- Downloaded files are saved in the **Download** folder on your phone's storage. Edge Canary does not seem to support changing the download directory, so files can only be saved here.
- On PC, the downloader can create subfolders to save files, but this is not possible on Android. Edge Canary does not create subfolders (possibly due to system limitations), so files are saved directly in the Download folder.
- Since the browser does not create folders, only the last segment of the downloader's naming rule will take effect. For example, the default naming rule is `pixiv/{user}-{user_id}/{id}-{title}`, but only `{id}-{title}` will be applied. If you modify the naming rule, ensure the last segment includes `{id}`, which is the unique identifier for each file on pixiv, to avoid duplicate filenames for different IDs.
- On PC, the downloader overwrites old files when saving the same file again, but Edge Canary saves duplicate files with a number appended, for example:

![](./images/20250827_232639.png)

- On mobile web pages, some downloader features may be unavailable or affected, such as previewing works.
- If your device is in landscape mode (e.g., a tablet), try enabling desktop mode in the browser's menu to potentially improve the downloader's experience:

![](./images/20250828_014805.png)

Landscape effect on a phone:

![](./images/20250827_233618.jpg)