// 主构建：从下载器数据重建 docs 下设置/按钮的文件夹、页面、菜单、侧边栏，并展开链接标记
import fs from 'node:fs'
import path from 'node:path'
import {
  readJson,
  readText,
  writeText,
  writeJson,
  BUILD_DIR,
  TEMPLATE,
  DOCS,
  REPORTS,
  Report,
  log,
  walkFiles,
  slugify,
  htmlToText,
} from '../lib/util.js'
import { readAll, readPbdVersion } from '../lib/pbd-reader.js'
import { makeOptionHtml, makeButtonHtml } from '../lib/html-maker.js'
import { renderPage, renderMenu, expandMarkers, makeMarkerResolver, htmlToMarkdown } from '../lib/md-maker.js'
import { findSidebarBlocks } from '../lib/state-parser.js'
import { rewriteImagePaths } from '../lib/image-path.js'

const config = readJson(path.join(BUILD_DIR, 'config.json'))
const buildStart = Date.now()
const dryRun = process.argv.includes('--dry-run')
const onlyLang = (process.argv.find((a) => a.startsWith('--lang=')) || '').split('=')[1] || null

log('读取下载器数据…')
const data = readAll(config.pbdRepo)

// ---- 索引与公共数据 ----
const badgeSet = new Set()
{
  const now = Date.now()
  const range = config.newBadgeDays * 24 * 60 * 60 * 1000
  for (const option of data.optionConfigs.options) {
    if (option.addedAt && now - option.addedAt <= range) badgeSet.add(String(option.no))
  }
}
const optionIndex = new Map()
for (const entry of data.optionsData) for (const item of entry.names) optionIndex.set(String(item.id), { entry, item })
const buttonIndex = new Map()
for (const entry of data.buttonsData) for (const item of entry.names) buttonIndex.set(String(item.id), { entry, item })
const msgKeyOf = (id) => data.optionsHtml[String(id)]?.msgKey || ''

// ---- 报告 ----
const report = new Report('构建报告')
const secStat = report.section('统计')
const secNew = report.section('新增条目（本次新建说明文件）')
const secFetch = report.section('[fetch] 处理（从下载器获取说明文字）')
const secEmpty = report.section('说明文字为空的条目（需人工补充）')
const secOrphan = report.section('无主的说明文件（对应条目已不存在）')
const secUnresolved = report.section('未解析的链接标记')
const secNoCallSite = report.section('未解析到调用点的按钮')
const secAnchorMiss = report.section('“?id=”锚点未命中（目标页面上找不到该标题）')
const secRemoved = report.section('本次删除的旧文件夹')
const secWarn = report.section('警告')

let written = 0
let skippedWrite = 0
const imgRewrite = { lang: 0, public: 0 }
const imgReport = (oldRef, newRef, kind) => {
  imgRewrite[kind]++
}
function write(file, content) {
  written++
  if (dryRun) {
    skippedWrite++
    return
  }
  writeText(file, content)
}

function writeDesc(file, content) {
  const c = String(content).replace(/\s+$/, '')
  write(file, c ? c + '\n' : '')
}

function pageDisplayName(file, lang) {
  return lang === 'en' ? file.replace(/-/g, ' ') : file
}

/** 构建当天的日期，格式 YYYY-MM-DD（本地时区） */
function buildDate(d = new Date()) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

const langs = onlyLang ? [onlyLang] : config.languages
const allFolderNames = new Set()

