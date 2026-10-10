// 生成 wiki 里使用的设置项 html 与按钮 html
import { escapeAttr } from './util.js'

// ---------------- 通用小工具 ----------------

/** 安全地判断标签属性里是否已有某个属性（避免误匹配 data-xxx 之类） */
function hasAttr(attrs, name) {
  return new RegExp(`(?<![\\w-])${name}="`).test(attrs)
}

/** 合并多行标签、统一自闭合写法：<input ... /> → <input ...> */
export function normalizeTags(html) {
  return html.replace(/<[^<>]*>/g, (tag) => {
    let t = tag.replace(/\s+/g, ' ').replace(/\s*\/>$/, '>').replace(/\s+>$/, '>')
    // data-* 属性名统一为小写（浏览器的 dataset 写入行为）
    t = t.replace(/(\s)(data-[A-Za-z0-9-]*[A-Z][A-Za-z0-9-]*)=/g, (m, sp, name) => sp + name.toLowerCase() + '=')
    return t
  })
}

/** 属性值文本归一：去掉行首缩进（与现有内容一致） */
function normalizeText(text) {
  return String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .trim()
}

/** 布尔属性补全：checked → checked="" */
export function fixBooleanAttrs(html) {
  return html.replace(/(\s)(checked|selected|disabled|multiple|readonly)(?=\s|>)/g, '$1$2=""')
}

// ---------------- 各转换步骤 ----------------

/** 给含 data-xztip 的元素追加 has_tip 类和 data-tip 属性 */
function applyTips(html, langText, langIndex, report) {
  return html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)((?:[^>]*?)\bdata-xztip="([^"]+)"(?:[^>]*?))>/g,
    (m, tag, attrs, key) => {
      if (hasAttr(attrs, 'data-tip')) return m
      const text = langText[key]?.[langIndex]
      if (text === undefined) {
        report.missingKey(key)
        return m
      }
      let newAttrs = attrs
      if (hasAttr(attrs, 'class')) {
        newAttrs = newAttrs.replace(/(?<![\w-])class="/, 'class="has_tip ')
      } else {
        newAttrs = newAttrs.replace(/(?<![\w-])data-xztip="/, 'class="has_tip" data-xztip="')
      }
      return `<${tag}${newAttrs} data-tip="${escapeAttr(normalizeText(text))}">`
    }
  )
}

/** 填充空的 data-xztext 元素 */
function fillTexts(html, langText, langIndex, report) {
  return html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)((?:[^>]*?)\bdata-xztext="([^"]+)"(?:[^>]*?))>(\s*)<\/\1>/g,
    (m, tag, attrs, key) => {
      const text = langText[key]?.[langIndex]
      if (text === undefined) {
        report.missingKey(key)
        return m
      }
      return `<${tag}${attrs}>${text}</${tag}>`
    }
  )
}

/** data-xzplaceholder → placeholder；data-xztitle → title */
function applyPlaceholderAndTitle(html, langText, langIndex, report) {
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)((?:[^>]*?)\bdata-xzplaceholder="([^"]+)"(?:[^>]*?))>/g,
    (m, tag, attrs, key) => {
      if (hasAttr(attrs, 'placeholder')) return m
      const text = langText[key]?.[langIndex]
      if (text === undefined) {
        report.missingKey(key)
        return m
      }
      return `<${tag}${attrs} placeholder="${escapeAttr(normalizeText(text))}">`
    }
  )
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)((?:[^>]*?)\bdata-xztitle="([^"]+)"(?:[^>]*?))>/g,
    (m, tag, attrs, key) => {
      if (hasAttr(attrs, 'title')) return m
      const text = langText[key]?.[langIndex]
      if (text === undefined) {
        report.missingKey(key)
        return m
      }
      return `<${tag}${attrs} title="${escapeAttr(normalizeText(text))}">`
    }
  )
  return html
}

/** 被勾选的控件对应的 label 添加 active 类（复刻运行时的表单美化状态） */
function applyCheckedLabels(html) {
  return html.replace(/<label((?:[^>]*?)\bfor="([^"]+)"(?:[^>]*?))>/g, (m, attrs, forId) => {
    const inputRe = new RegExp(`<input(?:[^>]*?)id="${forId}"(?:[^>]*?)>`)
    const input = html.match(inputRe)
    const checked = input ? /(?<![\w-])checked(?:="")?(?=\s|>)/.test(input[0]) : false
    if (!checked) return m
    if (hasAttr(attrs, 'class')) {
      return `<label${attrs.replace(/(?<![\w-])class="([^"]*)"/, (m2, cls) => `class="${cls} active"`)}>`
    }
    return `<label${attrs} class="active">`
  })
}

