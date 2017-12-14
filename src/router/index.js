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
      // 路径指向新建文章页
      path: '/articles/new',
      name: 'New',
      component (resolve) {
        require(['../pages/New.vue'], resolve)
      }
    },
    {
      // 路径指向编辑文章页
      path: '/articles/edit',
      name: 'Edit',
      component (resolve) {
        require(['../pages/Edit.vue'], resolve)
      }
    },
    {
      // 动态路径参数 以冒号开头,路径带有ID这个参数,跳转到详情页
      path: '/articles/:id',
      name: 'Detail',
      component (resolve) {
        require(['../pages/Detail.vue'], resolve)
      }
    }
  ]
})
export default router
