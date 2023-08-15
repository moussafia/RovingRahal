import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ResetPassword from '../views/ResetPassword.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
  ]
})

export default router
