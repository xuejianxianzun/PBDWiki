// 一次性迁移：从 template 的页面文件里提取每个条目的说明文字 → template/<lang>/desc/<no|id>.md
import fs from 'node:fs'
import path from 'node:path'
import { readJson, readText, writeText, BUILD_DIR, TEMPLATE, REPORTS, Report, log } from '../lib/util.js'
import { listContentPages, parsePageFile } from '../lib/state-parser.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const pages = listContentPages(TEMPLATE, config.languages, config.prefixes)
const report = new Report('说明文字提取报告')
const secStat = report.section('统计')
const secEmpty = report.section('说明为空的条目（构建时会尝试 fetch 或留空）')
const secDup = report.section('重复出现的条目（同一语言里出现多次）')
const secFail = report.section('无法提取的条目')

for (const lang of config.languages) {
  const outDir = path.join(TEMPLATE, lang, 'desc')
  fs.mkdirSync(outDir, { recursive: true })
  const written = new Map()
  let count = 0
  let empty = 0
  for (const f of pages) {
    if (f.lang !== lang || f.isMenu) continue
    const entries = parsePageFile(readText(f.abs))
    for (const e of entries) {
      let id = null
      const m1 = e.html.match(/data-no="(\d+)"/)
      if (m1) id = m1[1]
      else {
        const m2 = e.html.match(/<button[^>]*\bid="([^"]+)"/)
        if (m2) id = m2[1]
      }
      if (!id) {
        secFail.line(`- ${f.rel}：「${e.title}」找不到 no/id`)
        continue
      }
      const desc = e.desc.trim()
      if (written.has(id)) {
        const old = written.get(id)
        if (old.desc !== desc) {
          secDup.line(`- ${lang}/${id}：先来自「${old.from}」，后来自「${f.rel}」（内容不同，保留先出现的）`)
        }
        continue
      }
      written.set(id, { desc, from: f.rel })
      writeText(path.join(outDir, `${id}.md`), desc ? desc + '\n' : '')
      count++
      if (!desc) {
        empty++
        secEmpty.line(`- ${lang}/${id}（${e.title}）`)
      }
    }
  }
  secStat.line(`- ${lang}：提取 ${count} 个说明文件，其中空说明 ${empty} 个`)
}

const reportPath = path.join(REPORTS, 'migrate-descs.md')
writeText(reportPath, report.render())
log('报告：', reportPath)
log('空说明条目数：', report.has('说明为空的条目（构建时会尝试 fetch 或留空）') ? report.sections.find((s) => s.name.startsWith('说明为空')).lines.length : 0)
