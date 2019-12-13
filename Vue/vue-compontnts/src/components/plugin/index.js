let Toast = {}

Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center', // 默然显示位置
    duration: '1500' // 持续时间
  }
  for (let property in options) {
    // 使用 options 的配置
    opt[prototype] = options[property] 
  }
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type
    }
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })

    let tpl = new toastTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

export {
  Toast
}