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
new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
