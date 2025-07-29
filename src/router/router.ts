import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: '/category/all',
      // component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'category',
      path: '/category/:categoryName',
      component: () => import('@/views/CategoryView.vue'),
    },
  ]
})

export default router;
