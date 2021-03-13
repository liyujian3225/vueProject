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
    children: [
      {
        path: 'moneyFund',
        name: 'moneyFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/moneyFund')
      },
      {
        path: 'bondFund',
        name: 'bondFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/bondFund')
      },
      {
        path: 'equityFund',
        name: 'equityFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/equityFund')
      },
      {
        path: 'hybridFund',
        name: 'hybridFund',
        component: () => import(/* webpackChunkName: "about" */ '@/views/hybridFund')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