/** 命名标记提示区域里的 .name 元素添加 data-bind-copy（复刻运行时的点击复制功能） */
function applyBindCopy(html) {
  return html.replace(
    /<p((?:[^>]*?)\bnamingTipArea\b(?:[^>]*?))>([\s\S]*?)<\/p>/g,
    (m, attrs, inner) => {
      const newInner = inner.replace(
        /<span class="blue name"/g,
        '<span class="blue name" data-bind-copy="true"'
      )
      return `<p${attrs}>${newInner}</p>`
    }
  )
}

/** 设置 settingNameStyle 链接的 href，并追加 data-bind-click */
function applyLink(html, href) {
  return html.replace(
    /<a((?:[^>]*?)\bclass="[^"]*settingNameStyle[^"]*"(?:[^>]*?))>/g,
    (m, attrs) => {
      let newAttrs = attrs
      if (hasAttr(attrs, 'href')) {
        newAttrs = newAttrs.replace(/(?<![\w-])href="[^"]*"/, `href="${href}"`)
      } else {
        newAttrs = newAttrs + ` href="${href}"`
      }
      if (!hasAttr(newAttrs, 'data-bind-click')) {
        newAttrs = newAttrs + ' data-bind-click="true"'
      }
      return `<a${newAttrs}>`
    }
  )
}

/** 删除帮助按钮（wiki 页面里已有说明文字，不再把帮助内容转成提示） */
function removeHelpButtons(html, report) {
  const btnRe = /\n[ \t]*<button[^>]*\bshowMsgBtn\b[^>]*>[\s\S]*?<\/button>/g
  const out = html.replace(btnRe, '')
  if (out !== html && /showMsgBtn/.test(out)) {
    report.extraHelpButton()
  }
  return out
}

/** subOptionWrap 的 display 依控制的开关是否 checked 来推导 */
function applySubOptionDisplay(html) {
  return html.replace(
    /<div((?:[^>]*?)\bclass="[^"]*subOptionWrap[^"]*"[^>]*?\bdata-show="([^"]+)"(?:[^>]*?))>/g,
    (m, attrs, name) => {
      const inputRe = new RegExp(`<input(?:[^>]*?)name="${name}"(?:[^>]*?)>`)
      const input = html.match(inputRe)
      const checked = input ? /(?<![\w-])checked(?:="")?(?=\s|>)/.test(input[0]) : false
      const display = checked ? 'inline-flex' : 'none'
      let newAttrs = attrs
      if (hasAttr(attrs, 'style')) {
        newAttrs = newAttrs.replace(/(?<![\w-])style="[^"]*"/, `style="display: ${display};"`)
      } else {
        newAttrs = newAttrs + ` style="display: ${display};"`
      }
      return `<div${newAttrs}>`
    }
  )
}

/** 顶层卡片属性 + new 徽章 */
function applyTopLevel(html, { isNew }) {
  html = html.replace(/^<div class="option"( data-no="\d+")>/, (m, dataNo) => {
    const cls = isNew ? 'option settingsPanel_optionCard new' : 'option settingsPanel_optionCard'
    return `<div class="${cls}"${dataNo} data-pin-bound="true" style="display: flex;">`
  })
  if (isNew) {
    const badge =
      `\n  <span class="settingsPanel_newBadge" aria-hidden="true">` +
      `\n    <svg class="icon settingsPanel_newBadgeIcon" aria-hidden="true">` +
      `\n      <use xlink:href="#new"></use>` +
      `\n    </svg>` +
      `\n  </span>`
    html = html.replace(/\n<\/div>$/, `${badge}\n</div>`)
  }
  return html
}

