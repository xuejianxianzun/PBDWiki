// 生成页面文件、菜单、侧边栏；展开 [setting:N] / [button:id] 标记
import { slugify, htmlToText } from './util.js'

/** 渲染一个设置/按钮页面文件 */
export function renderPage(entries) {
  const parts = entries.map((e) => {
    let s = `## ${e.title}\n\n${e.html}`
    if (e.desc && e.desc.trim()) s += `\n\n${e.desc.trim()}`
    return s
  })
  return parts.join('\n\n') + '\n'
}

/** 渲染菜单文件 */
export function renderMenu({ displayName, intro, links }) {
  let s = `# ${displayName}\n`
  if (intro && intro.trim()) s += `\n${intro.trim()}\n`
  s += '\n' + links.join('\n') + '\n'
  return s
}

/** 把文本按围栏代码块切分，返回 [{code:boolean, text}] */
function splitFences(text) {
  const lines = text.split('\n')
  const parts = []
  let buf = []
  let inFence = false
  let fenceMark = ''
  for (const line of lines) {
    const m = /^\s*(```+|~~~+)/.exec(line)
    if (!inFence && m) {
      parts.push({ code: false, text: buf.join('\n') + (buf.length ? '\n' : '') })
      buf = [line]
      inFence = true
      fenceMark = m[1][0]
    } else if (inFence && m && m[1][0] === fenceMark) {
      buf.push(line)
      parts.push({ code: true, text: buf.join('\n') + '\n' })
      buf = []
      inFence = false
    } else {
      buf.push(line)
    }
  }
  parts.push({ code: inFence, text: buf.join('\n') })
  return parts
}

/**
 * 展开文本里的 [setting:N] / [button:id] 标记
 * @param {string} text
 * @param {object} ctx
 * @param {(type:string, id:string) => {name:string, path:string}|null} ctx.resolve
 * @param {object} ctx.report
 */
export function expandMarkers(text, ctx) {
  const parts = splitFences(text)
  let changed = false
  const out = parts.map((part) => {
    if (part.code) {
      const inside = part.text.match(/\[(setting|button):[^\]]+\]/g)
      if (inside) {
        for (const marker of inside) ctx.report.markerInCode(marker)
      }
      return part.text
    }
    return part.text.replace(
      /\[(setting|button):([A-Za-z0-9_-]+)(?:\?id=([^\]]+))?\]/g,
      (m, type, id, anchor) => {
        const resolved = ctx.resolve(type, id)
        if (!resolved) {
          ctx.report.unresolvedMarker(m)
          return m
        }
        changed = true
        if (anchor !== undefined) {
          // 锚点写法：[setting:32?id=Creating Folders]
          // 链接文本使用 ?id= 的原文；href 里的锚点经过与标题 id 相同的 slugify 处理
          const label = anchor.trim()
          const slug = slugify(label)
          if (ctx.checkAnchor && !ctx.checkAnchor(resolved.path, slug)) {
            ctx.report.anchorMiss(m, resolved.path, slug)
          }
          return `[${label}](${resolved.path}?id=${slug})`
        }
        return `[${resolved.name}](${resolved.path}?id=${slugify(resolved.name)})`
      }
    )
  })
  return { text: out.join(''), changed }
}

/** 用数据源构建标记解析器 */
export function makeMarkerResolver({ optionsData, buttonsData, lang }) {
  const optionIndex = new Map()
  for (const entry of optionsData) {
    for (const item of entry.names) {
      optionIndex.set(String(item.id), { name: item.name[lang], page: entry.page[lang] })
    }
  }
  const buttonIndex = new Map()
  for (const entry of buttonsData) {
    for (const item of entry.names) {
      buttonIndex.set(String(item.id), { name: item.name[lang], page: entry.page[lang] })
    }
  }
  return (type, id) => {
    const item = type === 'setting' ? optionIndex.get(id) : buttonIndex.get(id)
    if (!item) return null
    return { name: htmlToText(item.name), path: `/${lang}/${item.page}` }
  }
}

/**
 * 把 langText 里的 HTML 说明文字转成 Markdown
 * 规则：<br> → 两个换行；<strong> → **；<a> → md 链接；<span class="blue">（蓝色高亮）→ 行内代码；span 等去标签
 * @returns {{ md: string, leftover: string[] }}
 */
export function htmlToMarkdown(text) {
  let s = String(text).replace(/\r\n/g, '\n')
  // 去掉源码格式缩进
  s = s.replace(/\n[ \t]*/g, '\n')
  // <br>（含其后紧跟的换行）→ 两个换行
  s = s.replace(/<br\s*\/?>\s*\n?/gi, '\n\n')
  // 加粗
  s = s.replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, '**$2**')
  // 链接
  s = s.replace(/<a[^>]*?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
  // 蓝色高亮的片段 → 行内代码（下载器用 <span class="blue"> 高亮代码、标记、选项值等，如 <span class="blue">ja,zh-tw</span>）
  s = s.replace(/<span[^>]*\bblue\b[^>]*>([\s\S]*?)<\/span>/gi, '`$1`')
  // 其它常见行内标签直接去标签
  s = s.replace(/<\/?(?:span|em|i|u|code|small|p|div)[^>]*>/gi, '')
  // 记录未处理的标签
  const leftover = s.match(/<[a-zA-Z][^>]*>/g) || []
  // 折叠多余空行并清理首尾
  s = s.replace(/\n{3,}/g, '\n\n').trim()
  return { md: s, leftover }
}
