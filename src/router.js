import { createRouter, createWebHistory } from 'vue-router';
import VistaProcesadorTexto from './views/VistaProcesadorTexto.vue';
import VistaMultipleChoice from './views/VistaMultipleChoice.vue';

const routes = [
  {
    path: '/',
    name: 'procesadorTexto',
    component: VistaProcesadorTexto
  },
  {
    path: '/questions',
    name: 'multipleChoice',
    component: VistaMultipleChoice
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
