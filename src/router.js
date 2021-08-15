import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Home
  { path: "/", name: 'home', component: () => import('./pages/home/Template.vue') },

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
      { path: ':id', name: 'postId', component: () => import('./pages/posts/ShowPost') },
      { path: 'create', name: 'createPost', component: () => import('./pages/posts/CreatePost.vue') }
    ]
  },

  // Menu Pages
  { path: '/menu', name: 'menuTemplate', component: () => import('./pages/menu/Template.vue') },
  { path: '/blog', name: 'blog', component: () => import('./pages/menu/blog/Blog.vue') },
  { path: '/admin', name: 'adminConsole', component: () => import('./pages/menu/admin/Admin.vue') },
  { path: '/about', name: 'aboutMe', component: () => import ('./pages/menu/about/About.vue') }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router