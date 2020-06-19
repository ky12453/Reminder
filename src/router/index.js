import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Reminder from '@/views/Reminder.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Reminder',
    component: Reminder
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
