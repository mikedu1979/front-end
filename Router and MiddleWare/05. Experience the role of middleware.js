const express = require('express')
const app = express()

// This is a simplified form of defining global middleware
app.use((req, res, next) => {
  // Get the time when the request arrived at the server
  const time = Date.now()
  // Mount a custom attribute for the req object,
  // thus sharing the time to all routes behind it
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home page.' + req.startTime)
})

app.get('/user', (req, res) => {
  res.send('User page.' + req.startTime)
})

app.listen(9000, () => {
  console.log('http://127.0.0.1')
})
