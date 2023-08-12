import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import createBlogs from '../views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/createBlogs',
      name: 'createBlogs',
      component: createBlogs
    }
  ]
})

export default router
