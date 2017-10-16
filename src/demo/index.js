import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
// import VueCollections from '../index'
import VueCollections from '../../dist/vue-collections.esm'
import VueRequest from 'vue-requests'
import VueModels from 'vue-models'

Vue.config.productionTip = false

// Vue.use(Vuex)

Vue.use(VueRequest, {
  root: 'http://localhost:6846'
})

Vue.use(VueModels)
Vue.use(VueCollections)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
