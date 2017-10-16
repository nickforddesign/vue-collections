import {
  insertModel,
  insertModels,
  deleteModel,
  encodeModels
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
    createPath = '',
    reverse = false,
    sortBy = false,
    sort = (key, a, b) => {
      // console.log('sorting')
      // console.log(a[key], b[key])
      return a[key] < b[key] ? 1 : -1
    }
  }) {
    return new Vue({
      name: 'collection',
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
          const request = this.$request(`${this.$basePath}`)
          request.then(response => {
            this.add(response)
          })
          return request
        },
        async reset() {
          this.models = []
        },
        add(data) {
          console.log({data})
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

