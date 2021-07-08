import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AxialRatio from "../views/AxialRatio"
import TestSetup from "../components/TestSetup"
import ButtonWheel from "../components/ButtonWheel"

const routes = [
  { path: '/AxialRatio', name: 'AxialRatio', component: AxialRatio,
  children: [
    { path: 'TestSetup', component: TestSetup },
    { path: 'ButtonWheel', component: ButtonWheel },
  ]},
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
