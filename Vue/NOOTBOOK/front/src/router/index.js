import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/starBanner/StarLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/starbanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/starlogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '欢迎'
      }
    }
  ]
})
