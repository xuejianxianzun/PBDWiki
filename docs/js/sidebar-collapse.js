// 侧边栏默认折叠二级目录，并在当前页面所在分支上自动展开祖先节点。
window.$docsify.plugins = [].concat(window.$docsify.plugins || [], [
  function (hook, vm) {
    hook.doneEach(function () {
      applySidebarCollapse(vm)
    })
  },
])

function applySidebarCollapse (vm) {
  const sidebar = document.querySelector('.sidebar-nav')
  if (!sidebar) {
    return
  }

  const activeLink = getActiveSidebarLink(sidebar, vm)
  if (!activeLink) {
    return
  }

  const openItems = new Set()
  let currentItem = activeLink.closest('li')
  while (currentItem && currentItem !== sidebar) {
    openItems.add(currentItem)
    currentItem = currentItem.parentElement?.closest('li')
  }

  sidebar.querySelectorAll('li').forEach((item) => {
    item.classList.toggle('sidebar-section-open', openItems.has(item))
  })
}

function getActiveSidebarLink (sidebar, vm) {
  const active = sidebar.querySelector('a.active, li.active > a, li.active a')
  if (active && active.tagName === 'A') {
    return active
  }

  const activeLink = sidebar.querySelector('.active a, .active > a')
  if (activeLink && activeLink.tagName === 'A') {
    return activeLink
  }

  const routePath = normalizeRoutePath(vm?.route?.path)
  if (routePath) {
    const link = Array.from(sidebar.querySelectorAll('a')).find((a) => {
      const href = normalizeRoutePath(a.getAttribute('href'))
      return href === routePath || href.endsWith(routePath)
    })
    if (link) {
      return link
    }
  }

  return null
}

function normalizeRoutePath (path) {
  if (!path) {
    return ''
  }

  return path.split('?')[0].replace(/^#\/?/, '').replace(/^\//, '')
}
