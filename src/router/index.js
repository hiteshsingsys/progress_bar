import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Installation from '../views/Installation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/installation',
    name: 'installation',
    component: Installation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
