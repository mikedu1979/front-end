const express = require('express')
const app = express()
// Importing the querystring module built into Node.js
//https://www.geeksforgeeks.org/node-js-querystring-parse-method/
//The querystring.parse() method is used to parse a URL query string into 
//an object that contains the key and pair values of the query URL.
const qs = require('querystring')

// This is the middleware that parses the form data
app.use((req, res, next) => {
  // Define middleware specific business logic
  // 1. Define a str string that is used to 
  //store the request body data sent by the client
  let str = ''
  // 2. Listening to the data event of the req
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. Listening to the end event of a req
  req.on('end', () => {
    // The complete request body data is stored in str
    // console.log(str)
    // TODO: Parsing request body data from string format to object format
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
