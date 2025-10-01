/// <reference path="./global.d.ts" />
var Form = /** @class */ (function () {
    function Form() {
        /**所有的美化表单元素 */
        // 每个美化的 input 控件后面必定有一个 span 元素
        // label 和 子选项区域则不一定有
        this.allBeautifyInput = [];
        this.init();
    }
    Form.prototype.init = function () {
        var _this = this;
        window.$docsify.plugins = [].concat(window.$docsify.plugins || [], [
            function (hook, vm) {
                // 在每次 Markdown 渲染完成后执行
                hook.doneEach(function () {
                    _this.getInputs();
                    _this.bindInputEvents();
                    _this.addTipEl();
                    _this.bindTipEvents();
                });
            },
        ]);
    };
    // 获取所有的美化控件和它们对应的 span 元素
    Form.prototype.getInputs = function () {
        var _this = this;
        var allCheckBox = document.querySelectorAll('.option input[type="checkbox"]');
        var allRadio = document.querySelectorAll('.option input[type="radio"]');
        var checkboxAndRadio = [allCheckBox, allRadio];
        for (var _i = 0, checkboxAndRadio_1 = checkboxAndRadio; _i < checkboxAndRadio_1.length; _i++) {
            var arr = checkboxAndRadio_1[_i];
            arr.forEach(function (input) {
                var subOption = null;
                if (input.classList.contains('checkbox_switch')) {
                    subOption = document.querySelector(".subOptionWrap[data-show=\"".concat(input.name, "\"]"));
                }
                _this.allBeautifyInput.push({
                    input: input,
                    span: input.nextElementSibling,
                    label: document.querySelector("label[for=\"".concat(input.id, "\"]")),
                    subOption: subOption
                });
            });
        }
    };
    // 设置表单里的美化元素的状态
    Form.prototype.initFormBeautify = function () {
        for (var _i = 0, _a = this.allBeautifyInput; _i < _a.length; _i++) {
            var item = _a[_i];
            var input = item.input, span = item.span, label = item.label, subOption = item.subOption;
            // 重设 label 的高亮状态
            if (label) {
                var method = input.checked ? 'add' : 'remove';
                label.classList[method]('active');
            }
            // 重设子选项区域的显示/隐藏状态
            if (subOption) {
                subOption.style.display = input.checked ? 'inline-flex' : 'none';
            }
        }
    };
    Form.prototype.bindInputEvents = function () {
        var _this = this;
        var _loop_1 = function (item) {
            var input = item.input, span = item.span;
            if (input.dataset.bound)
                return "continue";
            input.dataset.bound = 'true';
            // 点击美化元素时，点击真实的 input 控件
            span.addEventListener('click', function () {
                input.click();
                _this.initFormBeautify();
            });
            // 当美化元素获得焦点，并且用户按下了回车或空格键时，点击真实的 input 控件
            span.addEventListener('keydown', function (event) {
                if ((event.code === 'Enter' || event.code === 'Space') &&
                    event.target === span) {
                    event.stopPropagation();
                    event.preventDefault();
                    input.click();
                    _this.initFormBeautify();
                }
            });
        };
        // 为美化的表单控件绑定事件
        for (var _i = 0, _a = this.allBeautifyInput; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
        // 设置最小值和最大值的按钮
        var btns = document.querySelectorAll('p .grayButton');
        btns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                // 查找它的父元素 p 标签里的第一个 input，把按钮的文本设置为 input 的值
                var input = btn.parentNode.querySelector('input[type="text"]');
                input.value = btn.textContent;
            });
        });
    };
    Form.prototype.addTipEl = function () {
        var existingTipEl = document.getElementById('tip');
        if (existingTipEl) {
            this.tipEl = existingTipEl;
            return;
        }
        this.tipEl = document.createElement('div');
        this.tipEl.id = 'tip';
        document.body.append(this.tipEl);
    };
    Form.prototype.bindTipEvents = function () {
        var _this = this;
        var tips = document.querySelectorAll('.has_tip');
        tips.forEach(function (el) {
            if (el.dataset.tipBound === undefined) {
                el.dataset.tipBound = 'true';
                var _loop_2 = function (ev) {
                    el.addEventListener(ev, function (event) {
                        var e = (event);
                        var text = el.dataset.tip;
                        _this.showTip(text, {
                            type: ev === 'mouseenter' ? 1 : 0,
                            x: e.clientX,
                            y: e.clientY
                        });
                    });
                };
                for (var _i = 0, _a = ['mouseenter', 'mouseleave']; _i < _a.length; _i++) {
                    var ev = _a[_i];
                    _loop_2(ev);
                }
            }
        });
    };
    // 显示中间面板上的提示。参数 mouse 指示鼠标是移入还是移出，并包含鼠标坐标
    Form.prototype.showTip = function (text, mouse) {
        if (!text) {
            throw new Error('No tip text.');
        }
        if (mouse.type === 1) {
            this.tipEl.innerHTML = text;
            this.tipEl.style.left = mouse.x + 30 + 'px';
            this.tipEl.style.top = mouse.y - 30 + 'px';
            this.tipEl.style.display = 'block';
        }
        else if (mouse.type === 0) {
            this.tipEl.style.display = 'none';
        }
    };
    return Form;
}());
new Form();
