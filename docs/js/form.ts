/// <reference path="./global.d.ts" />

interface MouseArg {
  type: number
  x: number
  y: number
}

class Form {
  constructor() {
    this.init()
  }

  private init() {
    window.$docsify.plugins = ([] as any[]).concat(window.$docsify.plugins || [], [
      (hook: any, vm: any): void => {
        // 在每次 Markdown 渲染完成后执行
        hook.doneEach(() => {
          this.getInputs()
          this.bindInputEvents()
          this.addTipEl()
          this.bindTipEvents()
          this.bindClickOptionCardToToggleSwitch()
        })
      },
    ])
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
      if (input.dataset.bound) continue
      input.dataset.bound = 'true'

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
      if (el.dataset.tipBound === undefined) {
        el.dataset.tipBound = 'true'
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

  /** 点击设置项的卡片时，如果它有一个 checkBox 开关，那么就切换该设置的启用/禁用状态 */
  private bindClickOptionCardToToggleSwitch() {
    const allOptions = document.querySelectorAll('.option') as NodeListOf<HTMLElement>
    allOptions.forEach((option) => {
      window.addEventListener('click', (ev) => {
        if (!(ev.target instanceof HTMLElement)) {
          return
        }
        const target = ev.target

        // 只在点击该设置卡片上的空白区域时才切换开关状态，以避免和卡片上其他元素的事件发生冲突
        // 匹配两种点击的元素：
        // 1. 点击了卡片本身，说明点击在了卡片的空白区域上
        // 2. 点击了子选项容器，这表示该设置已经启用，所以子选项容器显示了出来。此时点击空白处，大概率是点击到了子选项容器上。
        // PS: 不管该设置是否启用，都可以点击到卡片上.只不过子选项容器显示之后，可点击到卡片的区域很小.
        if (
          target === option ||
          target.matches('.subOptionWrap') ||
          target.matches('.optionLine')
        ) {
          // 只查找第一个开关，因为设置的总开关始终是第一个
          const switchEl = option.querySelector(
            'input.need_beautify.checkbox_switch'
          ) as HTMLElement
          if (!switchEl) {
            return
          }

          // 但是有些设置本身没有总开关，子选项里却有开关(例如"标签别名")，所以第一个开关可能是子选项里的开关，需要进一步判断
          // 要求这个 input 的前一个元素是 a.settingNameStyle 标签(也就是设置名称)，这样才能确保它是总开关，而不是子选项的开关
          // 现在我没有执行这个判断（这是有意为之的），这意味着：
          // 点击这个设置卡片的空白区域时，总是会切换第一个开关(不管它是总开关还是子开关)
          switchEl.click()
        }
      })
    })
  }
}

new Form()