import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'summary',
    component: () => import(/* webpackChunkName: "summary" */ '../views/SummaryView.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/deal',
    name: 'deal',
    component: () => import(/* webpackChunkName: "deal" */ '../views/DealView.vue'),
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
