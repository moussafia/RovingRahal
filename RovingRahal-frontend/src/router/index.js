import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue';
import Sign from '../views/Sign.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/sign',
      name :'sign',
      component: Sign
    },
  ]
})

export default router
