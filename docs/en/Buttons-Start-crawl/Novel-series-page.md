## Crawl series of novels

<button id="crawlSeriesNovel" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="primary" data-btn-intent="brand"><span data-xztext="_抓取系列小说">Crawl series of novels</span><span class="ripple"></span></button>


Crawls all novels in the series.

?> You cannot set the crawl quantity; the downloader always crawls all novels.

## Merge series of novels

<button id="mergeSeriesNovel" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="secondary" data-btn-intent="brand"><span data-xztext="_合并系列小说">Merge series of novels</span><span class="ripple"></span></button>



Crawls all novels in the series and merges them into a single file.

**Tips:**

- Based on the [Novel Save Format](/en/Settings-More-Download?id=save-the-novel-as) setting, the downloader generates a TXT or EPUB file.
- The generated file name follows a **fixed format**: `Series Name + Username + Series ID + Tags of the First Novel`, and it is saved directly to the browser's download directory. This is because the file contains multiple novels, so it cannot use naming rules designed for single files. I plan to add a naming rule for this file in the future.
- When merging a novel series, the downloader panel does not display a progress bar, but you can check some progress information in the log.

