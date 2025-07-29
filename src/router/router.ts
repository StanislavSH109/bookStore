import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'all',
      path: '/',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      name: 'category',
      path: '/category/:categoryName',
      component: () => import('@/views/CategoryView.vue'),
    },
  ]
})

export default router;
