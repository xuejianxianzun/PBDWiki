点击这个按钮之后，下载器会依次显示两个输入框。你可以设置一个 ID 范围让下载器抓取，例如 `10000` - `20000`。

先输入开始的 ID：

<div class="XZInputWrap" id="input1757091219116"><p class="XZInputInstruction">你可以设置一个作品 ID 范围，抓取此范围内的所有作品（包含开始和结束的 id）。<br>注意：如果一次任务中产生的抓取结果数量太多，可能会导致页面崩溃。<br>如果你需要抓取很多 ID，请考虑拆分成多个任务。我建议每批抓取的 ID 数量不要超过 100,000 个。<br><br>因为这个标签页展示的是图像，所以输入的 ID 会被视为图像作品的 ID。<br><br>请输入开始的 ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="10000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>提交</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>取消</span>
      <span class="ripple"></span>
    </button></div></div>

然后输入结束的 ID：

<div class="XZInputWrap" id="input1757091349171"><p class="XZInputInstruction">请输入结束的 ID: </p><div class="XZInputContainer"><input class="XZInput" placeholder="20000" type="text" value="" style="flex-basis: 400px;"><button class="XZInputButton hasRippleAnimation">
      <span>提交</span>
      <span class="ripple"></span>
    </button><button class="XZInputButton cancel hasRippleAnimation">
      <span>取消</span>
      <span class="ripple"></span>
    </button></div></div>

点击“提交”按钮，下载器就会抓取这些作品（包含开始和结束的 ID）。你可以在顶部日志里查看抓取进度。

?> 你不能指定作品的类型；下载器会依据当前页面自动决定作品类型。当你在小说的首页 [https://www.pixiv.net/novel/](https://www.pixiv.net/novel/) 使用这个功能时，下载器会把输入的 ID 视为小说作品的 ID。在其他首页里，下载器会把输入的 ID 视为图片作品的 ID。

**大量抓取时的提示：**

随着抓取到的作品数量增加，该页面使用的内存也会增加，而且浏览器对网络请求的处理也会逐渐变慢。所以不要在一次任务中抓取太多作品。

如果你要抓取很多作品，可以分割成多次任务，依次抓取。
