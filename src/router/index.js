import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import forecast from '../views/forecast'
import Investigation from '../views/Investigation'
import investment from '../views/investment'
import main from '../views/main'
import report from '../views/report'
import stock from '../views/stock'
import other from '../views/other'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: forecast
  },
  {
    path: '/Investigation',
    name: 'Investigation',
    component: Investigation
  },
  {
    path: '/investment',
    name: 'investment',
    component: investment
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/report',
    name: 'report',
    component: report
  },
  {
    path: '/stock',
    name: 'stock',
    component: stock
  },
  {
    path: '/other',
    name: 'other',
    component: other
  },
  
]

const router = new VueRouter({
  routes
})

export default router
