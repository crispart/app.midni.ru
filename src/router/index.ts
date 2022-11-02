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
    path: '/sell',
    name: 'sell',
    component: () => import(/* webpackChunkName: "sell" */ '../views/SellView.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
