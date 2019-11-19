import Vue from 'vue'
import Router from 'vue-router'
import ImageZoom from '@/components/ImageZoom'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImageZoom',
      component: ImageZoom
    }
  ]
})
