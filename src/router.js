import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Home
  { path: "/", name: 'home', component: () => import('./pages/Home.vue') },

  // Users Page
  {
    path: "/users", name: 'usersTemplate', component: () => import('./pages/users/Template.vue'), children: [
      { path: '', name: 'users', component: () => import('./pages/users/Index.vue') },
      { path: ':id', name: 'userId', component: () => import('./pages/users/ShowUser.vue') }
    ]
  },

  // Post Page
  {
    path: '/posts', name: 'postsTemplate', component: () => import('./pages/posts/Template.vue'), children: [
      { path: '', name: 'posts', component: () => import('./pages/posts/Index.vue') },
      { path: ':id', name: 'postId', component: ()=> import ('./pages/posts/ShowPost') },
      { path: 'create', name: 'createPost', component: ()=> import ('./pages/posts/CreatePost.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router