for (const lang of langs) {
  log(`\n===== 处理 ${lang} =====`)
  const langIndex = config.langIndex[lang]
  const templateDir = path.join(TEMPLATE, lang)
  const outDir = path.join(DOCS, lang)
  const prefixes = config.prefixes[lang]
  const G = (file) => path.join(outDir, file)

  // 1) 说明文字
  const descDir = path.join(templateDir, 'desc')
  fs.mkdirSync(descDir, { recursive: true })
  const descOf = new Map()
  // 说明文件里的 [fetch] 标记会在产物里转换为一条提示，提示文字按语言配置在 config.json 的 fetchTip
  const fetchTip = (config.fetchTip || {})[lang] || ''
  const withFetchTip = (text) => {
    const body = String(text || '').replace(/^\s*\n/, '')
    if (!fetchTip) return body
    return `*${fetchTip}*\n` + (body ? '\n' + body : '')
  }
  const allItems = []
  for (const entry of data.optionsData)
    for (const item of entry.names)
      allItems.push({
        id: String(item.id),
        kind: 'setting',
        msgKey: msgKeyOf(item.id),
        page: `/${lang}/${entry.page[lang]}`,
        name: htmlToText(item.name[lang]),
      })
  for (const entry of data.buttonsData)
    for (const item of entry.names)
      allItems.push({
        id: String(item.id),
        kind: 'button',
        msgKey: '',
        page: `/${lang}/${entry.page[lang]}`,
        name: htmlToText(item.name[lang]),
      })

  for (const it of allItems) {
    const file = path.join(descDir, `${it.id}.md`)
    let raw = fs.existsSync(file) ? readText(file) : null
    const created = raw === null
    if (raw === null) raw = ''
    let use = ''
    let hasFetch = false
    const canFetch = it.kind === 'setting' && it.msgKey
    if (/^\s*\[fetch\]/.test(raw)) {
      hasFetch = true
      if (canFetch) {
        const { md, leftover } = htmlToMarkdown(data.langText[it.msgKey][langIndex])
        use = md
        writeDesc(file, '[fetch]\n' + md)
        secFetch.line(`- ${lang}/${it.id}`)
        if (leftover.length) secWarn.line(`- ${lang}/${it.id}：[fetch] 文本里有未处理的标签：${leftover.join(' ')}`)
      } else {
        use = raw.replace(/^\s*\[fetch\]\s*\n?/, '')
        secFetch.line(`- ${lang}/${it.id}：没有可获取的来源，使用文件中 [fetch] 之后的现有内容`)
      }
    } else if (created) {
      if (canFetch) {
        const { md, leftover } = htmlToMarkdown(data.langText[it.msgKey][langIndex])
        use = md
        if (md) hasFetch = true
        writeDesc(file, md ? '[fetch]\n' + md : '')
        secNew.line(`- ${lang}/${it.id}（已从下载器获取）`)
        if (leftover.length) secWarn.line(`- ${lang}/${it.id}：[fetch] 文本里有未处理的标签：${leftover.join(' ')}`)
      } else {
        writeDesc(file, '')
        secNew.line(`- ${lang}/${it.id}`)
      }
    } else {
      use = raw.trim()
    }
    if (!use) secEmpty.line(`- ${lang}/${it.id}`)
    descOf.set(it.id, hasFetch ? withFetchTip(use) : use)
  }

  // 1.5) 收集每个页面上所有标题的 slug（设置名 + 说明文字里的标题），用于校验 ?id= 锚点
  const pageTitles = new Map()
  const addTitle = (page, text) => {
    if (!page) return
    if (!pageTitles.has(page)) pageTitles.set(page, new Set())
    pageTitles.get(page).add(slugify(htmlToText(text)))
  }
  for (const it of allItems) {
    addTitle(it.page, it.name)
    const desc = descOf.get(it.id)
    if (desc) {
      for (const mm of desc.matchAll(/^#{1,6} +(.+)$/gm)) addTitle(it.page, mm[1])
    }
  }

  // 1.6) 展开说明文字里的链接标记（与其它页面共用同一套展开规则）
  const resolver = makeMarkerResolver({ optionsData: data.optionsData, buttonsData: data.buttonsData, lang })
  const markerReport = {
    unresolvedMarker: (m) => secUnresolved.line(`- ${lang}：${m}`),
    markerInCode: (m) => secWarn.line(`- ${lang}：代码块内出现标记：${m}`),
    anchorMiss: (m, page, slug) => secAnchorMiss.line(`- ${lang}：${m} → ${page}（该页面没有「${slug}」锚点）`),
  }
  const checkAnchor = (pagePath, slug) => {
    const titles = pageTitles.get(pagePath)
    return titles ? titles.has(slug) : true
  }
  for (const [id, desc] of descOf) {
    if (!desc) continue
    const { text } = expandMarkers(desc, { resolve: resolver, report: markerReport, checkAnchor })
    descOf.set(id, text)
  }

  // 无主的说明文件
  const knownIds = new Set(allItems.map((i) => i.id))
  for (const f of fs.readdirSync(descDir)) {
    if (!f.endsWith('.md')) continue
    const id = f.replace(/\.md$/, '')
    if (!knownIds.has(id)) secOrphan.line(`- ${lang}/${id}`)
  }

  // 2) 收集文件夹与页面
  const folders = []
  const collect = (source, kind) => {
    for (const entry of source) {
      const [folder, file] = entry.page[lang].split('/')
      let g = folders.find((x) => x.folder === folder)
      if (!g) {
        g = { folder, kind, pages: [] }
        folders.push(g)
      }
      g.pages.push({ file, ids: entry.ids.map(String), names: entry.names })
    }
  }
  collect(data.optionsData, 'option')
  collect(data.buttonsData, 'button')

  // 3) 删除旧的设置/按钮文件夹（产物目录可能还不存在，例如用户删掉了 docs/<lang>，此时跳过；后面写入时会自动创建）
  const removed = []
  if (fs.existsSync(outDir)) {
    for (const d of fs.readdirSync(outDir, { withFileTypes: true })) {
      if (!d.isDirectory()) continue
      if (d.name.startsWith(prefixes.option) || d.name.startsWith(prefixes.button)) removed.push(d.name)
    }
  }
  for (const name of removed) {
    secRemoved.line(`- ${lang}/${name}`)
    if (!dryRun) fs.rmSync(path.join(outDir, name), { recursive: true, force: true })
  }
  log('删除旧文件夹：', removed.length ? removed.join('、') : '（无）')

  // 4) 生成页面与菜单
  const htmlReport = (tag) => ({
    missingKey: (k) => secWarn.line(`- ${tag}：langText 缺少 key：${k}`),
    extraHelpButton: () => secWarn.line(`- ${tag}：一个块里出现多个帮助按钮`),
    buttonWithoutCallSite: () => secNoCallSite.line(`- ${tag}`),
  })

  let pageCount = 0
  let menuCount = 0
  for (const g of folders) {
    for (const page of g.pages) {
      const entries = page.ids.map((id) => {
        const info = g.kind === 'option' ? optionIndex.get(id) : buttonIndex.get(id)
        const title = info.item.name[lang]
        let html
        if (g.kind === 'option') {
          html = makeOptionHtml({
            raw: data.optionsHtml[id].html,
            no: Number(id),
            lang,
            langIndex,
            href: `/#/${lang}/${g.folder}/${page.file}?flag=${id}`,
            isNew: badgeSet.has(id),
            langText: data.langText,
            moduleSnippets: data.moduleSnippets,
            report: htmlReport(`${lang}/${id}`),
          })
        } else {
          html = makeButtonHtml({
            id,
            nameKey: info.item.nameKey,
            callSite: data.buttonCalls.byId.get(id) || null,
            langText: data.langText,
            langIndex,
            report: htmlReport(`${lang}/${id}`),
          })
        }
        return { title, html, desc: descOf.get(id) || '' }
      })
      write(
        G(`${g.folder}/${page.file}.md`),
        rewriteImagePaths(renderPage(entries), {
          pageUrlDir: `/${lang}/${g.folder}/`,
          lang,
          report: imgReport,
        })
      )
      pageCount++
    }

    const menuName = config.menuFileNameOverrides[g.folder] || `${g.folder}-menu.md`
    const displayName = config.folderDisplayNames[g.folder] || g.folder
    const override = (config.menuIntroOverrides[lang] || {})[g.folder]
    const defaultIntro = g.kind === 'option' ? (lang === 'zh-cn' ? '二级分类：' : 'Secondary classification:') : ''
    const intro = override !== undefined ? override : defaultIntro
    const links = g.pages.map((p) => `* [${pageDisplayName(p.file, lang)}](${lang}/${g.folder}/${p.file})`)
    write(
      G(`${g.folder}/${menuName}`),
      rewriteImagePaths(renderMenu({ displayName, intro, links }), {
        pageUrlDir: `/${lang}/${g.folder}/`,
        lang,
        report: imgReport,
      })
    )
    menuCount++
  }
  log('生成页面：', pageCount, '；菜单：', menuCount)

  // 5) 其它页面（模板 → docs，展开标记）
  let otherCount = 0
  for (const f of walkFiles(templateDir, (p) => p.endsWith('.md'))) {
    const rel = path.relative(templateDir, f).replace(/\\/g, '/')
    if (rel === '_sidebar.md' || rel.startsWith('desc/')) continue
    const { text: expanded } = expandMarkers(readText(f), { resolve: resolver, report: markerReport, checkAnchor })
    const relDir = path.posix.dirname(rel)
    write(
      G(rel),
      rewriteImagePaths(expanded, {
        pageUrlDir: `/${lang}/${relDir === '.' ? '' : relDir + '/'}`,
        lang,
        report: imgReport,
      })
    )
    otherCount++
  }
  log('生成其它页面：', otherCount)

  // 6) 侧边栏
  // 底稿里用 [settingsMenu] / [buttonsMenu] 标记占位，构建时替换为设置/按钮的链接列表
  const sidebarSrc = readText(path.join(templateDir, '_sidebar.md'))
  const sidebarLines = sidebarSrc.split('\n')
  const genMenu = (kind, indent) => {
    const lines = []
    for (const g of folders) {
      if (g.kind !== kind) continue
      const menuName = (config.menuFileNameOverrides[g.folder] || `${g.folder}-menu.md`).replace(/\.md$/, '')
      const displayName = config.folderDisplayNames[g.folder] || g.folder
      lines.push(`${indent}* [${displayName}](${lang}/${g.folder}/${menuName})`)
      for (const p of g.pages) {
        lines.push(`${indent}  * [${pageDisplayName(p.file, lang)}](${lang}/${g.folder}/${p.file})`)
      }
    }
    return lines
  }
  const MARK_RE = /^(\s*)\[(settingsMenu|buttonsMenu)\]\s*$/
  const outLines = []
  const foundMark = { settingsMenu: false, buttonsMenu: false }
  for (const line of sidebarLines) {
    const m = MARK_RE.exec(line)
    if (!m) {
      outLines.push(line)
      continue
    }
    const indent = m[1]
    const name = m[2]
    foundMark[name] = true
    outLines.push(...genMenu(name === 'settingsMenu' ? 'option' : 'button', indent))
  }
  if (foundMark.settingsMenu || foundMark.buttonsMenu) {
    write(G('_sidebar.md'), outLines.join('\n'))
    for (const name of ['settingsMenu', 'buttonsMenu']) {
      if (!foundMark[name]) secWarn.line(`- ${lang}：侧边栏底稿里缺少 [${name}] 标记`)
    }
  } else {
    // 兼容旧写法：底稿里直接写着设置/按钮的链接块
    const blocks = findSidebarBlocks(sidebarLines, lang, prefixes)
    if (blocks.length) {
      const [start, end] = blocks[0]
      const genLines = [...genMenu('option', ''), ...genMenu('button', '')]
      const newLines = [...sidebarLines.slice(0, start), ...genLines, ...sidebarLines.slice(end + 1)]
      write(G('_sidebar.md'), newLines.join('\n'))
      secWarn.line(`- ${lang}：侧边栏底稿里没有 [settingsMenu]/[buttonsMenu] 标记，已按旧方式替换设置/按钮链接块（建议改为标记）`)
      if (blocks.length > 1) secWarn.line(`- ${lang}：侧边栏里有 ${blocks.length} 个设置/按钮块，只替换了第一个`)
    } else {
      secWarn.line(`- ${lang}：侧边栏底稿里没有 [settingsMenu]/[buttonsMenu] 标记，也未找到设置/按钮链接块，未更新`)
    }
  }

  // 7) 记录本语言的文件夹名（覆盖表检查在全部语言处理后统一进行）
  for (const g of folders) allFolderNames.add(g.folder)
}

// 7.5) 覆盖表检查（针对全部语言的文件夹名）
for (const k of Object.keys(config.folderDisplayNames)) {
  if (!allFolderNames.has(k)) secWarn.line(`- 显示名覆盖「${k}」没有对应的文件夹（可能文件夹已改名，请更新 config.json）`)
}
for (const k of Object.keys(config.menuFileNameOverrides)) {
  if (!allFolderNames.has(k)) secWarn.line(`- 菜单文件名覆盖「${k}」没有对应的文件夹`)
}
for (const l of config.languages) {
  for (const k of Object.keys(config.menuIntroOverrides[l] || {})) {
    if (!allFolderNames.has(k)) secWarn.line(`- ${l} 菜单说明覆盖「${k}」没有对应的文件夹`)
  }
}

// 7.6) 清理产物里遗留的图片文件夹：图片只在 template 下维护（template/<lang>/images、template/publicImages），
//      构建不再复制图片；产物页面里的图片引用已由 rewriteImagePaths 改写为指向 template
{
  const countFiles = (d) => {
    let n = 0
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) n += countFiles(path.join(d, e.name))
      else n++
    }
    return n
  }
  const legacyDirs = [path.join(DOCS, 'publicImages'), ...langs.map((l) => path.join(DOCS, l, 'images'))]
  const removedNames = []
  for (const d of legacyDirs) {
    if (!fs.existsSync(d)) continue
    removedNames.push(`${path.relative(DOCS, d).replace(/\\/g, '/')}（${countFiles(d)} 个文件）`)
    if (!dryRun) fs.rmSync(d, { recursive: true, force: true })
  }
  if (removedNames.length) secStat.line(`- 清理产物图片目录：${removedNames.join('、')}`)
}

