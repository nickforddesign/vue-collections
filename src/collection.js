// import Vue from 'vue'
import Store from './store'

let Vue

export default class Collection {
  static init(_Vue, Vuex) {
    Vue = process.env.NODE_ENV === 'test'
      ? require('vue')
      : _Vue
    Store.init(_Vue, Vuex)
  }
  constructor({
    model,
    id_attribute = '_id',
    basePath = '',
    createPath = '',
    reverse = false,
    sortBy = false
  }) {
    const store = new Store(
      model,
      id_attribute,
      basePath,
      createPath,
      reverse,
      sortBy
    )
    return new Vue({
      name: 'collection',
      store,
      computed: {
        models() {
          return this.$store.getters.models
        }
      },
      methods: {
        fetch() {
          return this.$store.dispatch('fetch')
        },
        reset() {
          return this.$store.dispatch('reset')
        },
        add(model) {
          return this.$store.dispatch('add', model)
        },
        delete(id) {
          return this.$store.dispatch('delete', id)
        },
        find(map) {
          return this.models.find(model => {
            let match = true
            for (let key in map) {
              if (model[key] !== map[key]) {
                match = false
              }
            }
            return match
          })
        },
        filter(map) {
          return this.models.filter(model => {
            let match = true
            for (let key in map) {
              if (model[key] !== map[key]) {
                match = false
              }
            }
            return match
          })
        },
        encode() {
          const Model = model
          return this.models.map(data => {
            return new Model(data).encode()
          })
        }
      }
    })
  }
}
