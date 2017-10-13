import Vue from 'vue'
import Vuex from 'vuex'
import VueRequests from 'vue-requests'
import VueModels from 'vue-models'
import VueCollections, { Collection } from '../index.esm'
import model from '../demo/user'
import collection_data from '../demo/collection_data'

import tests from './tests'

fetch.mockResponse(JSON.stringify(collection_data()), {
  status: 200
})
Vue.use(Vuex)
Vue.use(VueRequests, {
  root: 'http://localhost:6846'
})
Vue.use(VueModels)
Vue.use(VueCollections, Vuex)

const test_component = new Vue({
  template: '<div/>',
  collection() {
    return new Collection({
      model,
      basePath: 'users',
      // sortBy: 'due_date',
      reverse: true
    })
  },
  created() {
    console.log('fetching')
    this.fetch()
  },
  methods: {
    fetch() {
      return this.$collection.fetch()
    }
  }
})

tests(test_component)
