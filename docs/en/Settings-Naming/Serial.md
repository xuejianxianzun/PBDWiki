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

