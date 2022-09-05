import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import TablePage from '@/pages/TablePage/TablePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

Vue.use(VueRouter);
const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'table', component: TablePage, path: '/table' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes,
});

export default router;
