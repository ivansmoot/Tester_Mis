import { createRouter, createWebHistory } from 'vue-router'
import { clearPending } from '../requests/axios'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta: {
      // 登陆页不需要展示左边栏
      hidden_left_bar: true
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../components/Welcome.vue')
  },
  {
    path: '/home',
    component: () => import('../components/Welcome.vue')
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import('../components/Package.vue'),
  },
  {
    path: '/uid',
    name: 'Uid',
    component: () => import('../components/Uid.vue'),
  },
  {
    path: '/verification',
    name: 'Verification',
    component: () => import('../components/Verification.vue')
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