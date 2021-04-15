import { createRouter, createWebHistory } from 'vue-router'

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

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router