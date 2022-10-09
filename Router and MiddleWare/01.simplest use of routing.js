const express = require('express')
const app = express()

// Mounted Routing
app.get('/login', (req, res) => {
  res.send('hello world.')//http://127.0.0.1:9000/login
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

//start server
app.listen(9000, () => {
  console.log('http://127.0.0.1')
})
