import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'all',
      path: '/category/all',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      name: 'category',
      path: '/category/:categoryname',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      name: 'list',
      path: '/list',
      component: () => import('@/views/ListView.vue'),
    }
  ]
})

export default router;
