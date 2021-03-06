const express = require('express')
const cors = require('cors')
const data = require('./collection_data')
const app = express()

const port = 6846

app.use(cors())

app.get('/', (req, res) => {
  console.log('GET: /')
  res.set({
    collection_total_count: 12,
    'Access-Control-Expose-Headers': 'collection_total_count'
  })
  res.send(data())
})

app.get('/users', (req, res) => {
  console.log('GET: /users')
  res.set({
    collection_total_count: 13,
    'Access-Control-Expose-Headers': 'collection_total_count'
  })
  res.send(data())
})

app.listen(port)

console.log('Express server listening on port ' + port)
