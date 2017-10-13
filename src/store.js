import { path, mergeDeepRight } from 'ramda'
import { sort } from './utils'

let Vuex

function getRequestFunction(store) {
  const request = path(['_vm', '$request'], store)

  if (!request) {
    throw ReferenceError('VueRequests plugin is missing')
  }
  return request
}

export default class Store {
  static init(Vue, _Vuex) {
    Vuex = process.env.NODE_ENV === 'test'
      ? require('vuex')
      : _Vuex
  }
  constructor (
    Model,
    id_attribute = '_id',
    basePath = '',
    createPath = '',
    reverse = false,
    sortBy = false
  ) {
    const _basePath = () => {
      let output
      if (typeof basePath === 'string') {
        output = basePath
      } else if (typeof basePath === 'function') {
        output = basePath()
      }
      return output
    }
    const _translate = (data) => {
      return Model
        ? new Model(data).$data
        : data
    }
    const _process = (collection) => {
      let output = collection
      if (sortBy) {
        // const type = model
        //   ? model.schema()[sortBy]
        //   : null
        // const sortFunction = (type === ISODate) ? sortByDate : sort
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

    return new Vuex.Store({
      state: {
        collection: []
      },
      getters: {
        collection: state => {
          return state.collection
        },
        models: state => {
          return state.collection
        }
      },
      mutations: {
        RESET(state) {
          state.collection = []
        },
        FETCH(state, collection) {
          _process(collection).map(model => {
            _insert(state.collection, model)
          })
        },
        ADD(state, model) {
          _insert(state.collection, _translate(model))
        },
        DELETE(state, id) {
          const i = state.collection.findIndex(model => model[id_attribute] === id)
          state.collection.splice(i, 1)
        },
        UPDATE(state, id, data) {
          const i = state.collection.findIndex(model => model[id_attribute] === id)
          state.collection[i] = mergeDeepRight(state.collection[i], data)
          state.collection = _process(state.collection)
        }
      },
      actions: {
        reset({ commit }) {
          commit('RESET')
        },
        fetch({ commit }) {
          const request = getRequestFunction(this)(`${_basePath()}`)
          request.then(response => {
            commit('FETCH', response)
          })
          return request
        },
        add({ commit }, model) {
          commit('ADD', model)
        },
        delete({ commit }, id) {
          commit('DELETE', id)
        }
      }
    })
  }
}
