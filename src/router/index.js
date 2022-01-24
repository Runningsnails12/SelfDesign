import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/tutorial'
  },
  {
    name: 'tutorial',
    path: '/tutorial',
    meta: {
      id: 0
    },
    component: () => import('@/pages/NoviceTutorial.vue')
  }, {
    name: 'project',
    path: '/project',
    meta: {
      id: 1
    },
    component: () => import('@/pages/ProjectManagement.vue')
  }, {
    name: 'template',
    path: '/template',
    meta: {
      id: 2
    },
    component: () => import('@/pages/RelatedTemplate.vue')
  }, {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;