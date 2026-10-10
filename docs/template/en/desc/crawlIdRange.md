Clicking this button displays two input boxes sequentially. You can set an ID range for the downloader to crawl, e.g., `10000` to `20000`.

First, enter the starting ID:

<div class="XZInputWrap" id="input1757091219116"><p class="XZInputInstruction">You can set a work ID range to crawl all works within it (including start and end IDs).<br>Note: If a single task produces too many crawl results, it may cause the page to crash.<br>If you need to crawl many IDs, consider splitting them into multiple tasks. I recommend crawling no more than 100,000 IDs per batch.<br><br>Since this tab displays images, entered IDs will be treated as image work IDs.<br><br>Enter the starting ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="10000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>Submit</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>Cancel</span>
      <span class="ripple"></span>
    </button></div></div>

Then, enter the ending ID:

<div class="XZInputWrap" id="input1757091349171"><p class="XZInputInstruction">Enter the ending ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="20000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>Submit</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>Cancel</span>
      <span class="ripple"></span>
    </button></div></div>

Click the "Submit" button, and the downloader will crawl these works (including start and end IDs). You can check the crawling progress in the top log.

?> You cannot specify the work type; the downloader determines it based on the current page. On the novel homepage [https://www.pixiv.net/novel/](https://www.pixiv.net/novel/), entered IDs are treated as novel work IDs. On other homepages, they are treated as image work IDs.

**Tip for Large-Scale Crawling:**

As the number of crawled works increases, memory usage grows, and browser network request handling slows down. Avoid crawling too many works in one task.

If you need to crawl many works, split them into multiple tasks and crawl sequentially.
