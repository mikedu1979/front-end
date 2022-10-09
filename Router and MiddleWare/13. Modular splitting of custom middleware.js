const express = require('express')
const app = express()

// 1. Import your own packaged middleware modules
const customBodyParser = require('./14.custom-body-parser')
// 2. Register a custom middleware function as a globally available middleware
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
