import Vue from 'vue'
// import { mapGetters } from 'vuex' // this is causing huge builds
import Store from './store'
// import { Model } from 'vue-models'

// let mapGetters

export default class Collection {
  static init(Vue, Vuex) {
    Store.init(Vue, Vuex)
    // mapGetters = process.env.NODE_ENV === 'test'
    //   ? require('vuex').mapGetters
    //   : Vuex.mapGetters
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
        // ...mapGetters([
        //   'models'
        // ])
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
        }
      }
    })
  }
}
