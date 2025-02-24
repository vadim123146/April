import { createRouter, createWebHistory } from 'vue-router';
import Home from "~/pages/index.vue";
import ProductDetail from "~/pages/productp[id].vue";

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
