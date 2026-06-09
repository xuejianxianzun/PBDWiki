## Manage download records

<div class="option settingsPanel_optionCard new" data-no="62" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-records?flag=62" target="_blank" class="settingNameStyle" data-xztext="_管理下载记录" data-bind-click="true">Manage download <span class="key">records</span></a>
  <button type="button" class="textButton gray1 showMsgBtn" data-title="_管理下载记录" data-msg="_管理下载记录的提示" data-xztext="_帮助">Help</button>
  <div class="optionLine">
    <button type="button" class="textButton fireEvent" id="exportDownloadRecord" data-event="exportDownloadRecord" data-xztext="_导出">Export</button>
    <button type="button" class="textButton fireEvent" id="importDownloadRecord" data-event="importDownloadRecord" data-xztext="_导入">Import</button>
    <button type="button" class="textButton fireEvent" id="importDownloadRecordTXT" data-event="importDownloadRecordTXT" data-xztext="_导入txt">Import (TXT)</button>
    <button type="button" class="textButton fireEvent" id="clearDownloadRecord" data-event="clearDownloadRecord" data-xztext="_清除">Clear</button>
  </div></div>

The download records here refer to the downloader's own download records, not the browser's download history.

### How it works

Whenever the downloader successfully downloads a file, it saves a download record in the browser's IndexedDB database. This record includes the work ID, the work's modification date, and the filename used at download time. For example:

```json
{
  "id": "85290993_p0",
  "d": "2021/05/22/13/07/51",
  "n": "85290993_p0-小日向ほしみ-原创,女孩子,原创,waitress,过膝袜.jpg"
}
```

Some downloader features depend on download records, for example:
- Do not crawl already downloaded works
- Don't download duplicate files
- Show a border on downloaded works

**Additional notes:**
- The downloader's download records are stored in the browser's IndexedDB. Clearing the browser's download history does not affect the downloader's download records, so you can clear the browser's download history safely.
- Note: if you clear browser data, choosing "Cookies and other site data" will also clear the downloader's download records. If necessary, you can export the downloader's download records before clearing data, then import them afterward.

Also, this method is **not completely reliable**, because the downloader can query only its own download records and cannot check files on your disk.

- If a file already exists on your disk but the downloader has no record for it, the downloader will still download it.
- Conversely, if you previously downloaded a file and later deleted it from your disk, but the downloader still has a record for it, the downloader will not download it again unless you disable the relevant feature or change its strategy.

When these situations occur, features that rely on download records may make incorrect judgments, so you can disable those features if needed.

### Export

Click the export button to export the downloader's download records. This creates a JSON file and saves it directly to the browser's download directory.

This can be used for backup, for example before clearing browser data. You can also export records from one browser and import them into another.

?> The downloader displays export progress in the log at the top of the page. If there are many records, exporting takes some time, so wait until the downloader indicates that the export is complete.

### Import

Click the import button to select a previously exported download record file (JSON) and import it.

Importing does not clear existing download records, so you can import multiple files and the records will be merged together.

?> The downloader displays import progress in the log at the top of the page. If there are many records, importing takes some time, so wait until the downloader indicates that the import is complete.

### Import TXT

Some users want to import ID lists they created in TXT format, so I added this feature.

**Use cases:**
1. You downloaded many files before using this downloader, so they have no corresponding download records and you want to create records manually.
2. You accidentally cleared the downloader's download records and want to rebuild them to some extent.

You need to prepare a list of previously downloaded work IDs yourself (for example by generating a file list with shell commands) and save it as a TXT file, one ID per line, like this:

```
84334853_p0
84334853_p1
84334853_p2
140035432
27640268
```

**Notes:**
- Illustration and manga IDs must include the page number, because they may have multiple pages. Ugoira and novel IDs must not include the page number.
- After importing an ID list, the "Don't download duplicate files" feature is suitable only for the `Loose` strategy. Because this import contains only IDs and no other data, the `Strict` strategy cannot be used.

### Clear

Clear all download records saved by the downloader.

Even if you delete files from your disk, the downloader may still have their download records. When you try to download them again, the downloader will think they were already downloaded and will not download them again.

If this happens, you can clear the download records or disable the "Don't download duplicate files" setting.

?> The downloader displays clear progress in the log at the top of the page. If there are many records, clearing takes some time, so wait until the downloader indicates that it is complete.

## Don't download duplicate files

<div class="option settingsPanel_optionCard" data-no="63" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Download-records?flag=63" target="_blank" class="settingNameStyle" data-xztext="_不下载重复文件" data-bind-click="true">Don't download <span class="key">duplicate</span> files</a>
  <input type="checkbox" name="deduplication" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap noGrow" data-show="deduplication" style="display: none;">
    <span data-xztext="_策略">Strategy:</span>
    <input type="radio" name="dupliStrategy" id="dupliStrategy2" class="need_beautify radio" value="loose">
    <span class="beautify_radio" tabindex="0"></span>
    <label class="has_tip active" for="dupliStrategy2" data-xztip="_宽松模式说明" data-xztext="_宽松" data-tip="Judgment conditions: id, upload date of the work">Loose</label>
    <input type="radio" name="dupliStrategy" id="dupliStrategy1" class="need_beautify radio" value="strict" checked="">
    <span class="beautify_radio" tabindex="0"></span>
    <label class="has_tip" for="dupliStrategy1" data-xztip="_严格模式说明" data-xztext="_严格" data-tip="Judgment conditions: id, upload date, file name of the work">Strict</label>
  </div>
  <button type="button" class="textButton gray1 showMsgBtn" data-title="_不下载重复文件" data-msg="_不下载重复文件的提示" data-xztext="_帮助">Help</button>
</div>

This feature depends on the download records saved by the downloader itself.

If you enable this feature, the downloader will check the download records before downloading each file. If the file is a duplicate, the downloader will skip it.

When the downloader skips duplicate files, it displays a list of file IDs in the top log, for example:

<span class="log" style="color: inherit;"><span style="color:#d27e00">因为不下载重复文件，跳过了 1 个文件 : </span><br><a href="https://www.pixiv.net/n/25755517" target="_blank">25755517</a><br></span>

?> This feature takes effect during the download stage. If you want to skip already downloaded works during crawling, enable the crawl setting [Do not crawl already downloaded works](/en/Settings-Crawl?id=do-not-crawl-already-downloaded-works).

### Loose strategy

Checks only 2 conditions: the work ID and the modification date.

It does not check whether the filename is the same.

### Strict strategy

Checks all 3 conditions: the work ID, the modification date, and the filename used at download time.

If the current file has a download record and all three conditions match exactly, it is considered a duplicate file.

### Notes

If a file is skipped, some related tasks will also be skipped, for example:
- Saving work metadata
- Saving work descriptions
- Downloading novel cover images
- Downloading embedded images in novels

However, the "Bookmark works after downloading" feature is not affected.

