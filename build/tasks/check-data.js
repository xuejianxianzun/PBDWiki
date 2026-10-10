// 自检：从 PBD 仓库读取数据，生成两个 JSON，并与 docs/data 里的现有文件对比
import path from 'node:path'
import fs from 'node:fs'
import { readJson, writeText, REPORTS, BUILD_DIR, ROOT, log } from '../lib/util.js'
import { readAll } from '../lib/pbd-reader.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const pbd = config.pbdRepo

log('从', pbd, '读取数据…\n')
const data = readAll(pbd)

log('== 读取结果 ==')
log('langText key 数：', Object.keys(data.langText).length)
const optionNos = Object.keys(data.optionsHtml).map(Number).sort((a, b) => a - b)
log('设置项 html 块：', optionNos.length, '（no 范围', optionNos[0], '-', optionNos[optionNos.length - 1], '）')
// 检查 no 是否连续
const missing = []
for (let i = 0; i <= optionNos[optionNos.length - 1]; i++) {
  if (!optionNos.includes(i)) missing.push(i)
}
log('缺失的 no：', missing.length ? missing.join(',') : '（无）')
log('设置项页面数（数据源条目）：', data.optionsData.length)
log('按钮页面数（数据源条目）：', data.buttonsData.length)
const allButtonIds = new Set()
data.buttonsData.forEach((e) => e.ids.forEach((id) => allButtonIds.add(id)))
log('按钮 id 数：', allButtonIds.size)
log('按钮调用点记录数：', data.buttonCalls.callCount, '；解析出的 id 数：', data.buttonCalls.byId.size)
log('')

// 按钮：数据源里有、但没解析到调用点的
const noCallSite = [...allButtonIds].filter((id) => !data.buttonCalls.byId.has(id))
log('== 按钮调用点缺失 ==')
log(noCallSite.length ? noCallSite.join(', ') : '（无）')
log('')
log('== 按钮调用点冲突（同一 id 的 emphasis/intent 不一致）==')
if (data.buttonCalls.conflicts.length) {
  for (const c of data.buttonCalls.conflicts.slice(0, 20)) {
    log(`  ${c.id}: ${JSON.stringify(c.first)} / ${JSON.stringify(c.another)}`)
  }
} else log('（无）')
log('')

// 设置项：有 showMsgBtn 的（说明文字可 fetch）
const withMsg = Object.values(data.optionsHtml).filter((b) => b.msgKey)
log('带帮助文字的设置项数：', withMsg.length, '/', optionNos.length)
log('')

// 与现有 JSON 对比
function compare(name, gen, cur) {
  log(`== 对比 ${name} ==`)
  if (JSON.stringify(gen) === JSON.stringify(cur)) {
    log('完全一致 ✔')
    log('')
    return
  }
  log('存在差异：')
  if (gen.length !== cur.length) log(`  条目数：生成 ${gen.length}，现有 ${cur.length}`)
  const n = Math.max(gen.length, cur.length)
  let shown = 0
  for (let i = 0; i < n; i++) {
    const a = JSON.stringify(gen[i])
    const b = JSON.stringify(cur[i])
    if (a !== b) {
      shown++
      if (shown <= 5) {
        log(`  第 ${i + 1} 条不同：`)
        log('    生成：', a?.slice(0, 220))
        log('    现有：', b?.slice(0, 220))
      }
    }
  }
  log(`  共 ${shown} 条不同`)
  log('')
}

const curOptions = readJson(path.join(ROOT, 'docs/data/options_data.json'))
const curButtons = readJson(path.join(ROOT, 'docs/data/buttons_data.json'))
compare('options_data.json', data.optionsData, curOptions)
compare('buttons_data.json', data.buttonsData, curButtons)

log('== subOptionWrap 相关检查（供转换参考）==')
const subShow = new Set()
for (const b of Object.values(data.optionsHtml)) {
  for (const m of b.html.matchAll(/data-show="([^"]+)"/g)) subShow.add(m[1])
}
log('data-show 的开关名数：', subShow.size)
