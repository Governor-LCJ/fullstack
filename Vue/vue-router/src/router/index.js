import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Loginjs',
      component: Login
    },
    {
      path: '/mine',
      name: 'Minejs',
      component: Mine
    },
    {
      path: '/detail',
      name: 'Detailjs',
      component: Detail
    }
  ]
})
