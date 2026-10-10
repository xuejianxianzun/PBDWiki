// 一次性迁移：从菜单文件里提取 显示名 / 顶部说明文字 / 文件名例外 → build/config.json 覆盖表
import fs from 'node:fs'
import path from 'node:path'
import { readJson, writeJson, readText, BUILD_DIR, TEMPLATE, REPORTS, Report, log } from '../lib/util.js'
import { listContentPages, parseMenuFile } from '../lib/state-parser.js'

const configPath = path.join(BUILD_DIR, 'config.json')
const config = readJson(configPath)
const pages = listContentPages(TEMPLATE, config.languages, config.prefixes)

const report = new Report('菜单信息提取报告')
const secDisplay = report.section('显示名覆盖（与文件夹名不同）')
const secIntro = report.section('说明文字覆盖（与默认文案不同）')
const secFile = report.section('菜单文件名例外')

for (const f of pages) {
  if (!f.isMenu) continue
  const { heading, intro } = parseMenuFile(readText(f.abs))
  if (heading !== f.folder) {
    config.folderDisplayNames[f.folder] = heading
    secDisplay.line(`- ${f.folder} → 「${heading}」`)
  }
  const isOptionFolder = f.folder.startsWith(config.prefixes[f.lang].option)
  const defaultIntro = isOptionFolder ? (f.lang === 'zh-cn' ? '二级分类：' : 'Secondary classification:') : ''
  if (intro !== defaultIntro) {
    config.menuIntroOverrides[f.lang] = config.menuIntroOverrides[f.lang] || {}
    config.menuIntroOverrides[f.lang][f.folder] = intro
    secIntro.line(`- ${f.lang}/${f.folder}：${JSON.stringify(intro.slice(0, 60))}`)
  }
  if (f.file !== `${f.folder}-menu.md`) {
    config.menuFileNameOverrides[f.folder] = f.file
    secFile.line(`- ${f.folder}：${f.file}`)
  }
}

writeJson(configPath, config)
const reportPath = path.join(REPORTS, 'migrate-menus.md')
fs.writeFileSync(reportPath, report.render(), 'utf8')
log(report.render().slice(0, 1200))
log('')
log('已写入', configPath, '和', reportPath)
