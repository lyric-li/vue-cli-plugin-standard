import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (404.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    }
  ]
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  if (to.matched.length === 0) {
    next({
      name: '404',
      replace: true
    })
  }
  next()
})

// 全局后置导航守卫
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
