// 解析 docs/template 里现有的内容（用于金标对比、迁移提取）
import fs from 'node:fs'
import path from 'node:path'
import { readText, walkFiles, toPosix } from './util.js'

/** 解析设置/按钮页面文件 → [{ title, html, desc }] */
export function parsePageFile(text) {
  const lines = text.split('\n')
  const heads = []
  lines.forEach((l, i) => {
    if (/^## /.test(l)) heads.push(i)
  })
  const entries = []
  for (let k = 0; k < heads.length; k++) {
    const start = heads[k]
    const stop = k + 1 < heads.length ? heads[k + 1] : lines.length
    const title = lines[start].slice(3).trim()
    let htmlStart = -1
    for (let i = start + 1; i < stop; i++) {
      if (/^<(div|button|p|span|table)\b/.test(lines[i])) {
        htmlStart = i
        break
      }
    }
    if (htmlStart === -1) {
      entries.push({ title, html: '', desc: '' })
      continue
    }
    const htmlEnd = findHtmlEnd(lines, htmlStart)
    const html = lines.slice(htmlStart, htmlEnd + 1).join('\n')
    const desc = lines
      .slice(htmlEnd + 1, stop)
      .join('\n')
      .replace(/^\n+/, '')
      .replace(/\n+$/, '')
    entries.push({ title, html, desc })
  }
  return entries
}

function findHtmlEnd(lines, start) {
  const first = lines[start]
  if (/^<button\b/.test(first)) {
    for (let i = start; i < lines.length; i++) if (lines[i].includes('</button>')) return i
    return start
  }
  if (/^<p\b/.test(first)) {
    for (let i = start; i < lines.length; i++) if (lines[i].includes('</p>')) return i
    return start
  }
  // div 配平
  let depth = 0
  for (let i = start; i < lines.length; i++) {
    const opens = (lines[i].match(/<div\b/g) || []).length
    const closes = (lines[i].match(/<\/div>/g) || []).length
    depth += opens - closes
    if (depth === 0) return i
  }
  return start
}

/** 解析菜单文件 → { heading, intro, links } */
export function parseMenuFile(text) {
  const lines = text.split('\n')
  const heading = lines[0].replace(/^#\s*/, '').trim()
  const links = []
  const introLines = []
  for (const line of lines.slice(1)) {
    if (/^\* \[/.test(line)) {
      links.push(line.trim())
      continue
    }
    if (!links.length) introLines.push(line)
  }
  const intro = introLines
    .join('\n')
    .replace(/^\n+/, '')
    .replace(/\n+$/, '')
  return { heading, intro, links }
}

/** 解析侧边栏，找出设置/按钮相关的连续行块，返回 { blocks: [[start,end],...] } */
export function findSidebarBlocks(lines, lang, prefixes) {
  const matches = (line) => {
    const m = /^\s*\* \[[^\]]*\]\(([^)]*)\)/.exec(line)
    if (!m) return false
    const target = m[1]
    return (
      target.startsWith(`${lang}/${prefixes.option}`) || target.startsWith(`${lang}/${prefixes.button}`)
    )
  }
  const blocks = []
  let start = -1
  for (let i = 0; i < lines.length; i++) {
    if (matches(lines[i])) {
      if (start === -1) start = i
    } else if (start !== -1) {
      blocks.push([start, i - 1])
      start = -1
    }
  }
  if (start !== -1) blocks.push([start, lines.length - 1])
  return blocks
}

/** 列出设置/按钮文件夹里的页面文件（返回 { abs, rel, lang } 列表） */
export function listContentPages(templateDir, languages, prefixes) {
  const result = []
  for (const lang of languages) {
    const langDir = path.join(templateDir, lang)
    if (!fs.existsSync(langDir)) continue
    for (const entry of fs.readdirSync(langDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      const name = entry.name
      const isSetting = name.startsWith(prefixes[lang].option)
      const isButton = name.startsWith(prefixes[lang].button)
      if (!isSetting && !isButton) continue
      const folder = path.join(langDir, name)
      for (const f of fs.readdirSync(folder)) {
        if (!f.endsWith('.md')) continue
        result.push({
          abs: path.join(folder, f),
          rel: `${lang}/${name}/${f}`,
          lang,
          folder: name,
          file: f,
          isMenu: f.includes('menu'),
        })
      }
    }
  }
  return result
}

/** 从内容页文件里提取 { no → html }（现有内容） */
export function extractOptionHtmls(files) {
  const map = new Map()
  for (const f of files) {
    if (f.isMenu) continue
    const text = readText(f.abs)
    const re = /<div class="option[^>]*data-no="(\d+)"[^>]*>/g
    let m
    while ((m = re.exec(text))) {
      const no = m[1]
      const start = m.index
      let depth = 0
      const re2 = /<(\/?)(div)\b[^>]*?(\/?)>/g
      re2.lastIndex = start
      let m2
      let end = start
      while ((m2 = re2.exec(text))) {
        if (m2[1] === '/') {
          depth--
          if (depth === 0) {
            end = re2.lastIndex
            break
          }
        } else if (m2[3] !== '/') depth++
      }
      if (!map.has(no)) map.set(no, { html: text.slice(start, end), file: f.rel })
    }
  }
  return map
}

/** 从内容页文件里提取 { id → html }（现有按钮） */
export function extractButtonHtmls(files) {
  const map = new Map()
  for (const f of files) {
    if (f.isMenu) continue
    const text = readText(f.abs)
    const re = /<button[^>]*\bid="([^"]+)"[^>]*>/g
    let m
    while ((m = re.exec(text))) {
      const id = m[1]
      const start = m.index
      const close = text.indexOf('</button>', start)
      const end = close === -1 ? start : close + '</button>'.length
      if (!map.has(id)) map.set(id, { html: text.slice(start, end), file: f.rel })
    }
  }
  return map
}
