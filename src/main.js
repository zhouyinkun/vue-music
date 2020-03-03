import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;

import 'common/stylus/index.styl'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
 loading: require('@/common/image/default.png')
})

Vue.use(VueAwesomeSwiper, /* { default global options } */)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
