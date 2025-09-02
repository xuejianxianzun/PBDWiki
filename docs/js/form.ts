interface MouseArg {
  type: number
  x: number
  y: number
}

class Form {
  constructor() {
    this.init()

    window.addEventListener('hashchange', () => {
      this.init()
    })
  }

  private init() {
    // 由于 docsify 的特性，需要等一会儿才能获取到所有的元素，所以延迟执行
    window.setTimeout(() => {
      this.getInputs()
      this.bindInputEvents()

      this.addTipEl()
      this.bindTipEvents()
    }, 600)
  }

  /**所有的美化表单元素 */
  // 每个美化的 input 控件后面必定有一个 span 元素
  // label 和 子选项区域则不一定有
  private allBeautifyInput: {
    input: HTMLInputElement
    span: HTMLSpanElement
    label: HTMLLabelElement | null
    subOption: HTMLSpanElement | null
  }[] = []

  // 获取所有的美化控件和它们对应的 span 元素
  private getInputs() {
    const allCheckBox = document.querySelectorAll(
      '.option input[type="checkbox"]'
    ) as NodeListOf<HTMLInputElement>
    const allRadio = document.querySelectorAll(
      '.option input[type="radio"]'
    ) as NodeListOf<HTMLInputElement>
    const checkboxAndRadio = [allCheckBox, allRadio]
    for (const arr of checkboxAndRadio) {
      arr.forEach((input) => {
        let subOption: HTMLSpanElement | null = null
        if (input.classList.contains('checkbox_switch')) {
          subOption = document.querySelector(
            `.subOptionWrap[data-show="${input.name}"]`
          ) as HTMLSpanElement
        }
        this.allBeautifyInput.push({
          input: input,
          span: input.nextElementSibling! as HTMLSpanElement,
          label: document.querySelector(`label[for="${input.id}"]`),
          subOption: subOption,
        })
      })
    }
  }


  // 设置表单里的美化元素的状态
  private initFormBeautify() {
    for (const item of this.allBeautifyInput) {
      const { input, span, label, subOption } = item
      // 重设 label 的高亮状态
      if (label) {
        const method = input.checked ? 'add' : 'remove'
        label.classList[method]('active')
      }

      // 重设子选项区域的显示/隐藏状态
      if (subOption) {
        subOption.style.display = input.checked ? 'inline-flex' : 'none'
      }
    }
  }

  private bindInputEvents() {
    // 为美化的表单控件绑定事件
    for (const item of this.allBeautifyInput) {
      const { input, span } = item

      // 点击美化元素时，点击真实的 input 控件
      span.addEventListener('click', () => {
        input.click()
        this.initFormBeautify()
      })

      // 当美化元素获得焦点，并且用户按下了回车或空格键时，点击真实的 input 控件
      span.addEventListener('keydown', (event) => {
        if (
          (event.code === 'Enter' || event.code === 'Space') &&
          event.target === span
        ) {
          event.stopPropagation()
          event.preventDefault()
          input.click()
          this.initFormBeautify()
        }
      })
    }

    // 设置最小值和最大值的按钮
    const btns = document.querySelectorAll('p .grayButton')
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 查找它的父元素 p 标签里的第一个 input，把按钮的文本设置为 input 的值
        const input = (btn.parentNode as HTMLParagraphElement).querySelector('input[type="text"]') as HTMLInputElement
        input.value = btn.textContent
      })
    })
  }

  // Tip

  private tipEl!: HTMLDivElement

  private addTipEl() {
    const existingTipEl = document.getElementById('tip')
    if (existingTipEl) {
      this.tipEl = existingTipEl as HTMLDivElement
      return
    }

    this.tipEl = document.createElement('div')
    this.tipEl.id = 'tip'
    document.body.append(this.tipEl)
  }

  private bindTipEvents() {
    const tips = document.querySelectorAll(
      '.has_tip'
    ) as NodeListOf<HTMLElement>
    tips.forEach(el => {
      for (const ev of ['mouseenter', 'mouseleave']) {
        el.addEventListener(ev, (event) => {
          const e = (event) as MouseEvent
          const text = el.dataset.tip
          this.showTip(text, {
            type: ev === 'mouseenter' ? 1 : 0,
            x: e.clientX,
            y: e.clientY,
          })
        })
      }
    })
  }

  // 显示中间面板上的提示。参数 mouse 指示鼠标是移入还是移出，并包含鼠标坐标
  private showTip(text: string | undefined, mouse: MouseArg) {
    if (!text) {
      throw new Error('No tip text.')
    }

    if (mouse.type === 1) {
      this.tipEl.innerHTML = text
      this.tipEl.style.left = mouse.x + 30 + 'px'
      this.tipEl.style.top = mouse.y - 30 + 'px'
      this.tipEl.style.display = 'block'
    } else if (mouse.type === 0) {
      this.tipEl.style.display = 'none'
    }
  }
}

new Form()