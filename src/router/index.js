import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// NavigationDuplicated Console Error
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/visited-news',
    name: 'VisitedNews',
    component: () => import('../views/VisitedNews.vue')
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('../views/News/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
