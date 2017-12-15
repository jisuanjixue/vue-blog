// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
// 引入store
import store from './store'
import FastClick from 'fastclick'
// 引入Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// 引入Axios
import axios from 'axios'

Vue.use(MuseUI)
Vue.prototype.$axios = axios
FastClick.attach(document.body)
// vue使用router
Vue.use(VueRouter)

Vue.prototype.$axios = axios.create({
  baseURL: 'http://rap2api.taobao.org'
})
/* eslint-disable no-new */
store.dispatch('loadUser').then(() => {
  new Vue({
    router,
    axios,
    store,
    render: h => h(App)
    // methods: {
    //   checkLogin () {
    //     // 检查是否存在session
    //     if (!this.getCookie('session')) {
    //       // 如果没有登录状态则跳转到登录页
    //       this.$router.push('/login')
    //     } else {
    //       // 否则跳转到登录后的页面
    //       this.$router.push('/user_info')
    //     }
    //   }
    // },
    // // 进入页面时检查用户是否已经登录
    // created () {
    //   this.checkLogin()
    // },
    // // 监听路由检查登录
    // watch: {
    //   '$route': 'checkLogin'
    // }
  }).$mount('#app')
})
