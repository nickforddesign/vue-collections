import { path, mergeDeepRight } from 'ramda'
// import { Model } from 'vue-models'
// import { ISODate } from './types'

import { sort } from './utils'

let Vuex

function getRequestFunction(store) {
  const request = path(['$request'], store._vm)
  if (!request) {
    throw ReferenceError('VueRequests plugin is missing')
  }
  return request
  // return process.env.NODE_ENV === 'test'
  //   ? require('vue-requests').Request
  //   : path(['$request'], store._vm)
}

export default class Store {
  static init(Vue, _Vuex) {
    Vuex = process.env.NODE_ENV === 'test'
      ? require('vuex')
      : _Vuex
  }
  constructor (
    model,
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
      return output
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
          state.collection = _process(collection)
        },
        ADD(state, model) {
          if (reverse) {
            state.collection.unshift(model)
          } else {
            state.collection.push(model)
          }
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
          const req = getRequestFunction(this)(`${_basePath()}`)
          req.then(response => {
            commit('FETCH', response)
          })
          return req
        },
        add({ commit }, model) {
          const req = getRequestFunction(this)(`${_basePath()}/${createPath}`, {
            method: 'POST',
            body: model
          })
          req.then(response => {
            commit('ADD', response)
          })
          return req
        },
        delete({ commit }, id) {
          const req = getRequestFunction(this)(`${_basePath()}/${id}`, {
            method: 'DELETE'
          })
          req.then(response => {
            commit('DELETE', id)
          })
          return req
        }
      }
    })
  }
}
