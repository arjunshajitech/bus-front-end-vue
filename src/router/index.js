import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: () => import('../views/user/UserLoginView.vue')
    },
    {
      path: '/signup',
      name: 'UserSignup',
      component: () => import('../views/user/UserSignupView.vue')
    },
    {
      path: '/home',
      name: 'UserHome',
      component: () => import('../views/user/UserHomeView.vue')
    },
    {
      path: '/admin',
      name: 'AdminLogin',
      component: () => import('../views/admin/AdminLoginView.vue')
    },
    {
      path: '/admin/home',
      name: 'AdminHome',
      component: () => import('../views/admin/AdminHomeView.vue')
    },
    {
      path: '/busowner',
      name: 'BusOnwerLogin',
      component: () => import('../views/busowner/BusOnwerLoginView.vue')
    },
    {
      path: '/busowner/home',
      name: 'BusOwnerHome',
      component: () => import('../views/busowner/BusOwnerHomeView.vue')
    }
  ]
})

export default router
