// 1. import express
const express = require('express')
// 2. create web server
const app = express()

// 4. Listening to GET and POST requests 
//from the client and responding to the client with specific content
app.get('/user', (req, res) => {
  // Call the res.send() method 
  //provided by express to respond to the client with a JSON object
  res.send({ name: 'Tom', age: 20, gender: 'M' })
})
app.post('/user', (req, res) => {
  // Call the res.send() method provided 
  //by express to respond to the client with a text string
  res.send('Request successful')
})
app.get('/', (req, res) => {
  // The query parameters sent by the client can be retrieved via req.query
  // Note: By default, req.query is an empty object
  console.log(req.query)
  res.send(req.query)
})
// Note: The :id here is a dynamic parameter
app.get('/user/:ids/:username', (req, res) => {
  //   res.send(req.params)req.params is the dynamically matched URL parameter, which is also an empty object by default

  console.log(req.params)
  res.send(req.params)
})

// 3. Start the web server
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
