import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/project', name: 'project', component: () => import('../views/Projects.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
