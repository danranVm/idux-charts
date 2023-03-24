import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/DemoBar.vue'),
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/DemoPie.vue'),
    },
  ],
})

export default router
