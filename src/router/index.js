import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AxialRatio from "../views/AxialRatio"
import TestSetup from "../components/TestSetup"
import ButtonWheel from "../components/ButtonWheel"
import VIEW_NAMES from "../ViewNames";

const routes = [
  { path: VIEW_NAMES.toPath(), name: VIEW_NAMES.ROOT_VIEW_NAME, component: AxialRatio,
  children: [
    { path: VIEW_NAMES.TEST_CONFIG_NAME, component: TestSetup },
    { path: VIEW_NAMES.TEST_EXECUTION_NAME, component: ButtonWheel },
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
