import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/information',
    name: 'information',
    component: Information
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
