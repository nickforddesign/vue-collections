import {
  insertModel,
  insertModels,
  deleteModel,
  encodeModels,
  validateModels,
  iteratorToObject
} from './utils'

let Vue

export default class Collection {
  static init(_Vue) {
    Vue = process.env.NODE_ENV === 'test'
      ? require('vue')
      : _Vue
  }
  constructor({
    model = null,
    query = {},
    id_attribute = 'id',
    basePath = '',
    reverse = false
  }, initial_state = []) {
    if (!Vue) {
      throw new ReferenceError('You must install VueCollections via Vue.use(VueCollections).')
    }
    if (!validateModels(initial_state)) {
      return null
    }
    return new Vue({
      name: 'collection',
      data() {
        return {
          models: [],
          total_count: 0,
          basePath,
          query
        }
      },
      created() {
        if (initial_state) {
          this.add(initial_state)
        }
      },
      computed: {
        $basePath() {
          return typeof this.basePath === 'function'
            ? this.basePath()
            : this.basePath
        },
        $url() {
          return `${this.$basePath}${this.$query_string}`
        },
        $joiner() {
          return this.$basePath.includes('?')
            ? '&'
            : '?'
        },
        $query_string() {
          return this.$query_keys.length
            ? this.$joiner + this.$query_keys.map(key => {
              return `${key}=${JSON.stringify(this.query[key]).replace(/"/g, '')}`
            }, '').join('&')
            : ''
        },
        $query_keys() {
          return Object.keys(this.query)
        },
        Model() {
          return model
        },
        id_attribute() {
          return id_attribute
        },
        reverse() {
          return reverse
        }
      },
      methods: {
        fetch() {
          const request = this.$request(`${this.$url}`, {
            responseHeaders: true
          })
          request.then(response => {
            const headers = iteratorToObject(response.headers)
            const total_count_header = parseInt(headers['collection_total_count'])
            this.total_count = total_count_header || response.body.length
            this.add(response.body)
          })
          return request
        },
        async reset() {
          this.models = []
          return this
        },
        async add(data) {
          const insert = data instanceof Array
            ? insertModels
            : insertModel
          insert(this, data)
          return this
        },
        async delete(id) {
          deleteModel(this, id)
          return this
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
        sort(func) {
          this.models = this.models.sort(func)
          return this
        },
        encode() {
          return encodeModels(this)
        },
        query_set(data) {
          this.query = data
          return this
        },
        query_push(data) {
          this.query = Object.assign({}, this.query, data)
          return this
        },
        query_remove(key) {
          Vue.delete(this.query, key)
          return this
        },
        query_clear() {
          this.query = {}
          return this
        }
      }
    })
  }
}

