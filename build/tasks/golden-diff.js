// 金标对比：用生成器生成设置项/按钮 html，与 docs/template 里的现有内容逐项对比
import fs from 'node:fs'
import path from 'node:path'
import { readJson, writeText, BUILD_DIR, TEMPLATE, REPORTS, squeeze, log } from '../lib/util.js'
import { readAll } from '../lib/pbd-reader.js'
import {
  listContentPages,
  extractOptionHtmls,
  extractButtonHtmls,
} from '../lib/state-parser.js'
import { makeOptionHtml, makeButtonHtml } from '../lib/html-maker.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
log('读取数据…')
const data = readAll(config.pbdRepo)
const files = listContentPages(TEMPLATE, config.languages, config.prefixes)
const curOptions = extractOptionHtmls(files)
const curButtons = extractButtonHtmls(files)
log('现有内容：设置项', curOptions.size, '个；按钮', curButtons.size, '个\n')

// new 徽章集合（构建时点）
const badgeSet = new Set()
const now = Date.now()
const range = config.newBadgeDays * 24 * 60 * 60 * 1000
for (const option of data.optionConfigs.options) {
  if (option.addedAt && now - option.addedAt <= range) badgeSet.add(String(option.no))
}
log('按', config.newBadgeDays, '天规则，当前应显示 new 徽章的设置项：', [...badgeSet].join(', ') || '（无）')
log('')

// 现有内容的路径：no → { lang, folder, file }
const optionPages = new Map()
for (const f of files) {
  if (f.isMenu) continue
  const text = fs.readFileSync(f.abs, 'utf8')
  const re = /data-no="(\d+)"/g
  let m
  while ((m = re.exec(text))) {
    const key = `${m[1]}|${f.lang}`
    if (!optionPages.has(key)) {
      optionPages.set(key, { lang: f.lang, folder: f.folder, file: f.file.replace(/\.md$/, '') })
    }
  }
}

const collect = { missingKeys: new Map(), extraHelp: [], buttonNoCallSite: [] }
const makeReportObj = (tag) => ({
  missingKey: (k) => collect.missingKeys.set(k, (collect.missingKeys.get(k) || 0) + 1),
  extraHelpButton: () => collect.extraHelp.push(tag),
  buttonWithoutCallSite: (id) => collect.buttonNoCallSite.push(id),
})

const diffs = []
const adds = []
const equals = []
const missingInSource = []

for (const f of files) {
  if (f.isMenu) continue
  const text = fs.readFileSync(f.abs, 'utf8')
  const langIndex = config.langIndex[f.lang]

  // 设置项
  const optRe = /<div class="option[^>]*data-no="(\d+)"[^>]*>/g
  let m
  const seen = new Set()
  while ((m = optRe.exec(text))) {
    const no = m[1]
    if (seen.has(no)) continue
    seen.add(no)
    const cur = curOptions.get(no)
    if (!cur) continue
    invalid: {
      const src = data.optionsHtml[no]
      if (!src) {
        missingInSource.push(`${no} @ ${f.rel}`)
        break invalid
      }
      const gen = makeOptionHtml({
        raw: src.html,
        no: Number(no),
        lang: f.lang,
        langIndex,
        href: `/#/${f.lang}/${f.folder}/${f.file.replace(/\.md$/, '')}?flag=${no}`,
        isNew: badgeSet.has(no),
        langText: data.langText,
        moduleSnippets: data.moduleSnippets,
        report: makeReportObj(`option ${no} @ ${f.lang}`),
      })
      const a = squeeze(cur.html)
      const b = squeeze(gen)
      if (a === b) {
        equals.push(`option ${no} @ ${f.lang}`)
      } else {
        diffs.push({ kind: 'option', id: no, lang: f.lang, cur: a, gen: b })
      }
    }
  }

  // 按钮
  const btnRe = /<button[^>]*\bid="([^"]+)"[^>]*>/g
  const seenBtn = new Set()
  while ((m = btnRe.exec(text))) {
    const id = m[1]
    if (seenBtn.has(id)) continue
    seenBtn.add(id)
    const cur = curButtons.get(id)
    if (!cur) continue
    const entry = data.buttonsData.find((e) => e.ids.includes(id))
    const nameItem = entry?.names.find((n) => String(n.id) === id)
    if (!nameItem) {
      missingInSource.push(`${id}（数据源里没有）`)
      continue
    }
    const gen = makeButtonHtml({
      id,
      nameKey: nameItem.nameKey,
      callSite: data.buttonCalls.byId.get(id) || null,
      langText: data.langText,
      langIndex,
      report: makeReportObj(`button ${id} @ ${f.lang}`),
    })
    const a = squeeze(cur.html)
    const b = squeeze(gen)
    if (a === b) equals.push(`button ${id} @ ${f.lang}`)
    else diffs.push({ kind: 'button', id, lang: f.lang, cur: a, gen: b })
  }
}

