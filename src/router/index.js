import Vue from 'vue'
import VueRouter from 'vue-router'
import Pet from '@/views/Pet.vue'
import Cats from '@/views/Cats.vue'
import Dogs from '@/views/Dogs.vue'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pets/:species/:id',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
