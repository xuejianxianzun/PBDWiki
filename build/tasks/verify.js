// 验证构建产物：页面/菜单/侧边栏/链接的完整性
import fs from 'node:fs'
import path from 'node:path'
import { readJson, readText, BUILD_DIR, DOCS, log } from '../lib/util.js'
import { readAll } from '../lib/pbd-reader.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const data = readAll(config.pbdRepo)

let problems = 0
const issue = (msg) => {
  problems++
  console.log('  ✗', msg)
}

/** 移除围栏代码块后的文本（跳过代码块内的标记示例，避免误报） */
const stripFences = (text) => {
  const out = []
  let inFence = false
  let fenceMark = ''
  for (const line of text.split('\n')) {
    const m = /^\s*(```+|~~~+)/.exec(line)
    if (!inFence && m) {
      inFence = true
      fenceMark = m[1][0]
      continue
    }
    if (inFence && m && m[1][0] === fenceMark) {
      inFence = false
      continue
    }
    if (!inFence) out.push(line)
  }
  return out.join('\n')
}

for (const lang of config.languages) {
  log(`\n===== 验证 ${lang} =====`)
  const outDir = path.join(DOCS, lang)

  // 1) 页面文件
  const allPages = []
  for (const entry of data.optionsData) allPages.push({ page: entry.page[lang], ids: entry.ids.map(String), kind: 'option' })
  for (const entry of data.buttonsData) allPages.push({ page: entry.page[lang], ids: entry.ids.map(String), kind: 'button' })

  let checked = 0
  for (const p of allPages) {
    const file = path.join(outDir, p.page + '.md')
    if (!fs.existsSync(file)) {
      issue(`缺少页面文件：${p.page}.md`)
      continue
    }
    const c = readText(file)
    // 条目数
    const entries = c.split('\n').filter((l) => l.startsWith('## '))
    if (entries.length !== p.ids.length) {
      issue(`${p.page}.md 条目数 ${entries.length} ≠ 数据 ${p.ids.length}`)
    }
    // 每个 id 出现
    for (const id of p.ids) {
      const needle = p.kind === 'option' ? `data-no="${id}"` : `id="${id}"`
      if (!c.includes(needle)) issue(`${p.page}.md 缺少条目 ${needle}`)
    }
    // 每个条目后有 html 和标题
    if (!c.startsWith('## ')) issue(`${p.page}.md 未以 ## 开头`)
    checked++
  }
  log(`页面文件：${checked}/${allPages.length} 通过`)

  // 2) 菜单文件
  const folders = [...new Set(allPages.map((p) => p.page.split('/')[0]))]
  for (const folder of folders) {
    const menuName = config.menuFileNameOverrides[folder] || `${folder}-menu.md`
    const file = path.join(outDir, folder, menuName)
    if (!fs.existsSync(file)) {
      issue(`缺少菜单文件：${folder}/${menuName}`)
      continue
    }
    const c = readText(file)
    const links = c.split('\n').filter((l) => l.startsWith('* ['))
    const pagesInFolder = allPages.filter((p) => p.page.startsWith(folder + '/')).length
    if (links.length !== pagesInFolder) issue(`${folder}/${menuName} 链接数 ${links.length} ≠ 页面数 ${pagesInFolder}`)
  }
  log(`菜单文件：${folders.length} 个文件夹已检查`)

  // 3) 侧边栏
  const sidebar = readText(path.join(outDir, '_sidebar.md'))
  const ourLinks = sidebar.split('\n').filter((l) => /^\s*\* \[.*\]\(/.test(l))
  const missing = []
  for (const p of allPages) {
    if (!sidebar.includes(`(${lang}/${p.page})`)) missing.push(p.page)
    const folder = p.page.split('/')[0]
    const menuName = (config.menuFileNameOverrides[folder] || `${folder}-menu.md`).replace(/\.md$/, '')
    if (!sidebar.includes(`(${lang}/${folder}/${menuName})`)) missing.push(`${folder}/${menuName}`)
  }
  if (missing.length) issue(`侧边栏缺少条目：${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ' …' : ''}`)
  else log(`侧边栏：全部 ${allPages.length} 个页面 + ${folders.length} 个菜单均在`)

  // 4) 其它页面存在性
  const templateDir = path.join(DOCS, 'template', lang)
  const walk = (d, acc = []) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) {
        if (e.name === 'images' || e.name === 'desc') continue
        walk(p, acc)
      } else if (e.name.endsWith('.md')) acc.push(path.relative(templateDir, p).replace(/\\/g, '/'))
    }
    return acc
  }
  for (const rel of walk(templateDir)) {
    if (rel === '_sidebar.md') continue
    const f = path.join(outDir, rel)
    if (!fs.existsSync(f)) issue(`缺少页面：${rel}`)
  }
  log('其它页面：已检查')

  // 4.5) 全量扫描：产物页面里不应残留未展开的标记（含设置/按钮页面里的说明文字）
  const walkAll = (d, acc = []) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) {
        if (e.name === 'images') continue
        walkAll(p, acc)
      } else if (e.name.endsWith('.md')) acc.push(p)
    }
    return acc
  }
  for (const f of walkAll(outDir)) {
    const leftover = stripFences(readText(f)).match(/\[(setting|button):[^\]]+\]/g)
    if (leftover) issue(`${path.relative(outDir, f)} 里有未展开的标记：${[...new Set(leftover)].join(' ')}`)
  }
  log('标记展开（全量）：已检查')

  // 4.6) 图片引用存在性：产物里引用的图片文件必须存在
  let imgChecked = 0
  const imgMissing = []
  for (const f of walkAll(outDir)) {
    const text = stripFences(readText(f))
    for (const m of text.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
      const ref = m[1]
      if (/^(https?:)?\/\//.test(ref) || ref.startsWith('data:')) continue
      const target = ref.startsWith('/') ? path.join(DOCS, ref) : path.resolve(path.dirname(f), ref)
      imgChecked++
      if (!fs.existsSync(target)) imgMissing.push(`${path.relative(outDir, f)} → ${ref}`)
    }
  }
  if (imgMissing.length) {
    for (const x of imgMissing.slice(0, 10)) issue(`图片不存在：${x}`)
    if (imgMissing.length > 10) issue(`…… 还有 ${imgMissing.length - 10} 处图片引用缺失`)
  } else {
    log(`图片引用：${imgChecked} 处均存在`)
  }

  // 4.7) 产物里不应存在图片目录（图片只在 template 下维护，构建不复制）
  const legacyImgDirs = [path.join(DOCS, 'publicImages'), path.join(outDir, 'images')]
  const foundLegacy = legacyImgDirs.filter((d) => fs.existsSync(d))
  if (foundLegacy.length) {
    for (const d of foundLegacy) issue(`产物里出现图片目录（不应存在）：${path.relative(DOCS, d).replace(/\\/g, '/')}`)
  } else {
    log('产物图片目录：已检查（不存在）')
  }

  // 5) 检查生成的 docs 里有没有残留的旧路径
  const oldFolder = lang === 'zh-cn' ? '设置-抓取' : 'Settings-Crawl'
  const badFiles = []
  const walk2 = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name)
      if (e.isDirectory()) {
        if (e.name === 'images') continue
        walk2(p)
      } else if (e.name.endsWith('.md')) {
        const c = readText(p)
        if (c.includes(oldFolder)) badFiles.push(path.relative(outDir, p))
      }
    }
  }
  walk2(outDir)
  if (badFiles.length) log(`  注意：以下文件仍包含旧文件夹名「${oldFolder}」：${badFiles.slice(0, 8).join(', ')}${badFiles.length > 8 ? ` 等 ${badFiles.length} 个` : ''}`)
  else log(`旧文件夹名清理：未发现残留`)
}

log('\n========== 验证结束 ==========')
log('问题数：', problems)
