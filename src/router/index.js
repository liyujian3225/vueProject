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
  // 模块未开发页面
  {
    path: "/undev",
    name: "undev",
    component: () =>
      import(
        /* webpackChunkName: "undev" */ "@/components/systemErrorPage/undev"
        ),
    meta: { title: "该模块未启用" },
  },
  // 500页面
  {
    path: "/systemError",
    name: "systemError",
    component: () =>
      import(
        /* webpackChunkName: "systemError" */ "@/components/systemErrorPage/500"
        ),
    meta: { title: "服务器内部异常" },
  },
  // 404页面
  {
    path: "*",
    name: "notfound",
    component: () =>
      import(
        /* webpackChunkName: "notfound" */ "@/components/systemErrorPage/404"
        ),
    meta: { title: "404" },
  },
]

const customRouter = new VueRouter({
  mode: 'hash',
  routes
})

customRouter.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router
