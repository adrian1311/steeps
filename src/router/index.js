import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/registerFly',
    name: 'registerFly',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterFly.vue')
  },
  {
    path: '/searchFly',
    name: 'searchFly',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchFly.vue')
  },{
    path: '/showOneFly',
    name: 'showOneFly',
    component: () => import(/* webpackChunkName: "about" */ '../views/showOneFly.vue'),
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
