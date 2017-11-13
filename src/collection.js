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
    id_attribute = 'id',
    basePath = '',
    reverse = false,
    sortBy = false,
    sort = (key, a, b) => {
      // console.log(a[key], b[key])
      return a[key] < b[key] ? 1 : -1
    }
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
          total_count: null
        }
      },
      created() {
        if (initial_state) {
          this.add(initial_state)
        }
      },
      computed: {
        $basePath() {
          return typeof basePath === 'function'
            ? basePath()
            : basePath
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
          const request = this.$request(`${this.$basePath}`, {
            responseHeaders: true
          })
          request.then(response => {
            const headers = iteratorToObject(response.headers)
            const total_count_header = headers['collection_total_count']
            this.total_count = total_count_header || response.body.length
            this.add(response.body)
          })
          return request
        },
        async reset() {
          this.models = []
        },
        async add(data) {
          if (data instanceof Array) {
            insertModels(this, data)
          } else {
            insertModel(this, data)
          }
        },
        async delete(id) {
          deleteModel(this, id)
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
        sort() {
          // console.log('sort')
          // console.log({sortBy})
          if (sortBy) {
            const full_data = this.encode()
            full_data.sort(sort.bind(null, sortBy))
            // console.log(full_data)
            this.models.sort(sort.bind(null, sortBy))
          }
          if (this.reverse) {
            this.models.reverse()
          }
        },
        encode() {
          return encodeModels(this)
        }
      }
    })
  }
}

