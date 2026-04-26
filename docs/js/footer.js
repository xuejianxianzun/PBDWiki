// 添加钩子
window.$docsify.plugins = [].concat(window.$docsify.plugins || [], [
  function (hook, vm) {
    // 在每次 Markdown 渲染完成后执行
    hook.doneEach(function () {
      resetImageSize()
      findID()
      scrollToTarget()
    })
  },
])

// 鼠标点击 img 图片时，在新标签页打开
function openImage () {
  document.addEventListener('click', function (event) {
    const target = event.target
    if (target.tagName.toLowerCase() === 'img') {
      window.open(target.src, '_blank')
    }
  })
}
window.setTimeout(openImage, 0)

// 根据 DPI 调整图片尺寸，使其显示为原尺寸，而不是乘以 DPI 倍率后放大的尺寸
function resetImageSize () {
  const images = document.querySelectorAll('img')
  const dpr = window.devicePixelRatio
  if (dpr > 1) {
    const scale = 1 / dpr
    images.forEach((img) => {
      if (img.naturalWidth > 0) {
        img.style.width = img.naturalWidth * scale + 'px'
        img.style.height = 'auto'
        return
      }

      img.onload = function () {
        img.style.width = img.naturalWidth * scale + 'px'
        img.style.height = 'auto'
      }
    })
  }
}

// 从下载器跳转到 Wiki 页面时，下载器可能会在 URL 里携带 flag 标记
// 从当前页面里查找是否有对应的 flag 标记，并跳转到指定位置
function findID () {
  // 例如对于这个 URL：
  // https://xuejianxianzun.github.io/PBDWiki/#/zh-cn/%E8%AE%BE%E7%BD%AE-%E6%8A%93%E5%8F%96?flag=51
  if (window.location.hash.includes('flag=')) {
    // 提取出 ? 后面的查询部分（虽然是在 hash 里，但可以作为查询字符串处理）
    const search = window.location.hash.split('?').pop()
    // flag=51
    const params = new URLSearchParams(search)
    const flag = params.get('flag')
    if (flag) {
      // flag 可能是数字（当需要跳转到某个设置项时）或者字符串（当需要跳转到某个按钮时）
      const number = Number(flag)
      if (!isNaN(number)) {
        // 查找设置项
        findOption(number)
      } else {
        // 查找按钮
        findButton(flag)
      }
    }
  }
}

// 查找设置项
function findOption (number) {
  // 每个设置项都有对应的选择器。其元素可能是 p 或 div
  const option = document.querySelector(`.option[data-no="${number}"]`)
  if (option === null) {
    console.error(`查找不到设置项：${number}`)
    return
  }

  // 尝试查找这个设置项前面相邻的 H2 元素
  const h2 = option.previousElementSibling
  if (h2 && h2.tagName.toLowerCase() === 'h2') {
    // 如果查找到 H2 元素
    const a = h2.querySelector('a')
    if (a) {
      changeHash(a)
    }
  } else {
    // 如果查找不到 h2，则直接跳转到这个 option 的位置
    option.scrollIntoView()
  }
}

// 查找按钮
function findButton (flag) {
  const btn = document.querySelector(`button#${flag}`)
  if (btn === null) {
    console.error(`查找不到按钮：${flag}`)
    return
  }

  // 查找 button 所在的父元素 p
  const parent = btn.parentElement
  if (parent) {
    // 查找 p 前面相邻的 H2 或 H3 元素
    const prev = parent.previousElementSibling
    if (prev && (prev.tagName.toLowerCase() === 'h2' || prev.tagName.toLowerCase() === 'h3')) {
      const a = prev.querySelector('a')
      if (a) {
        changeHash(a)
      }
    } else {
      // 如果查找不到所属的标题等级，则直接跳转到这个 button 的位置
      btn.scrollIntoView()
    }
  }
}

// 使用 H2 或 H3 标签内部的 a 标签的 href 来替换 hash，因为这就是要跳转到的目标位置
function changeHash (a) {
  let newHash = a.getAttribute('href')
  // 当进入页面时，网址里有 flag 时，href 里也会包含 flag 标记，需要去掉。例如：
  // ?flag=0&id=xxxxx
  // 变成 ?id=xxxxx
  const search = newHash.split('?').pop()
  const params = new URLSearchParams(search)
  params.delete('flag')
  newHash = newHash.split('?').shift() + '?' + params.toString()
  window.location.hash = newHash
  // 改变 hash 之后不需要手动跳转到 H2 的位置，因为之后会通过 scrollToTarget 函数进行跳转
}

// 跳转到子标题时，经常不能定位到目标位置，特别是这个页面里的条目很多时，如果跳转到靠近底部的条目，默认的滚动位置往往是偏上的。
// 这里手动滚动一次来修正位置
async function scrollToTarget () {
  if (location.href.includes('?id=')) {
    // 等待页面可见后再滚动到目标位置。因为如果页面不可见（主要是在后台打开标签页时），滚动操作可能会被浏览器忽略，导致无法正确定位到目标位置
    await waitPageVisible()
    // 延时 1 秒，确保页面渲染完成后再滚动到目标位置。如果时间太短经常无法生效
    await sleep(1000)
    let id = location.href.split('?id=').pop()
    if (id) {
      id = decodeURIComponent(id)
      const target = document.getElementById(id)
      // console.log(target)
      const rect = target.getBoundingClientRect()
      // 如果元素在视口上方，或者距离顶部超过一定像素，则滚动到该元素
      if (rect.top < 0 || rect.top > 400) {
        // 如果元素在视口下方，则不使用平滑滚动。因为需要距离的距离比较长的时候，滚动时间长，再加上画面快速变化，看的人头晕
        if (rect.top > window.innerHeight) {
          target?.scrollIntoView()
        } else {
          // 如果元素在视口内，则使用平滑滚动
          target?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }
}

async function waitPageVisible () {
  return new Promise((resolve) => {
    if (document.visibilityState === 'visible') {
      resolve()
    } else {
      document.addEventListener('visibilitychange', function onVisibilityChange () {
        if (document.visibilityState === 'visible') {
          document.removeEventListener('visibilitychange', onVisibilityChange)
          resolve()
        }
      })
    }
  })
}

async function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 监听按键事件，如果连续按下 ppdtask 则显示 prompt 输入框。提示：
// 输入 1 打开所有跳转链接
let keySequence = ''
document.addEventListener('keydown', function (event) {
  keySequence += event.key
  if (keySequence.endsWith('ppdtask')) {
    keySequence = ''
    const input = prompt('输入 1 打开所有跳转链接')
    if (input === '1') {
      jumpLinks()
    }
  }
})

// 打开右侧文章区域里的所有站内跳转链接，以便检查链接是否正确
async function jumpLinks () {
  const links = document.querySelectorAll('.markdown-section a')
  for (const link of links) {
    // 排除标题等级里的 A 标签
    if (link.classList.contains('anchor')) {
      continue
    }
    // 排除站外链接。因为站内链接不以协议开头
    const href = link.getAttribute('href')
    if (!href || href.startsWith('http') || href.startsWith('https')) {
      continue
    }

    if (href.startsWith('#/zh-cn/') || href.startsWith('#/en/')) {
      console.log(`${href}`)
    }
    await sleep(500)
    window.open(link.href, '_blank')
  }
}
