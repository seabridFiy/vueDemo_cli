import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/minireset.css'
Vue.config.productionTip = false

// 读取本地存储的token


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
