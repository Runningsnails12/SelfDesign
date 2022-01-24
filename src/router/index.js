import { createRouter, createWebHashHistory } from 'vue-router'

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
    component: () => import('@/pages/Tutorial.vue')
  }, {
    name: 'project',
    path: '/project',
    meta: {
      id: 1
    },
    component: () => import('@/pages/Project.vue')
  }, {
    name: 'template',
    path: '/template',
    meta: {
      id: 2
    },
    component: () => import('@/pages/Template.vue')
  }, {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router