import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index1.vue')
  },
  {
    path: '/book-release',
    name: 'Book-release',
    component: () => import('../components/book-release.vue')
  }
  /*{
    path: '/mailer',
    name: 'mailer',
    component: () => import('../mailer.js')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if(to.hash){
      return {selector: to.hash};
    } else {
      return {x: 0, y: 0};
    }
  },
})

export default router
