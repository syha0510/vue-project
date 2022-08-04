import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'admin',
    component:  () => import ('../layouts/AdminLayout.vue'),
    children: [
      {
      path: '/',
      name: 'home',
      component: () => import ('../views/HomeView.vue'),
      },
      {
        path: '/user/:id',
        name: 'user',
        component: () => import ('../views/UserView.vue'),
        },
]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../layouts/Login.vue'),
    children: [{
        path: '/',
        name: 'formLogin',
        component: () => import ('../views/LoginForm.vue'),
    },
    {
      path: '/register',
      name: 'registerForm',
      component: () => import ('../views/RegisterForm.vue'),
     },  
   ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
