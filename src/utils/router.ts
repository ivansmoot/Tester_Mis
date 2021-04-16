import { createRouter, createWebHistory } from 'vue-router'
import { clearPending } from './axios'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('../components/Package.vue')
  },
  {
    path: '/uid',
    name: 'Uid',
    component: () => import('../components/Uid.vue')
  }
]

// 路由基本设置
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


// 每次有路由跳转时,取消掉所有仍在pending的请求
router.beforeEach((to, from, next) => {
  clearPending()
  next()
})

export default router