// 图片路径重写：把产物页面里的图片引用改写为指向 template 的图片目录。
//
// 背景：wiki 的图片只在 template 下维护（template/<lang>/images、template/publicImages），
// 构建时不复制图片（避免部署包里出现重复副本），因此产物页面里的图片引用要指向 template：
//   一级页面：images/x.png          → ../template/<lang>/images/x.png
//             ../publicImages/x.png → ../template/publicImages/x.png
//   二级页面：../images/x.png          → ../../template/<lang>/images/x.png
//             ../../publicImages/x.png → ../../template/publicImages/x.png
//
// 实现方式：把引用解析为"页面 URL 位置上的绝对路径"，判断它属于哪个图片目录，
// 再换算成指向 template 里对应目录的相对路径。
// 其它路径（如站点根 /images/、外部 URL）保持不动；已经是 template 路径的引用也不会被二次改写（幂等）。

/** 把 fromDir（URL 目录，形如 /zh-cn/设置-筛选/）与 ref 合成为绝对 URL 路径 */
export function resolveUrlPath(fromDir, ref) {
  const stack = fromDir.split('/').filter(Boolean)
  for (const part of ref.split('/')) {
    if (part === '' || part === '.') continue
    if (part === '..') stack.pop()
    else stack.push(part)
  }
  return '/' + stack.join('/')
}

/** 计算从 fromDir（URL 目录）到 toPath（绝对路径）的相对路径 */
export function relativeUrlPath(fromDir, toPath) {
  const from = fromDir.split('/').filter(Boolean)
  const to = toPath.split('/').filter(Boolean)
  const file = to.pop()
  let i = 0
  while (i < from.length && i < to.length && from[i] === to[i]) i++
  const parts = []
  for (let n = from.length - i; n > 0; n--) parts.push('..')
  parts.push(...to.slice(i), file)
  return parts.join('/')
}

/**
 * 重写内容里所有图片引用的路径（markdown 的 `![]()` 与 HTML 的 `<img src>`）。
 * @param {string} content
 * @param {object} opts
 * @param {string} opts.pageUrlDir 页面在站点上的 URL 目录（以 / 开头、以 / 结尾，如 `/zh-cn/设置-筛选/`）
 * @param {string} opts.lang 当前语言（如 `zh-cn`）
 * @param {(oldRef: string, newRef: string, kind: 'lang'|'public') => void} [opts.report] 每次重写的回调
 */
export function rewriteImagePaths(content, { pageUrlDir, lang, report }) {
  const mapRef = (ref) => {
    // 外部 URL（http:、https:、data: 等）与协议相对地址（//）保持不动
    if (ref.startsWith('//') || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(ref)) return { ref, kind: null }
    const abs = ref.startsWith('/') ? resolveUrlPath('/', ref) : resolveUrlPath(pageUrlDir, ref)
    const langPrefix = `/${lang}/images/`
    let newAbs = null
    let kind = null
    if (abs.startsWith(langPrefix)) {
      newAbs = `/template/${lang}/images/` + abs.slice(langPrefix.length)
      kind = 'lang'
    } else if (abs.startsWith('/publicImages/')) {
      newAbs = '/template/publicImages/' + abs.slice('/publicImages/'.length)
      kind = 'public'
    }
    if (!newAbs) return { ref, kind: null }
    return { ref: relativeUrlPath(pageUrlDir, newAbs), kind }
  }
  const replace = (m, before, ref, after) => {
    const mapped = mapRef(ref)
    if (mapped.kind === null) return m
    if (report) report(ref, mapped.ref, mapped.kind)
    return before + mapped.ref + after
  }
  content = content.replace(/(!\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g, replace)
  content = content.replace(/(<img\b[^>]*?(?<![\w-])src=")([^"]+)(")/g, replace)
  content = content.replace(/(<img\b[^>]*?(?<![\w-])src=')([^']+)(')/g, replace)
  return content
}
