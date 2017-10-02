import Vue from 'vue'
import VueRequest from 'vue-req'
import * as VueCollection from '../index'
import model from '../demo/user'
import collection_data from './collection_data'

const { Collection } = VueCollection

fetch.mockResponse(JSON.stringify(collection_data), {
  status: 200
})

// jest.mock('@/app', function() {
//   return {
//     $store: {
//       dispatch() {
//         return
//       }
//     }
//   }
// })

// jest.mock('@/utils/request', () => {
//   return () => {
//     const { Deferred } = require('@/utils')
//     const data = require('collection_data').default
//     const promise = new Deferred()
//     promise.resolve(data())
//     return promise.promise
//   }
// })

// console.log(VueCollection.default)

Vue.use(VueCollection.default)

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

describe('VueCollection', () => {
  it('should correctly bind a collection to vue instance', () => {
    // console.log(test_component)
    // console.log(test_component.collection)
    expect(test_component.collection instanceof Array)
      .toBe(true)
  })

  it('should fetch models from a collection', () => {
    expect(test_component.collection.length)
      .toBe(12)
  })

  it('should delete a model from a collection', () => {
    expect.assertions(1);
    return test_component.$collection.delete('587e3faae4e05574a49cdcd6')
      .then(() => {
        expect(test_component.collection.length)
          .toBe(11)
      })
  })

  it('should add a model to a collection', () => {
    expect.assertions(1);
    return test_component.$collection.add({
      _id: '587e3faae4e05574a49cdcd6'
    })
    .then(() => {
      expect(test_component.collection.length)
        .toBe(12)
    })
  })

  it('should reset the collection successfully on destroy', () => {
    test_component.$destroy()
    expect(test_component.collection.length)
      .toBe(0)
  })
})

// write tests to use bound $request method
Vue.use(VueRequest)
