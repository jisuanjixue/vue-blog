// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
// 引入Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// 引入Axios
import axios from 'axios'

Vue.use(MuseUI)
Vue.prototype.$http = axios
FastClick.attach(document.body)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
