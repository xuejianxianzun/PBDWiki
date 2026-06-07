## Save the metadata of the work

<div class="option settingsPanel_optionCard" data-no="73" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Metadata?flag=73" target="_blank" class="has_tip settingNameStyle" data-xztip="_保存作品的元数据说明" data-tip="The downloader can generate a file with the same name (but different extension) for each work to save its metadata.&lt;br&gt;
You can choose which types of works to generate metadata files for, and you can choose TXT format or (and) JSON format.&lt;br&gt;
TXT format is easy to read but only contains relatively common data.&lt;br&gt;
JSON format is the downloader's internal data and saves more information." data-bind-click="true">
    <span data-xztext="_保存作品的元数据">Save the <span class="key">metadata</span> of the work</span>
    <span class="gray1"> ? </span>
  </a>
  <div class="optionLine">
    <span class="mb4" data-xztext="_作品类型带冒号">Work type: </span>
    <input type="checkbox" name="saveMetaType0" id="setSaveMetaType0" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setSaveMetaType0" data-xztext="_插画">Illustrations</label>
    <input type="checkbox" name="saveMetaType1" id="setSaveMetaType1" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setSaveMetaType1" data-xztext="_漫画">Manga</label>
    <input type="checkbox" name="saveMetaType2" id="setSaveMetaType2" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setSaveMetaType2" data-xztext="_动图">Ugoira</label>
    <input type="checkbox" name="saveMetaType3" id="setSaveMetaType3" class="need_beautify checkbox_common">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="setSaveMetaType3" data-xztext="_小说">Novels</label>
  </div>
  <div class="optionLine">
    <span class="mb4" data-xztext="_文件格式">File format: </span>
    <input type="checkbox" name="saveMetaFormatTXT" id="saveMetaFormatTXT" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="saveMetaFormatTXT" class="active"> TXT </label>
    <input type="checkbox" name="saveMetaFormatJSON" id="saveMetaFormatJSON" class="need_beautify checkbox_common" checked="">
    <span class="beautify_checkbox" tabindex="0"></span>
    <label for="saveMetaFormatJSON"> JSON </label>
  </div>
</div>

## Save work description

<div class="option settingsPanel_optionCard" data-no="74" data-pin-bound="true" style="display: flex;">
  <a href="http://localhost:3000/#/en/Settings-Download/Metadata?flag=74" target="_blank" class="has_tip settingNameStyle" data-xztip="_保存作品简介的说明" data-tip="Create a TXT file to save the work description" data-bind-click="true">
    <span data-xztext="_保存作品的简介">Save work <span class="key">description</span></span>
    <span class="gray1"> ? </span>
  </a>
  <input type="checkbox" name="saveWorkDescription" class="need_beautify checkbox_switch">
  <span class="beautify_switch" tabindex="0"></span>
  <div class="subOptionWrap flexBasis100" data-show="saveWorkDescription" style="display: none;">
    <div class="optionLine">
      <label for="saveEachDescription" data-xztext="_每个作品分别保存" class="has_tip active" data-xztip="_简介的Links标记" data-tip="Save each work's description in a separate TXT file.&lt;br&gt;If the work description contains hyperlinks, the downloader will add a 'links' tag at the end of the file name">Save each work separately</label>
      <span class="gray1"> ? &nbsp;</span>
      <input type="checkbox" name="saveEachDescription" id="saveEachDescription" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
    <div class="optionLine">
      <label for="summarizeDescription" data-xztext="_汇总到一个文件">Summarize to one file</label>
      <input type="checkbox" name="summarizeDescription" id="summarizeDescription" class="need_beautify checkbox_switch">
      <span class="beautify_switch" tabindex="0"></span>
    </div>
  </div>
</div>

