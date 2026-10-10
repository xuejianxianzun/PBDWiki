// 计算 docs 下生成产物的哈希清单（用于幂等性对比）
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { DOCS, log } from '../lib/util.js'

const out = process.argv[2] || 'build/.hash.json'
const acc = {}
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'images') continue
      walk(p)
    } else if (/\.(md|json)$/.test(e.name)) {
      const rel = path.relative(DOCS, p).replace(/\\/g, '/')
      if (rel.startsWith('template/')) continue
      acc[rel] = crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex')
    }
  }
}
walk(DOCS)
fs.writeFileSync(out, JSON.stringify(acc, null, 1))
log('哈希清单已写入', out, '（', Object.keys(acc).length, '个文件）')

// 与另一个清单对比
const other = process.argv[3]
if (other && fs.existsSync(other)) {
  const before = JSON.parse(fs.readFileSync(other, 'utf8'))
  const diffs = []
  for (const k of Object.keys(before)) if (acc[k] !== before[k]) diffs.push('变化: ' + k)
  for (const k of Object.keys(acc)) if (!(k in before)) diffs.push('新增: ' + k)
  if (!diffs.length) log('✅ 幂等：两份清单完全一致')
  else {
    log('❌ 差异文件（' + diffs.length + '）：')
    diffs.slice(0, 30).forEach((d) => log('  ', d))
  }
}
