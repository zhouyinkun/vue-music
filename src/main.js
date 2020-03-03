import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

<<<<<<< HEAD
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


=======
>>>>>>> 52706da33b5ff74aa2de99384cbf0a450a2ce3a8
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
