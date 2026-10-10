// 一次性迁移：从 template 里删除设置/按钮文件夹（说明文字、菜单信息已提取完毕）
import fs from 'node:fs'
import path from 'node:path'
import { readJson, writeText, BUILD_DIR, TEMPLATE, REPORTS, Report, log, walkFiles } from '../lib/util.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const dryRun = process.argv.includes('--dry-run')
const report = new Report('清理 template 报告')
const sec = report.section(dryRun ? '将要删除的文件夹' : '已删除的文件夹')
const secKeep = report.section('保留的内容')

let deleted = 0
for (const lang of config.languages) {
  const langDir = path.join(TEMPLATE, lang)
  // 安全检查：desc 必须已提取
  const descDir = path.join(langDir, 'desc')
  const descCount = fs.existsSync(descDir) ? fs.readdirSync(descDir).filter((f) => f.endsWith('.md')).length : 0
  if (descCount < 50) {
    throw new Error(`安全检查未通过：${descDir} 只有 ${descCount} 个说明文件，请先运行 migrate-descs`)
  }
  for (const entry of fs.readdirSync(langDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    const isSetting = name.startsWith(config.prefixes[lang].option)
    const isButton = name.startsWith(config.prefixes[lang].button)
    if (!isSetting && !isButton) continue
    const target = path.join(langDir, name)
    const count = fs.readdirSync(target).filter((f) => f.endsWith('.md')).length
    sec.line(`- ${lang}/${name}（${count} 个 md 文件）`)
    if (!dryRun) fs.rmSync(target, { recursive: true, force: true })
    deleted++
  }
  if (!dryRun) {
    const left = fs.readdirSync(langDir).filter((f) => f.endsWith('.md'))
    secKeep.line(`- ${lang} 顶层保留的 md：${left.join('、')}`)
    secKeep.line(`- ${lang}/desc：${descCount} 个说明文件`)
  }
}

const reportPath = path.join(REPORTS, 'migrate-cleanup.md')
writeText(reportPath, report.render())
log(`${dryRun ? '将删除' : '已删除'} ${deleted} 个文件夹；报告：${reportPath}`)
