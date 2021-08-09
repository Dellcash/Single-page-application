import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Home
  { path: "/", name: 'home', component: () => import('./pages/Home.vue') },

  // Users Page
  {
    path: "/users", name: 'users', component: () => import('./pages/users/Template.vue'), children: [
      { path: '', name: 'users', component: () => import('./pages/users/Index.vue') },
      { path: ':id', name: 'userId', component: () => import('./pages/users/ShowUser.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router