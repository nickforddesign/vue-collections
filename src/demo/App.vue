<template>
  <div id="app">
    <h1>vue-collections</h1>

    <p>The following is a demo of using the vue-collections plugin to fetch models from a simulated REST API. The models are then passed to the vue-models plugin.</p>

    <div v-if="collection.length">
      <div v-for="(model, index) in $collection.models" :key="index">
        <card :model="model" />
      </div>
      <button @click="reset">Clear</button>
    </div>
    <div v-else>
      No models in collection
      <button @click="fetch">Fetch</button>
    </div>
  </div>
</template>

<script>
import { Collection } from '../index.esm'
import Card from './card'

export default {
  name: 'demo',
  created() {
    console.log(this.$collection)
  },
  collection() {
    return new Collection({
      basePath: '/users'
      // createPath: 'invite'
    })
  },
  methods: {
    fetch() {
      return this.$collection.fetch()
    },
    reset() {
      return this.$collection.reset()
    }
  },
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 30px;
  width: 600px;
  max-width: 100%;
}
</style>
