<template>
  <div id="app">
    <h1>vue-collections</h1>

    <table class="top">
      <tbody>
        <tr>
          <td width="75%">
            <p>
              The following is a demo of using the vue-collections plugin to 
              fetch models from a simulated REST API. The models are then passed 
              to the vue-models plugin. Fetching collection data will only work 
              if running this demo with npm start, otherwise use the add button 
              to insert stubbed data.
            </p>
          </td>
          <td>
            <div v-if="collection.length">
              <button @click="reset">Clear</button>
            </div>
            <div v-else>
              <!-- No models in collection -->
            </div>
            <button @click="fetch">Fetch All Users</button>
            <button @click="addAll">Add All Users</button>
            <button @click="add(0)">Add User One</button>
            <button @click="add(1)">Add User Two</button>
            <button @click="add(2)">Add User Three</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Vue Binding</h2>

    <div v-if="collection.length">
      <div v-for="(model, index) in collection" :key="index">
        <card :model="model" />
      </div>
    </div>
    <div v-else>
      No models
    </div>

    <h2>Schema Transformation</h2>

    <table>
      <thead>
        <tr>
          <td>
            <h2>raw collection data</h2>
          </td>
          <td>
            <h2>decoded collection</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre>{{ encoded }}</pre>
          </td>
          <td>
            <pre>{{ collection }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Collection } from '../index.esm'
// import { Collection } from '../../dist/vue-collections.esm'
import User from './user'
import Card from './card'
import data from './collection_data'

export default {
  name: 'demo',
  collection() {
    return new Collection({
      basePath: '/users',
      model: User,
      sortBy: 'last_name'
    }, data())
  },
  computed: {
    encoded() {
      return this.$collection.encode()
    }
  },
  methods: {
    fetch() {
      this.$collection.fetch()
        .catch(() => {
          alert('Unable to connect to server')
        })
      // this.$collection.add(data())
      // this.$collection.sort()
    },
    async addAll() {
      // this.$collection.fetch()
      await this.$collection.add(data())
      // this.$collection.sort()
    },
    reset() {
      return this.$collection.reset()
    },
    add(index) {
      this.$collection.add(data()[index])
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  padding: 0 30px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
}

p {
  margin: 0;
  padding-right: 40px;
}

table {
  width: 100%;
  margin-top: 30px;
}

table tbody {
  vertical-align: top;
}

td {
  padding: 0 12px;
  border: 1px solid #ccc;
}

.top {
  padding: 0;
}

.top td {
  padding: 0;
  border: 0;
}
</style>