// 8) 站点首页 docs/README.md：由 template/README.md 生成，填充下载器的版本号与构建日期
//    与语言无关（不随 --lang 变化），图片引用保持原样（指向站点级 docs/images）
{
  const srcFile = path.join(TEMPLATE, 'README.md')
  if (fs.existsSync(srcFile)) {
    const version = readPbdVersion(config.pbdRepo)
    const date = buildDate()
    if (!version) {
      secWarn.line('- template/README.md 需要填充版本号，但未能从下载器的 manifest.json 读出版本号（[PBDVersion] 保持原样）')
    }
    write(
      path.join(DOCS, 'README.md'),
      readText(srcFile)
        .replaceAll('[PBDVersion]', version || '[PBDVersion]')
        .replaceAll('[Date]', date)
    )
    secStat.line(`- 站点首页：Wiki version = ${version || '（未读取到）'}，Last updated = ${date}`)
    log(`\n生成站点首页：README.md（Wiki version: ${version || '?'}，Last updated: ${date}）`)
  } else {
    secWarn.line('- 缺少 docs/template/README.md，未生成站点首页 docs/README.md')
  }
}

// 9) 数据源 JSON
write(path.join(DOCS, 'data', 'options_data.json'), JSON.stringify(data.optionsData, null, 2) + '\n')
write(path.join(DOCS, 'data', 'buttons_data.json'), JSON.stringify(data.buttonsData, null, 2) + '\n')

// 10) 报告
const elapsed = ((Date.now() - buildStart) / 1000).toFixed(1)
secStat.line(`- ${dryRun ? '（dry-run，未写盘）' : ''}写入文件：${dryRun ? 0 : written}`)
secStat.line(`- 图片路径重写：${imgRewrite.lang + imgRewrite.public} 处（语言图 ${imgRewrite.lang}、公共图 ${imgRewrite.public}）`)
secStat.line(`- 构建耗时：${elapsed} 秒`)
const reportPath = path.join(REPORTS, 'build-report.md')
fs.mkdirSync(REPORTS, { recursive: true })
fs.writeFileSync(reportPath, report.render(), 'utf8')
log('')
log('========== 构建完成 ==========')
log('写入文件数：', dryRun ? `（dry-run）将写入 ${written}` : written)
log('构建耗时：', elapsed, '秒')
log('报告：', reportPath)
