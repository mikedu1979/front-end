const express = require('express')
const app = express()

// 1. importing the middleware for parsing form data body-parser
const parser = require('body-parser')
// 2. Register the middleware with app.use()
app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // If no middleware is configured to parse the form data, 
  //then req.body defaults to undefined
  console.log(req.body)
  res.send('ok')
})

app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