/** 填充 slot 内容（模块的静态 html） */
export function applySlots(html, moduleSnippets) {
  return html.replace(
    /<slot((?:[^>]*?)\bdata-name="([^"]+)"(?:[^>]*?))>\s*<\/slot>/g,
    (m, attrs, name) => {
      const snippet = moduleSnippets[name]
      if (!snippet) return m
      let content = snippet.trim()
      content = normalizeTags(content)
      content = fixBooleanAttrs(content)
      // 根元素加上 theme-white（wiki 使用浅色主题）
      content = content.replace(
        /^<([a-zA-Z][a-zA-Z0-9]*)((?:[^>]*?)\bclass=")([^"]*)("(?:[^>]*?))>/,
        (m2, tag, before, cls, after) => `<${tag}${before}${cls} theme-white${after}>`
      )
      return `<slot${attrs}>${content}</slot>`
    }
  )
}

// ---------------- 设置项 html ----------------

/**
 * 生成一个设置项的 html
 * @param {object} o
 * @param {string} o.raw 源 html（OptionsHtml.html 的块）
 * @param {number} o.no 设置项编号
 * @param {string} o.lang 语言（zh-cn / en）
 * @param {number} o.langIndex langText 里的语言下标（0 / 2）
 * @param {string} o.href 指向该设置项所在页面的链接
 * @param {boolean} o.isNew 是否显示 new 徽章
 * @param {object} o.langText
 * @param {object} o.moduleSnippets
 * @param {object} o.report
 */
export function makeOptionHtml(o) {
  let html = o.raw
  html = applySlots(html, o.moduleSnippets)
  html = normalizeTags(html)
  html = fixBooleanAttrs(html)
  // textarea 内容两侧去除缩进换行（与现有内容一致）
  html = html.replace(/(<textarea\b[^>]*>)\s*\n\s*/g, '$1')
  html = html.replace(/\s*\n\s*(<\/textarea>)/g, '$1')
  html = removeHelpButtons(html, o.report)
  html = applyTips(html, o.langText, o.langIndex, o.report)
  html = fillTexts(html, o.langText, o.langIndex, o.report)
  html = applyPlaceholderAndTitle(html, o.langText, o.langIndex, o.report)
  html = applyCheckedLabels(html)
  html = applyBindCopy(html)
  html = applyLink(html, o.href)
  html = applySubOptionDisplay(html)
  html = applyTopLevel(html, { isNew: o.isNew })
  html = html.replaceAll('\n\n', '\n')
  return html.trim()
}

// ---------------- 按钮 html ----------------

/**
 * 生成一个按钮的 html
 * @param {object} o
 * @param {string} o.id
 * @param {string} o.nameKey 按钮名称的 i18n key
 * @param {object|null} o.callSite readButtonCallSites 的结果
 * @param {object} o.langText
 * @param {number} o.langIndex
 * @param {object} o.report
 */
export function makeButtonHtml(o) {
  const { id, nameKey, callSite, langText, langIndex, report } = o
  const name = nameKey ? langText[nameKey][langIndex] : ''

  if (callSite?.kind === 'addBlueTextBtn') {
    const text = callSite.text || nameKey
    return `<button id="${id}" class="blueTextBtn hasRippleAnimation" type="button"><span data-xztext="${text}">${langText[text]?.[langIndex] ?? ''}</span><span class="ripple"></span></button>`
  }
  if (callSite?.kind === 'addTextBtn') {
    const text = callSite.text || nameKey
    return `<button id="${id}" type="button"><span data-xztext="${text}">${langText[text]?.[langIndex] ?? ''}</span></button>`
  }

  const emphasis = callSite?.emphasis || 'secondary'
  const intent = callSite?.intent || 'brand'
  if (!callSite) report.buttonWithoutCallSite(id)
  let titleAttrs = ''
  if (callSite?.title) {
    if (callSite.title.startsWith('_')) {
      // i18n key：保留 data-xztitle，并按语言填充 title
      const t = langText[callSite.title]?.[langIndex] ?? ''
      titleAttrs = ` data-xztitle="${callSite.title}" title="${escapeAttr(t)}"`
    } else {
      titleAttrs = ` title="${escapeAttr(callSite.title)}"`
    }
  }
  return `<button id="${id}" type="button" class="hasRippleAnimation settingsPanelActionBtn" data-btn-emphasis="${emphasis}" data-btn-intent="${intent}"${titleAttrs}><span data-xztext="${nameKey}">${name}</span><span class="ripple"></span></button>`
}
