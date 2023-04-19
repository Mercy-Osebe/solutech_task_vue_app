import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskIndex from '../views/task/TaskIndex.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/taskIndex',
      name: 'taskIndex',
      component: TaskIndex
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue')
    },
  ]
})

export default router
