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

router.beforeEach((to, from, next) => {
  // 每次有路由跳转时,取消掉所有仍在pending的请求
  clearPending()

  // 如果已存在token或者本来就是去的登陆页,就该去哪去哪
  // 如果没token,去的又不是登陆页,就直接跳登陆页
  let token = localStorage.getItem('loginToken')
  if (token && to.name == 'Login') {
    next('Welcome')
  } else if (token || to.name == 'Login') {
    next()
  } else {
    next('Login')
  }
})

export default router