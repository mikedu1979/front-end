// Importing express modules
const express = require('express')
// Create a server instance of express
const app = express()

// 1. Defining middleware functions
const mw1 = (req, res, next) => {
  console.log('call Local middleware')
  next()
}

// 2. Creating routes
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})

// Call the app.listen method, specify the port number and start the web server
app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
