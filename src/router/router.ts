import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'category',
      path: '/category/:categoryName',
      component: () => import('@/views/CategoryView.vue'),
    }
  ]
})

export default router;
