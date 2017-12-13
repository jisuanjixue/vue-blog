import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component (resolve) {
        require(['../pages/Index.vue'], resolve)
      }
    },
    {
      path: '/articles/:articles_id',
      component (resolve) {
        require(['../pages/Detail.vue'], resolve)
      }
    }
  ]
})
export default router
