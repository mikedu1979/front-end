const express = require('express')
const app = express()

// // Define the simplest middleware function
const mw = function (req, res, next) {
  console.log('this is the simplest middleware function')
  // Transferring flow relationships, to the next middleware or route
  next()
}
// // Register mw as a globally valid middleware
app.use(mw)

// This is a simplified form of defining global middleware
app.use((req, res, next) => {
  console.log('This is the simplest of the middleware functions')
  next()
})

app.get('/', (req, res) => {
  console.log('Called / This route')
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  console.log('Called /the user route ')
  res.send('User page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
