// 一次性迁移：把 template 里指向设置/按钮条目的 markdown 链接转换为 [setting:N] / [button:id] 标记
import fs from 'node:fs'
import path from 'node:path'
import { readJson, readText, writeText, BUILD_DIR, TEMPLATE, REPORTS, slugify, Report, log } from '../lib/util.js'
import { listContentPages, parsePageFile } from '../lib/state-parser.js'
import { walkFiles } from '../lib/util.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const dryRun = process.argv.includes('--dry-run')

// 建立索引：<lang>/<folder>/<file> → [{ type, id, name, slug }]
const pages = listContentPages(TEMPLATE, config.languages, config.prefixes)
const index = new Map()
for (const f of pages) {
  if (f.isMenu) continue
  const entries = parsePageFile(readText(f.abs))
  const list = []
  for (const e of entries) {
    let type = null
    let id = null
    const m1 = e.html.match(/data-no="(\d+)"/)
    if (m1) {
      type = 'setting'
      id = m1[1]
    } else {
      const m2 = e.html.match(/<button[^>]*\bid="([^"]+)"/)
      if (m2) {
        type = 'button'
        id = m2[1]
      }
    }
    if (type) list.push({ type, id, name: e.title, slug: slugify(e.title) })
  }
  index.set(`${f.lang}/${f.folder}/${f.file.replace(/\.md$/, '')}`, list)
}
log('索引了', index.size, '个页面')

const report = new Report('链接标记化报告')
const secStat = report.section('统计')
const secMissPage = report.section('未转换：目标不在生成范围内（菜单 / 根页面 / 路径已失效）')
const secMissAnchor = report.section('未转换：锚点无法匹配到条目（需人工处理）')
const secNoAnchor = report.section('未转换：页面级链接（指向页面，无锚点）')
const secTextDiffers = report.section('链接文本与条目名称不一致（已转换，请确认）')
const secCode = report.section('代码块内疑似标记（未处理）')

let total = 0
let converted = 0
let changedFiles = 0

// 菜单文件与侧边栏会被构建重新生成，不需要转换
const mdFiles = walkFiles(TEMPLATE, (p) => {
  if (!p.endsWith('.md')) return false
  const base = path.basename(p)
  if (base.includes('menu') || base === '_sidebar.md') return false
  return true
})

for (const file of mdFiles) {
  const text = readText(file)
  const lines = text.split('\n')
  let inFence = false
  let fenceMark = ''
  let changed = false
  const outLines = lines.map((line) => {
    const fm = /^\s*(```+|~~~+)/.exec(line)
    if (fm) {
      if (!inFence) {
        inFence = true
        fenceMark = fm[1][0]
      } else if (fm[1][0] === fenceMark) {
        inFence = false
      }
      const inside = line.match(/\[(setting|button):[A-Za-z0-9_-]+\]/g)
      if (inside) inside.forEach((x) => secCode.line(`- ${path.relative(TEMPLATE, file)}: ${x}`))
      return line
    }
    if (inFence) {
      const inside = line.match(/\[(setting|button):[A-Za-z0-9_-]+\]/g)
      if (inside) inside.forEach((x) => secCode.line(`- ${path.relative(TEMPLATE, file)}: ${x}`))
      return line
    }
    return line.replace(
      /\[([^\[\]]*)\]\((\/?)((?:zh-cn|en)\/(?:设置|按钮|Settings|Buttons)[^)?]*)(?:\?id=([^)\s]*))?\)/g,
      (m, text_, _slash, targetPath, anchor) => {
        total++
        const rel = path.relative(TEMPLATE, file).replace(/\\/g, '/')
        const list = index.get(targetPath.replace(/\.md$/, ''))
        if (!list) {
          secMissPage.line(`- ${rel}: ${targetPath}`)
          return m
        }
        if (!anchor) {
          secNoAnchor.line(`- ${rel}: ${targetPath}`)
          return m
        }
        const hit =
          list.find((e) => e.slug === anchor) ||
          list.find((e) => e.slug.toLowerCase() === anchor.toLowerCase()) ||
          list.find((e) => e.name === text_) ||
          list.find((e) => slugify(e.name) === slugify(text_))
        if (!hit) {
          secMissAnchor.line(`- ${rel}: ${targetPath}?id=${anchor}（文本「${text_}」）`)
          return m
        }
        if (text_ !== hit.name) {
          secTextDiffers.line(`- ${rel}: 「${text_}」→「${hit.name}」（${hit.type}:${hit.id}）`)
        }
        converted++
        changed = true
        return `[${hit.type}:${hit.id}]`
      }
    )
  })
  if (changed && !dryRun) {
    writeText(file, outLines.join('\n'))
    changedFiles++
  } else if (changed) {
    changedFiles++
  }
}

secStat.line(`- 扫描 md 文件：${mdFiles.length}`)
secStat.line(`- 匹配到的设置/按钮链接总数：${total}`)
secStat.line(`- 成功转换为标记：${converted}`)
secStat.line(`- ${dryRun ? '需要修改' : '已修改'}的文件数：${changedFiles}`)

const reportPath = path.join(REPORTS, 'migrate-links.md')
writeText(reportPath, report.render())
log('')
log('链接总数：', total, '；转换为标记：', converted, '；', dryRun ? '需修改' : '已修改', '文件：', changedFiles)
log('报告：', reportPath)
