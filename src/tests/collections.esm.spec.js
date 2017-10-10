import Vue from 'vue'
// import VueRequest from 'vue-requests'
import VueCollection, { Collection } from '../index.esm'
import model from '../demo/user'
import collection_data from './collection_data'

import tests from './tests'

fetch.mockResponse(JSON.stringify(collection_data), {
  status: 200
})

Vue.use(VueCollection)

const test_component = new Vue({
  template: '<div/>',
  collection() {
    return new Collection({
      model,
      basePath: 'account/bills',
      sortBy: 'due_date',
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
