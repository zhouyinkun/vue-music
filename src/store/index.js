import Vue from 'vue'
import Vuex from 'vuex'

import singer from './singerdetail'
import recommend from './recommenddetail'
import rank from './rankdetail'
import playing from './playing'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    //引入子状态
    singer,
    recommend,
    rank,
    playing,
  }
})
