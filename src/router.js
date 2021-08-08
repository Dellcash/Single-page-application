import { createRouter, createWebHistory } from "vue-router";
// import Home from './pages/Home.vue'

const routes = [
  // { path: '/', name: 'home', component: Home }
  { path: "/", name: 'home', component: () => import('./pages/Home.vue') },
  { path: "/user", name: 'users', component: () => import('./pages/users/Index.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router