// 数据源里有、但现有 wiki 里没有的
const allOptionNos = new Set()
data.optionsData.forEach((e) => e.ids.forEach((no) => allOptionNos.add(String(no))))
for (const no of allOptionNos) {
  if (!curOptions.has(no)) adds.push(`option ${no}`)
}
const allButtonIds = new Set()
data.buttonsData.forEach((e) => e.ids.forEach((id) => allButtonIds.add(id)))
for (const id of allButtonIds) {
  if (!curButtons.has(id)) adds.push(`button ${id}`)
}

// 输出
function firstDiff(a, b) {
  const n = Math.min(a.length, b.length)
  let i = 0
  while (i < n && a[i] === b[i]) i++
  return i
}

log('== 结果 ==')
log('一致：', equals.length)
log('有差异：', diffs.length)
log('新增（数据源有、wiki 无）：', adds.length, adds.join(', ') || '')
log('数据源缺失：', missingInSource.length, missingInSource.slice(0, 10).join('; '))
log('')

const lines = []
lines.push('# 金标对比报告', '')
lines.push(`一致：${equals.length}；有差异：${diffs.length}`, '')
lines.push('## 新增（数据源有、wiki 无）', '')
lines.push(adds.length ? adds.map((x) => '- ' + x).join('\n') : '（无）', '')
lines.push('## 差异列表', '')
for (const d of diffs) {
  const i = firstDiff(d.cur, d.gen)
  const c1 = d.cur.slice(Math.max(0, i - 60), i + 120)
  const c2 = d.gen.slice(Math.max(0, i - 60), i + 120)
  lines.push(`### ${d.kind} ${d.id} @ ${d.lang}`)
  lines.push('')
  lines.push('现有：`' + c1.replace(/\n/g, '⏎') + '`')
  lines.push('')
  lines.push('生成：`' + c2.replace(/\n/g, '⏎') + '`')
  lines.push('')
}

lines.push('## 统计', '')
lines.push('### 缺失的 langText key', '')
for (const [k, v] of collect.missingKeys) lines.push(`- ${k} x${v}`)
lines.push('', '### 一个块里出现多个帮助按钮', '')
lines.push(collect.extraHelp.length ? collect.extraHelp.join('\n') : '（无）')
lines.push('', '### 未解析到调用点的按钮', '')
lines.push(collect.buttonNoCallSite.length ? [...new Set(collect.buttonNoCallSite)].join('\n') : '（无）')

writeText(path.join(REPORTS, 'golden-diff.md'), lines.join('\n'))
log('完整报告已写入 build/reports/golden-diff.md')
log('')
log('== 差异预览（前 12 条）==')
for (const d of diffs.slice(0, 12)) {
  const i = firstDiff(d.cur, d.gen)
  log(`--- ${d.kind} ${d.id} @ ${d.lang} ---`)
  log('  现有：', JSON.stringify(d.cur.slice(Math.max(0, i - 50), i + 110)))
  log('  生成：', JSON.stringify(d.gen.slice(Math.max(0, i - 50), i + 110)))
}
