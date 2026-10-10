// 通用工具：文件读写、slug、HTML 转义、报告收集
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const BUILD_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const ROOT = path.resolve(BUILD_DIR, '..')
export const DOCS = path.join(ROOT, 'docs')
export const TEMPLATE = path.join(DOCS, 'template')
export const REPORTS = path.join(BUILD_DIR, 'reports')

export function readText(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
}

export function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, text, 'utf8')
}

export function readJson(file) {
  return JSON.parse(readText(file))
}

export function writeJson(file, data) {
  writeText(file, JSON.stringify(data, null, 2) + '\n')
}

export function exists(file) {
  return fs.existsSync(file)
}

/** 递归列出目录下的文件（返回绝对路径） */
export function walkFiles(dir, filter = () => true) {
  const result = []
  const walk = (d) => {
    if (!fs.existsSync(d)) return
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name)
      if (entry.isDirectory()) walk(p)
      else if (filter(p)) result.push(p)
    }
  }
  walk(dir)
  return result
}

/** 递归列出目录下的文件夹（返回绝对路径） */
export function walkDirs(dir) {
  const result = []
  const walk = (d) => {
    if (!fs.existsSync(d)) return
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name)
      if (entry.isDirectory()) {
        result.push(p)
        walk(p)
      }
    }
  }
  walk(dir)
  return result
}

/** 路径统一为 / 分隔的相对路径 */
export function toPosix(p) {
  return p.replace(/\\/g, '/')
}

/** docsify 的标题锚点（slugify）。规则来源：docsify 4.12.1 的 bn 函数 + ' 实际呈现为 39 */
export function slugify(str) {
  return String(str)
    .trim()
    .replace(/'/g, '39')
    .replace(/[A-Z]+/g, (s) => s.toLowerCase())
    .replace(/<[^>]+>/g, '')
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .replace(/^(\d)/, '_$1')
}

/** HTML 属性值转义 */
export function escapeAttr(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** 复刻 Utils.htmlToText：替换 <br> 为换行并移除 html 标签 */
export function htmlToText(str) {
  return String(str)
    .replace(/<br \/>/g, '\n')
    .replace(/<br\/>/g, '\n')
    .replace(/<br>/g, '\n')
    .replace(/<\/?.+?>/g, '')
}

/** 把空白折叠为单个空格（用于对比 html 差异时忽略格式差异） */
export function squeeze(str) {
  return String(str).replace(/\s+/g, ' ').trim()
}

/** 简单报告收集器 */
export class Report {
  constructor(title) {
    this.title = title
    this.sections = []
  }

  section(name) {
    const s = { name, lines: [] }
    this.sections.push(s)
    return {
      line: (text = '') => s.lines.push(text),
      items: (arr, render = (x) => String(x)) => arr.forEach((x) => s.lines.push('- ' + render(x))),
    }
  }

  has(sectionName) {
    const s = this.sections.find((x) => x.name === sectionName)
    return !!(s && s.lines.length > 0)
  }

  render() {
    const parts = [`# ${this.title}`, '']
    for (const s of this.sections) {
      parts.push(`## ${s.name}`, '')
      parts.push(s.lines.length ? s.lines.join('\n') : '（无）')
      parts.push('')
    }
    return parts.join('\n')
  }
}

export function log(...args) {
  console.log(...args)
}
