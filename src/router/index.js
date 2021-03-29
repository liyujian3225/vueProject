import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/fund'
  },
  {
    path: '/fund',
    name: 'fund',
    component: () => import(/* webpackChunkName: "about" */ '@/views'),
    redirect: '/fund/moneyFund',
    children: [
      {
        path: 'moneyFund',
        name: 'moneyFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/moneyFund'),
        meta: {
          title: '货币型基金',
        }
      },
      {
        path: 'bondFund',
        name: 'bondFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/bondFund'),
        meta: {
          title: '债券型基金',
        }
      },
      {
        path: 'equityFund',
        name: 'equityFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/equityFund'),
        meta: {
          title: '股票型基金',
        }
      },
      {
        path: 'hybridFund',
        name: 'hybridFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/hybridFund'),
        meta: {
          title: '混合型基金',
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
