import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Home
  { path: "/", name: 'home', component: () => import('./pages/home/Template.vue') },
  { path: '/signin', name: 'signIn', component: () => import('@/components/sections/SignIn.vue') },
  { path: '/signup', name: 'signUp', component: () => import('@/components/sections/SingUp.vue') },

  { path: '/payment', name: 'payment', component: () => import('./pages/home/Payment.vue') },


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
  {
    path: '/admin', name: 'adminConsole', component: () => import('./pages/menu/admin/Admin.vue'), meta: {
      hideNavbar: true,
    }
  },
  { path: '/about', name: 'aboutMe', component: () => import('./pages/menu/about/About.vue') },

  // Blog
  { path: '/blog', name: 'blog', component: () => import('./pages/menu/blog/Blog.vue') },

  // 404 Page
  { path: "/:pathMatch(.*)*", name: "pageNotFound", component: () => import('./pages/home/404.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router