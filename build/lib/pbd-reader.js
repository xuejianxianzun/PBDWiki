// 从 Powerful Pixiv Downloader 的本地仓库读取构造 wiki 所需的数据
// 所有解析都基于 TypeScript 编译器 API（AST），对源码格式变化更稳健
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'
import { readText, walkFiles, htmlToText } from './util.js'

// ---------------- TS AST 工具 ----------------

function parseTs(file) {
  return ts.createSourceFile(file, readText(file), ts.ScriptTarget.ESNext, true)
}

function nameText(name) {
  if (!name) return null
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text
  return null
}

/** 求值一个表达式（支持 Config.xxx 与 Config.xxx.join(',')） */
function evalExpr(node, ctx) {
  if (
    ctx?.configValues &&
    ts.isPropertyAccessExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'Config'
  ) {
    const v = ctx.configValues[node.name.text]
    if (v === undefined) throw new Error(`Config.${node.name.text} 未找到（可能未初始化为字面量）`)
    return v
  }
  if (
    ctx?.configValues &&
    ts.isCallExpression(node) &&
    ts.isPropertyAccessExpression(node.expression) &&
    node.expression.name.text === 'join'
  ) {
    const arr = evalExpr(node.expression.expression, ctx)
    const sep = node.arguments.length ? literal(node.arguments[0], ctx) : ','
    return arr.join(sep)
  }
  throw new Error('无法求值的表达式：' + node.getText())
}

/** 把字面量 AST 转成 JS 值；无法解析时抛错（附带位置信息，便于排查） */
function literal(node, ctx) {
  if (!node) return undefined
  switch (node.kind) {
    case ts.SyntaxKind.StringLiteral:
    case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
      return node.text
    case ts.SyntaxKind.NumericLiteral:
      return Number(node.text)
    case ts.SyntaxKind.TrueKeyword:
      return true
    case ts.SyntaxKind.FalseKeyword:
      return false
    case ts.SyntaxKind.NullKeyword:
      return null
  }
  if (ts.isTemplateExpression(node)) {
    let out = node.head.text
    for (const span of node.templateSpans) {
      out += String(evalExpr(span.expression, ctx)) + span.literal.text
    }
    return out
  }
  if (ts.isArrayLiteralExpression(node)) return node.elements.map((el) => literal(el, ctx))
  if (ts.isObjectLiteralExpression(node)) {
    const obj = {}
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        const key = nameText(prop.name)
        obj[key] = literal(prop.initializer, ctx)
      } else if (ts.isShorthandPropertyAssignment(prop)) {
        obj[prop.name.text] = undefined
      } else if (ts.isSpreadAssignment(prop)) {
        Object.assign(obj, literal(prop.expression, ctx))
      }
    }
    return obj
  }
  if (ts.isPropertyAccessExpression(node) || ts.isCallExpression(node)) return evalExpr(node, ctx)
  if (ts.isParenthesizedExpression(node) || ts.isAsExpression(node)) return literal(node.expression, ctx)
  if (typeof ts.isSatisfiesExpression === 'function' && ts.isSatisfiesExpression(node)) return literal(node.expression, ctx)
  if (typeof ts.isTypeAssertionExpression === 'function' && ts.isTypeAssertionExpression(node)) return literal(node.expression, ctx)
  const file = node.getSourceFile().fileName
  throw new Error(`无法解析的字面量（${ts.SyntaxKind[node.kind]}）@ ${file}:${node.getStart()}`)
}

