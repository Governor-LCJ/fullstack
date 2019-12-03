import Vue from 'vue'
import Router from 'vue-router'
import Dialog from '@/components/Dialog'
import Loading from '@/components/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/Loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
