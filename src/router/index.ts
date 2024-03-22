import { createRouter, createWebHistory } from 'vue-router'
import PointsView from '../views/PointsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'points',
      component: PointsView
    },
  ]
})

export default router
