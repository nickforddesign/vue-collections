// import Vue from 'vue'
// import Store from './store'
import { sort } from './utils'

let Vue

export default class Collection {
  static init(_Vue) {
    Vue = process.env.NODE_ENV === 'test'
      ? require('vue')
      : _Vue
    // Store.init(_Vue, Vuex)
  }
  constructor({
    model = null,
    id_attribute = '_id',
    basePath = '',
    createPath = '',
    reverse = false,
    sortBy = false
  }) {
    const Model = model
    const _translate = (data) => {
      return Model
        ? new Model(data).$data
        : data
    }
    const _process = (collection) => {
      let output = collection
      if (sortBy) {
        const sortFunction = sort
        output = collection.sort(sortFunction.bind(null, sortBy))
      }
      if (reverse) {
        output = collection.reverse()
      }
      if (Model) {
        output = collection.map(data => _translate(data))
      }
      return output
    }
    const _insert = (collection, model) => {
      let match = collection.find(data => data.id === model.id)
      if (match) {
        match = model
      } else {
        const method = reverse
          ? 'unshift'
          : 'push'
        collection[method](model)
      }
    }
    // const store = new Store(
    //   model,
    //   id_attribute,
    //   basePath,
    //   createPath,
    //   reverse,
    //   sortBy
    // )
    return new Vue({
      name: 'collection',
      // store,
      data() {
        return {
          models: []
        }
      },
      computed: {
        $basePath () {
          return typeof basePath === 'function'
            ? basePath()
            : basePath
        }
      },
      methods: {
        fetch() {
          // return this.$store.dispatch('fetch')
          // const request = getRequestFunction(this)(`${_basePath()}`)
          const request = this.$request(`${this.$basePath}`)
          request.then(response => {
            // commit('FETCH', response)
            _process(response).map(model => {
              _insert(this.models, model)
            })
          })
          return request
        },
        reset() {
          this.models = []
          // return this.$store.dispatch('reset')
        },
        add(model) {
          // return this.$store.dispatch('add', model)
          _insert(this.models, _translate(model))
        },
        async delete(id) {
          // return this.$store.dispatch('delete', id)
          const index = this.models.findIndex(model => model[id_attribute] === id)
          if (index > -1) {
            this.models.splice(index, 1)
          }
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