/** 在文件里查找类属性的 initializer 节点（所有类均遍历） */
function findPropertyInitializer(sf, propName) {
  let result = null
  const visit = (node) => {
    if (result) return
    if (ts.isClassDeclaration(node)) {
      for (const member of node.members) {
        if (ts.isPropertyDeclaration(member) && nameText(member.name) === propName && member.initializer) {
          result = member.initializer
          return
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return result
}

/** 查找初始化为模板字符串、且包含指定标记文本的类属性 */
function findTemplateLiteralProperty(sf, marker) {
  let result = null
  const visit = (node) => {
    if (result) return
    if (ts.isClassDeclaration(node)) {
      for (const member of node.members) {
        if (ts.isPropertyDeclaration(member) && member.initializer) {
          const init = member.initializer
          if (
            (ts.isNoSubstitutionTemplateLiteral(init) || ts.isStringLiteral(init)) &&
            init.text.includes(marker)
          ) {
            result = init.text
            return
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return result
}

// ---------------- 各数据的读取 ----------------

/** 读取下载器的版本号（manifest.json） */
export function readPbdVersion(pbd) {
  // 源码里的 src/manifest.json 是版本号的真实来源；其余位置作为回退
  const candidates = ['src/manifest.json', 'manifest.json', 'dist/manifest.json']
  for (const rel of candidates) {
    const file = path.join(pbd, rel)
    if (!fs.existsSync(file)) continue
    try {
      const version = JSON.parse(readText(file)).version
      if (version) return String(version)
    } catch {
      // 解析失败时继续尝试下一个候选文件
    }
  }
  return null
}

/** 读取 langText.ts → { key: [6 种语言的文本] } */
export function readLangText(pbd) {
  const file = path.join(pbd, 'src/ts/langText.ts')
  const sf = parseTs(file)
  const node = findPropertyInitializer(sf, 'langText') || (() => {
    // langText 是顶层变量而非类属性
    let found = null
    sf.forEachChild((child) => {
      if (ts.isVariableStatement(child)) {
        for (const decl of child.declarationList.declarations) {
          if (nameText(decl.name) === 'langText' && decl.initializer) found = decl.initializer
        }
      }
    })
    return found
  })()
  if (!node) throw new Error('未找到 langText')
  const data = literal(node, { configValues: readConfigStatics(pbd) })
  for (const [key, val] of Object.entries(data)) {
    if (!Array.isArray(val) || val.length !== 6) {
      throw new Error(`langText 的 ${key} 不是 6 条文本的数组`)
    }
  }
  return data
}

/** 读取 OptionConfigs.ts → { categorySchema, options } */
export function readOptionConfigs(pbd) {
  const sf = parseTs(path.join(pbd, 'src/ts/setting/OptionConfigs.ts'))
  return {
    categorySchema: literal(findPropertyInitializer(sf, 'categorySchema')),
    options: literal(findPropertyInitializer(sf, 'options')),
  }
}

/** 读取 ButtonConfigs.ts → { categorySchema, buttonList } */
export function readButtonConfigs(pbd) {
  const sf = parseTs(path.join(pbd, 'src/ts/setting/ButtonConfigs.ts'))
  return {
    categorySchema: literal(findPropertyInitializer(sf, 'categorySchema')),
    buttonList: literal(findPropertyInitializer(sf, 'buttonList')),
  }
}

/** 读取 NamingRuleConfig.ts 的命名标记列表 */
export function readNamingConfig(pbd) {
  const sf = parseTs(path.join(pbd, 'src/ts/setting/NamingRuleConfig.ts'))
  return literal(findPropertyInitializer(sf, 'namingConfig'))
}

/** 读取 Config.ts 里所有可以用字面量求值的静态属性 */
export function readConfigStatics(pbd) {
  const sf = parseTs(path.join(pbd, 'src/ts/Config.ts'))
  const values = {}
  const visit = (node) => {
    if (ts.isClassDeclaration(node)) {
      for (const member of node.members) {
        if (ts.isPropertyDeclaration(member) && member.initializer) {
          const key = nameText(member.name)
          if (!key) continue
          try {
            values[key] = literal(member.initializer)
          } catch {
            // 无法用字面量求值的属性先跳过（用不到的就不需要）
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return values
}

/** 读取 Config.ts 里需要的常量 */
export function readConfigValues(pbd) {
  const values = readConfigStatics(pbd)
  return {
    BookmarkCountLimit: values.BookmarkCountLimit,
    defaultNameRuleForArtwork: values.defaultNameRuleForArtwork,
    defaultNameRuleForNovel: values.defaultNameRuleForNovel,
  }
}

/** 读取 Settings.ts 里需要的一些默认值（用于填充运行时才有值的元素） */
export function readSettingsDefaults(pbd) {
  const sf = parseTs(path.join(pbd, 'src/ts/setting/Settings.ts'))
  const wanted = { seriesNovelNameRule: null }
  const visit = (node) => {
    let obj = null
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      obj = node.initializer
    }
    if (ts.isPropertyDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      obj = node.initializer
    }
    if (obj) {
      for (const prop of obj.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const key = nameText(prop.name)
          if (key && key in wanted && wanted[key] === null) {
            try {
              wanted[key] = literal(prop.initializer)
            } catch {
              /* 忽略 */
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return wanted
}

/** 模块里的静态 html 片段（用于填充 slot） */
export function readModuleSnippets(pbd) {
  const read = (rel, marker) => {
    const sf = parseTs(path.join(pbd, rel))
    const html = findTemplateLiteralProperty(sf, marker)
    if (!html) throw new Error(`未在 ${rel} 里找到包含「${marker}」的模板字符串`)
    return html
  }
  return {
    blockTagsForSpecificUser: read('src/ts/filter/BlockTagsForSpecificUser.ts', 'blockTagsForSpecificUserWrap'),
    DoNotDownloadLastFewImagesSlot: read('src/ts/setting/DoNotDownloadLastFewImages.ts', 'DoNotDownloadLastFewImagesWarp'),
    UseDifferentNameRuleIfWorkHasTagSlot: read('src/ts/setting/UseDifferentNameRuleIfWorkHasTag.ts', 'UseDifferentNameRuleIfWorkHasTagWarp'),
    saveNamingRuleForArtwork: read('src/ts/setting/SaveNamingRule.ts', 'saveNamingRuleWrap'),
    saveNamingRuleForNovel: read('src/ts/setting/SaveNamingRule.ts', 'saveNamingRuleWrap'),
  }
}

/** 读取 OptionsHtml.html，应用与 OptionsHtml.ts 相同的替换，返回 { no: { html, msgKey } } */
export function readOptionsHtml(pbd) {
  const setDir = path.join(pbd, 'src/ts/setting')
  let html = readText(path.join(setDir, 'OptionsHtml.html'))
  const cfg = readConfigValues(pbd)
  const naming = readNamingConfig(pbd)
  const optionList = naming.map((item) => `<option value="${item.name}">${item.name}</option>`).join('\n')
  const helpHtml = naming
    .map(
      (item) =>
        `${item.mayEmpty ? '* ' : ''}<span class="blue name">${item.name}</span>\n      <span data-xztext="${item.help}"></span>\n      <br>`
    )
    .join('\n')
  // 与 OptionsHtml.ts 的替换保持一致
  html = html
    .replace('__BOOKMARK_COUNT_LIMIT__', String(cfg.BookmarkCountLimit))
    .replaceAll('<!-- __NAMING_RULE_OPTION_LIST__ -->', optionList)
    .replaceAll('__DEFAULT_NAME_RULE_FOR_ARTWORK__', cfg.defaultNameRuleForArtwork)
    .replace('<!-- __NAMING_RULE_HELP_HTML__ -->', helpHtml)
    .replaceAll('__DEFAULT_NAME_RULE_FOR_NOVEL__', cfg.defaultNameRuleForNovel)

  // 按 data-no 切分
  const starts = []
  const re = /<div class="option" data-no="(\d+)">/g
  let m
  while ((m = re.exec(html))) starts.push([m[1], m.index])
  const result = {}
  for (let i = 0; i < starts.length; i++) {
    const [no, start] = starts[i]
    const end = i + 1 < starts.length ? starts[i + 1][1] : html.length
    let block = html.slice(start, end)
    const closeIndex = block.indexOf('\n</div>')
    if (closeIndex === -1) throw new Error(`option no=${no} 找不到顶层 </div>`)
    block = block.slice(0, closeIndex + '\n</div>'.length)
    if (result[no]) throw new Error(`option no=${no} 重复出现`)
    // no=36（合并系列小说的命名规则）的输入框在运行时填充了默认值
    if (no === '36') {
      const rule = readSettingsDefaults(pbd).seriesNovelNameRule
      if (rule) {
        block = block.replace(
          /(<textarea[^>]*\bname="seriesNovelNameRule"[^>]*>)\s*(<\/textarea>)/,
          (m2, before, after) => before + rule + after
        )
      }
    }
    const msg = /data-msg="([^"]+)"/.exec(block)
    result[no] = { no: Number(no), html: block, msgKey: msg ? msg[1] : '' }
  }
  return result
}

// ---------------- 按钮调用点 ----------------

const ID_POSITION = { addBtn: 3, addInitPageBtn: 3, addBlueTextBtn: 0, addTextBtn: 0 }

function getCallInfo(node) {
  if (!ts.isCallExpression(node)) return null
  const callee = node.expression
  if (!ts.isPropertyAccessExpression(callee)) return null
  const method = callee.name.text
  if (!(method in ID_POSITION)) return null
  const obj = callee.expression
  if (method === 'addBtn' || method === 'addBlueTextBtn' || method === 'addTextBtn') {
    // 只接受 Tools.xxx 的调用（避免误匹配其它类自己的同名方法）
    if (ts.isIdentifier(obj) && obj.text === 'Tools') return { method }
  } else if (method === 'addInitPageBtn') {
    // 只接受 this.addInitPageBtn 的调用
    if (obj.kind === ts.SyntaxKind.ThisKeyword) return { method }
  }
  return null
}

function nearestClassName(node) {
  let cur = node
  while (cur) {
    if (ts.isClassDeclaration(cur) && cur.name) return cur.name.text
    cur = cur.parent
  }
  return ''
}

/** 向上查找最近的、名字匹配的变量声明（const x = '...' / x = '...'） */
function lookupVariable(identNode, ctx) {
  const name = identNode.text
  let cur = identNode.parent
  while (cur) {
    const statements = cur.statements
    if (statements) {
      for (const stmt of statements) {
        if (ts.isVariableStatement(stmt)) {
          for (const decl of stmt.declarationList.declarations) {
            if (ts.isIdentifier(decl.name) && decl.name.text === name && decl.initializer) {
              try {
                const v = literal(decl.initializer, ctx)
                if (typeof v === 'string' || typeof v === 'number') return v
              } catch {
                /* 忽略 */
              }
            }
          }
        }
      }
    }
    cur = cur.parent
  }
  return undefined
}

/** 判断标识符是否是某个外层函数的参数 */
function findParamName(identNode) {
  let cur = identNode.parent
  while (cur) {
    if (ts.isFunctionLike(cur) && cur.parameters) {
      for (const p of cur.parameters) {
        if (ts.isIdentifier(p.name) && p.name.text === identNode.text) return identNode.text
      }
    }
    cur = cur.parent
  }
  return null
}

function nearestFunction(node) {
  let cur = node.parent
  while (cur) {
    if (ts.isFunctionLike(cur)) return cur
    cur = cur.parent
  }
  return null
}

function calleeMethodName(node) {
  const callee = node.expression
  if (ts.isIdentifier(callee)) return callee.text
  if (ts.isPropertyAccessExpression(callee)) return callee.name.text
  return null
}

/** 解析一个调用参数 → { value } | { param: 名称 } | null */
function resolveArg(node, ctx) {
  try {
    if (ts.isIdentifier(node)) {
      const paramName = findParamName(node)
      if (paramName) return { param: paramName }
      const v = lookupVariable(node, ctx)
      if (typeof v === 'string' || typeof v === 'number') return { value: v }
      return null
    }
    const v = literal(node, ctx)
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') return { value: v }
    return null
  } catch {
    return null
  }
}

/** 扫描 src/ts 下所有 addBtn / addInitPageBtn / addBlueTextBtn / addTextBtn 调用（含一层包装函数） */
export function readButtonCallSites(pbd) {
  const srcDir = path.join(pbd, 'src/ts')
  const files = walkFiles(srcDir, (p) => p.endsWith('.ts'))
  const ctx = { configValues: readConfigStatics(pbd) }
  const directCalls = []
  const wrapperTemplates = []
  const allCalls = []

  for (const file of files) {
    const sf = parseTs(file)
    const visit = (node) => {
      if (ts.isCallExpression(node)) {
        const info = getCallInfo(node)
        if (info) {
          const args = node.arguments.map((a) => resolveArg(a, ctx))
          directCalls.push({
            file,
            method: info.method,
            args,
            pos: node.getStart(),
            className: nearestClassName(node),
          })
          if (args.some((a) => a && a.param)) {
            const fn = nearestFunction(node)
            const methodName = fn && fn.name && ts.isIdentifier(fn.name) ? fn.name.text : null
            const paramNames = fn
              ? fn.parameters.map((p) => (ts.isIdentifier(p.name) ? p.name.text : null))
              : []
            wrapperTemplates.push({ method: info.method, methodName, paramNames, args, file })
          }
        } else {
          const methodName = calleeMethodName(node)
          if (methodName) {
            allCalls.push({
              methodName,
              args: node.arguments.map((a) => resolveArg(a, ctx)),
              file,
              pos: node.getStart(),
            })
          }
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(sf)
  }

  // 每个类里第一个 addInitPageBtn 调用的位置（复刻 primary 规则）
  const firstInitCallByClass = new Map()
  for (const call of directCalls) {
    if (call.method !== 'addInitPageBtn') continue
    const key = call.className
    if (!firstInitCallByClass.has(key) || call.pos < firstInitCallByClass.get(key)) {
      firstInitCallByClass.set(key, call.pos)
    }
  }

  const value = (a) => (a && 'value' in a ? a.value : null)

  const str = (v) => (typeof v === 'string' ? v : null)

  const makeRecord = (method, args, file, pos, className) => {
    const id = value(args[ID_POSITION[method]])
    if (typeof id !== 'string') return null
    const rec = {
      id,
      kind: method,
      file: path.relative(pbd, file).replace(/\\/g, '/'),
      className,
      text: str(value(args[1])),
      title: str(value(args[2])),
      emphasis: null,
      intent: null,
    }
    if (method === 'addBtn') {
      rec.emphasis = str(value(args[4]))
      rec.intent = str(value(args[5]))
    } else if (method === 'addInitPageBtn') {
      rec.intent = str(value(args[4]))
      const isFirst = firstInitCallByClass.get(className) === pos
      rec.emphasis = isFirst && rec.intent === 'brand' ? 'primary' : 'secondary'
    }
    return rec
  }

  const records = []
  for (const call of directCalls) {
    const rec = makeRecord(call.method, call.args, call.file, call.pos, call.className)
    if (rec) records.push(rec)
  }

  // 包装函数：把调用点的参数代入模板
  const templatesByName = new Map()
  for (const t of wrapperTemplates) {
    if (!t.methodName) continue
    if (!templatesByName.has(t.methodName)) templatesByName.set(t.methodName, [])
    templatesByName.get(t.methodName).push(t)
  }
  for (const call of allCalls) {
    const temps = templatesByName.get(call.methodName)
    if (!temps) continue
    for (const t of temps) {
      const substituted = t.args.map((a) => {
        if (a && a.param) {
          const idx = t.paramNames.indexOf(a.param)
          return idx >= 0 ? call.args[idx] : null
        }
        return a
      })
      const rec = makeRecord(t.method, substituted, t.file, call.pos, '')
      if (rec) records.push(rec)
    }
  }

  // 按 id 归并（直接调用优先）
  const byId = new Map()
  const conflicts = []
  for (const rec of records) {
    if (!byId.has(rec.id)) {
      byId.set(rec.id, rec)
    } else {
      const old = byId.get(rec.id)
      if (old.emphasis !== rec.emphasis || old.intent !== rec.intent || old.kind !== rec.kind) {
        conflicts.push({ id: rec.id, first: old, another: rec })
      }
    }
  }
  return { byId, conflicts, callCount: directCalls.length }
}

// ---------------- 复刻 Wiki.ts 的 outputDataSource ----------------

function getWikiText(langText, key, index) {
  return langText[key][index]
}

function getPagePath(langText, lv0, lv1, lv2, index) {
  return `${getWikiText(langText, lv0, index)}-${getWikiText(langText, lv1, index)}/${getWikiText(langText, lv2, index)}`.replaceAll(
    ' ',
    '-'
  )
}

/** 生成 options_data.json 的数据（复刻 outputDataSource('option')） */
export function buildOptionsData(optionConfigs, langText) {
  const { categorySchema, options: optionList } = optionConfigs
  // 按 optionList 的顺序聚合 ids（复刻 getOptionsByCategory）
  const optionsByCategory = {}
  for (const option of optionList) {
    const l1 = option.categoryLevel1
    const l2 = option.categoryLevel2
    optionsByCategory[l1] = optionsByCategory[l1] || {}
    optionsByCategory[l1][l2] = optionsByCategory[l1][l2] || { ids: [] }
    optionsByCategory[l1][l2].ids.push(option.no)
  }

  const result = []
  for (const level1 of Object.values(categorySchema)) {
    for (const level2 of Object.values(level1.level2)) {
      const ids = (optionsByCategory[level1.id] || {})[level2.id]?.ids || []
      const names = []
      for (const id of ids) {
        const item = optionList.find((i) => i.no === id)
        if (item) {
          names.push({
            id,
            nameKey: item.nameKey,
            name: {
              'zh-cn': htmlToText(langText[item.nameKey][0]),
              'zh-tw': htmlToText(langText[item.nameKey][1]),
              en: htmlToText(langText[item.nameKey][2]),
              ja: htmlToText(langText[item.nameKey][3]),
              ko: htmlToText(langText[item.nameKey][4]),
              ru: htmlToText(langText[item.nameKey][5]),
            },
          })
        }
      }
      result.push({
        page: {
          'zh-cn': getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 0),
          'zh-tw': getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 1),
          en: getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 2),
          ja: getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 3),
          ko: getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 4),
          ru: getPagePath(langText, '_设置', level1.nameKey, level2.nameKey, 5),
        },
        ids,
        names,
      })
    }
  }
  return result
}

/** 生成 buttons_data.json 的数据（复刻 outputDataSource('button')） */
export function buildButtonsData(buttonConfigs, langText) {
  const { categorySchema, buttonList } = buttonConfigs
  const buttonsByCategory = {}
  for (const button of buttonList) {
    const l1 = button.categoryLevel1
    const l2 = button.categoryLevel2
    buttonsByCategory[l1] = buttonsByCategory[l1] || {}
    buttonsByCategory[l1][l2] = buttonsByCategory[l1][l2] || { ids: [] }
    buttonsByCategory[l1][l2].ids.push(button.id)
  }

  const result = []
  for (const level1 of Object.values(categorySchema)) {
    for (const level2 of Object.values(level1.level2)) {
      const ids = (buttonsByCategory[level1.id] || {})[level2.id]?.ids || []
      const names = []
      for (const id of ids) {
        const item = buttonList.find((i) => i.id === id)
        if (item) {
          names.push({
            id,
            nameKey: item.nameKey,
            name: {
              'zh-cn': htmlToText(langText[item.nameKey][0]),
              'zh-tw': htmlToText(langText[item.nameKey][1]),
              en: htmlToText(langText[item.nameKey][2]),
              ja: htmlToText(langText[item.nameKey][3]),
              ko: htmlToText(langText[item.nameKey][4]),
              ru: htmlToText(langText[item.nameKey][5]),
            },
          })
        }
      }
      result.push({
        page: {
          'zh-cn': getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 0),
          'zh-tw': getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 1),
          en: getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 2),
          ja: getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 3),
          ko: getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 4),
          ru: getPagePath(langText, '_按钮_复数', level1.nameKey, level2.nameKey, 5),
        },
        ids,
        names,
      })
    }
  }
  return result
}

/** 读取全部数据 */
export function readAll(pbd) {
  const langText = readLangText(pbd)
  const optionConfigs = readOptionConfigs(pbd)
  const buttonConfigs = readButtonConfigs(pbd)
  const optionsHtml = readOptionsHtml(pbd)
  const buttonCalls = readButtonCallSites(pbd)
  const moduleSnippets = readModuleSnippets(pbd)
  const optionsData = buildOptionsData(optionConfigs, langText)
  const buttonsData = buildButtonsData(buttonConfigs, langText)
  return {
    langText,
    optionConfigs,
    buttonConfigs,
    optionsHtml,
    buttonCalls,
    moduleSnippets,
    optionsData,
    buttonsData,
  }
}

export function readTextFile(file) {
  return readText(file)
}
