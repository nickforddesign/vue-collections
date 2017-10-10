# vue-collections

[![Version](https://img.shields.io/npm/v/vue-collections.svg)](#)
[![Build](https://travis-ci.org/nickforddesign/vue-collections.svg?branch=master)](#)
[![Coverage Status](https://coveralls.io/repos/github/nickforddesign/vue-collections/badge.svg?branch=master)](https://coveralls.io/github/nickforddesign/vue-collections?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A better collections plugin for Vue.js

## Installation

``` bash
npm install vue-collections
```

## Setup

```js
import Vue from 'vue'
import VueCollections from 'vue-collections'

Vue.use(VueColections)
```

## Collections

A light implementation of Collections that binds a collection of models to a Vuex instance, and provides some basic methods for CRUD operations.

```js
import { Collection } from 'vue-collections'

export default {
  collection() {
    return new Collection({
      basePath: 'tenants',
      createPath: 'invite'
    })
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      return this.$collection.fetch()
    }
  }
}
```

The `basePath` option will determine the path of the URL following the base path of the API, which is set in ./configs
The `createPath` option is optional and will be appened to the API path following `basePath`, if included.
These options allow you to fetch your collection at `localhost:3456/tenants` and to create new users at `localhost:3456/tenants/invite`.

The main reason why this simple wrapper is useful is that the options you pass to it will maintain the location of the endpoints you need when you want to dispatch CRUD events via `dispatch('fetch')`, `dispatch('create', model)`, `dispatch('update', model)`, or `dispatch('delete', model)`.

The Collection wrapper will also server as a control layer between the websocket server and the Vuex data store, when using websockets to subcribe to a collection of models.


## Build Setup

``` bash
# install dependencies
npm install

# serve demo at localhost:8080
npm start

# run tests with jest
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).