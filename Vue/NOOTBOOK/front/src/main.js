// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Icon, ActionSheet, Uploader, Field, Toast, Panel} from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import 'amfe-flexible'

// use: 将组件加载到vue的原型链上
Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader).use(axios)
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // console.log(from)
  // console.log(to)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
