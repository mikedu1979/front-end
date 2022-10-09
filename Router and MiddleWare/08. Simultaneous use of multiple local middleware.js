const express = require('express')

const app = express()

// 1. Defining middleware functions
const mw1 = (req, res, next) => {
  console.log('The first locally valid middleware is called件')
  next()
}

const mw2 = (req, res, next) => {
  console.log('A second locally valid middleware is called')
  next()
}

// 2. Creating routes
app.get('/', [mw1, mw2], (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})


app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
