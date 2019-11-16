import Vue from 'vue'
import Router from 'vue-router'
import D1 from '@/components/view/demo1/father'
import C1 from '@/components/view/demo1/child'
import D2 from '@/components/view/demo2/father'
import C2 from '@/components/view/demo2/child'
import D3 from '@/components/view/demo3/father'
import C3 from '@/components/view/demo3/child'
import D4 from '@/components/view/demo4/father'
import C41 from '@/components/view/demo4/child1'
import C42 from '@/components/view/demo4/child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d1',
      name: 'D1',
      component: D1
    },
    {
      path: '/c1',
      name: 'C1',
      component: C1
    },
    {
      path: '/d2',
      name: 'D2',
      component: D2
    },
    {
      path: '/c2',
      name: 'C2',
      component: C2
    },
    {
      path: '/d3',
      name: 'D3',
      component: D3
    },
    {
      path: '/c3',
      name: 'C3',
      component: C3
    },
    {
      path: '/d4',
      name: 'D4',
      component: D4
    },
    {
      path: '/c41',
      name: 'C41',
      component: C41
    },
    {
      path: '/c42',
      name: 'C42',
      component: C42
    }
  ]
})
