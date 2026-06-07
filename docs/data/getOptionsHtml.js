const result = []
const options = document.querySelectorAll('.option[data-no]')
options.forEach(option => {
  const no = Number(option.getAttribute('data-no'))
  const name = option.querySelector('*[data-xztext]').innerText.trim()
  const nameKey = option.querySelector('*[data-xztext]').getAttribute('data-xztext').trim()
  const html = option.outerHTML.replaceAll('\n\n', '\n').replaceAll('\n', '\n').trim()
  result.push({ no, name, nameKey, html })
})
console.log(result)