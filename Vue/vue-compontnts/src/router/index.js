import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/page/A'
import Parents from '@/components/views/parents'
import Show from '@/components/form/show'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    },
    {
      path: '/Parents',
      name: 'Parents',
      component: Parents
    },
    {
      path: '/',
      name: 'Show',
      component: Show
    },
    {
      path: '/a',
      name: 'A',
      component: A
    }
  ]
})
