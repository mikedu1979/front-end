const express = require('express')
const app = express()

// Defining the first global middleware
app.use((req, res, next) => {
  console.log('Called the 1st global middleware')
  next()
  
})
// Defining a second global middleware
app.use((req, res, next) => {
  console.log('The 2nd global middleware is called')
  next()
})

//Define a route
app.get('/user', (req, res) => {
  res.send('User page.')
})

app.get('/add', (req, res) => {
  res.send('User page1.')
})

app.listen(9000, () => {
  console.log('http://127.0.0.1')
})
