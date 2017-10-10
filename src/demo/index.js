import Vue from 'vue'
import App from './App'
import VueCollections from '../index'
import VueRequest from 'vue-requests'
import VueModels from 'vue-models'

Vue.config.productionTip = false

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
