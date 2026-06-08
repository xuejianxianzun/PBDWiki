## Serial number starting value

<div class="option settingsPanel_optionCard new" data-no="46" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Serial?flag=46" target="_blank" class="has_tip settingNameStyle" data-xztip="_序号起始值的说明" data-tip="Set whether the image serial number starts from 0 or from 1" data-bind-click="true">
    <span data-xztext="_序号起始值"><span class="key">Serial number</span> starting value</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="radio" name="serialNoStart" id="serialNoStart0" class="need_beautify radio" value="0" checked="">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="serialNoStart0" class="active"> 0 </label>
  <input type="radio" name="serialNoStart" id="serialNoStart1" class="need_beautify radio" value="1">
  <span class="beautify_radio" tabindex="0"></span>
  <label for="serialNoStart1"> 1 </label>
<span class="settingsPanel_newBadge" aria-hidden="true">
    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">
      <use xlink:href="#new"></use>
    </svg>
    </span></div>


You can choose whether image serial numbers start from `0` or from `1`.

By default, the downloader starts from `0`, because Pixiv image filenames also start from `p0`. If you want them to start from `1`, you can change this setting.

This setting affects naming tags that include serial numbers: `{id}` and `{p}`.

**Note:** If you change the serial number to start from `1` and also enable `Don't download duplicate files`, keep this in mind: the old download record for the same file may use `0`, while the new filename uses `1`, so the filenames will differ. In that case, the `Strict` strategy will download the file again, while the `Loose` strategy will not.

## The first image without a serial number

<div class="option settingsPanel_optionCard" data-no="47" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Serial?flag=47" target="_blank" class="has_tip settingNameStyle" data-xztip="_第一张图不带序号说明" data-tip="Remove the serial number of the first image of each work. For example 80036479_p0 becomes 80036479." data-bind-click="true">
    <span data-xztext="_第一张图不带序号">The first image without a <span class="key">serial number</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="noSerialNo" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="noSerialNo" style="display: none;">
    <input type="checkbox" name="noSerialNoForSingleImg" id="setNoSerialNoForSingleImg" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setNoSerialNoForSingleImg" data-xztext="_单图作品">Single image works</label>
    <input type="checkbox" name="noSerialNoForMultiImg" id="setNoSerialNoForMultiImg" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setNoSerialNoForMultiImg" data-xztext="_多图作品">Multi-image works</label>
    <input type="checkbox" name="noSerialNoForUgoira" id="setNoSerialNoForUgoira" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setNoSerialNoForUgoira" data-xztext="_动图" class="active">Ugoira</label>
  </div>
</div>


What is a sequence number? If you use the `{id}` naming tag, each work's ID will include a sequence number, such as:

```
80447108_p0
80447108_p1
80447108_p2
```

The `_p0`, `_p1`, `_p2` at the end are sequence numbers.

If you enable this option, the downloader will remove the sequence number from the **first image of each work**, resulting in:

```
// The sequence number 0 is removed from the first image
80447108
80447108_p1
80447108_p2
```

**Sub-options:**
- `Single-image works`: Remove the sequence number for single-image works.
- `Multi-image works`: Remove the sequence number for the first image of multi-image works.
- `Ugoira`: Remove the sequence number for Ugoira works.

?> The naming tag `{p}` also outputs sequence numbers, but as plain numbers `0`, `1`, `2`. This setting also applies to `{p}`, meaning it can remove the `0` output by `{p}`.

## Add 0 in front of the serial number

<div class="option settingsPanel_optionCard" data-no="48" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Naming/Serial?flag=48" target="_blank" class="has_tip settingNameStyle" data-xztip="_在序号前面填充0的说明" data-tip="This can solve the problem that some software cannot correctly sort files by file name." data-bind-click="true">
    <span data-xztext="_在序号前面填充0"><span class="key">Add 0</span> in front of the serial number</span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="zeroPadding" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap" data-show="zeroPadding" style="display: none;">
    <span data-xztext="_序号总长度">Total length of serial number</span>
    <input type="text" name="zeroPaddingLength" class="setinput_style blue" value="3">
  </div>
</div>



Illustrations and manga works may have multiple images, so their filenames include sequence numbers, such as:

```
0
1
2
3
...
10
11
12
...
```

By default, the downloader does not pad sequence numbers with zeros, but some software may sort filenames incorrectly. In such cases, padding with zeros is needed.

**Note:** If you don't encounter issues with "incorrect sorting by filename due to sequence numbers," you don't need to enable this setting.

This issue often occurs on Android systems, where many file managers may sort files incorrectly, like this:

```
0
1
11
12
...
2
20
21
...
3
30
...
```

This happens because these file managers sort filenames as strings, causing the issue.

By enabling this feature, the downloader will pad sequence numbers with zeros:

```
001
002
003
...
010
011
012
...
```

This resolves the sorting issue.

You can set the total length of the padded sequence number in the sub-option, with a default of 3.

?> A single illustration or manga work on Pixiv can have up to 200 images, so setting the length to 3 is the most appropriate.

