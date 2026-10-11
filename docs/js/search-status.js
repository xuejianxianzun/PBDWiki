// 搜索索引状态提示（配合 docs/js/search.min.js 使用）
// docsify 的搜索插件在建立索引时没有任何提示，首次搜索常常搜不到东西。
// 这里在搜索框下方显示状态：正在建立索引 → 建立完成（3 秒后自动隐藏）。
// 文案按当前语言显示，与 docs/index.html 里 search.placeholder / noData 的判断方式一致。
;(function () {
  var INDEX_PREFIX = 'docsify.search.index'
  var EXPIRE_PREFIX = 'docsify.search.expires'

  var TEXT = {
    building: {
      '/en/': 'Building the search index, please search again later.',
      '/': '正在建立索引，请稍后再次搜索。',
    },
    ready: {
      '/en/': 'The search index is ready, you can search now.',
      '/': '已建立索引，可以进行搜索了。',
    },
  }

  // docsify 使用 hash 路由，例如 #/en/FAQ
  function currentPath() {
    var hash = location.hash.replace(/^#/, '')
    return hash || '/'
  }

  function pick(map) {
    return currentPath().indexOf('/en/') === 0 ? map['/en/'] : map['/']
  }

  // 扫描 localStorage：docsify 的索引键形如 docsify.search.index[/namespace]
  function findKey(prefix) {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        if (key && key.indexOf(prefix) === 0) return key
      }
    } catch (e) {}
    return null
  }

  function hasIndex() {
    var key = findKey(INDEX_PREFIX)
    if (!key) return false
    var value = null
    try {
      value = localStorage.getItem(key)
    } catch (e) {
      return false
    }
    // 空索引（{}）视为尚未建立
    if (!value || value === '{}') return false
    // 索引已过期：插件会重新建立
    var expireKey = findKey(EXPIRE_PREFIX)
    if (expireKey) {
      var expire = Number(localStorage.getItem(expireKey))
      if (expire && expire < Date.now()) return false
    }
    return true
  }

  var el = null
  var hideTimer = null
  var checkTimer = null

  function ensureEl() {
    if (el) return el
    var wrap = document.querySelector('.search')
    if (!wrap) return null
    el = document.createElement('div')
    el.className = 'search-status'
    wrap.appendChild(el)
    return el
  }

  function show(text, sticky) {
    var node = ensureEl()
    if (!node) return
    node.textContent = text
    node.classList.add('show')
    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
    if (!sticky) {
      hideTimer = setTimeout(function () {
        if (el) el.classList.remove('show')
      }, 3000)
    }
  }

  function start() {
    // 已经有索引（或本次会话已提示过）就不再打扰
    if (hasIndex()) return
    show(pick(TEXT.building), true)
    checkTimer = setInterval(function () {
      if (hasIndex()) {
        clearInterval(checkTimer)
        checkTimer = null
        show(pick(TEXT.ready), false)
      }
    }, 500)
  }

  // .search 由搜索插件创建，等它出现后再插入提示
  var tries = 0
  var waitTimer = setInterval(function () {
    tries++
    if (ensureEl() || tries > 40) {
      clearInterval(waitTimer)
      start()
    }
  }, 100)
})()
