import { createRouter, createWebHistory } from 'vue-router';
import TextProcessorView from './views/TextProcessorView.vue';
import MultipleChoiceView from './views/MultipleChoiceView.vue';

const routes = [
  {
    path: '/',
    name: 'textProcessor',
    component: TextProcessorView
  },
  {
    path: '/questions',
    name: 'multipleChoice',
    component: MultipleChoiceView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
