const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1.Import of routing modules
const router = require('./03.router')
// 2. Register the routing module
app.use('/api', router)

// note: app.use(): The purpose of the function is to register the global middleware

app.listen(9020, () => {
  console.log('http://127.0.0.1')
})
