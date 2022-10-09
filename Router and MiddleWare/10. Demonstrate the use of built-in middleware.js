const express = require('express')
const app = express()

// Note: For all middleware except error-level middleware, 
//configuration must be done before routing
// The JSON format of the form is parsed through the express.json() middleware
//app.use(express.json())
// The middleware express.urlencoded() 
//is used to parse the url-encoded data in the form
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // At the server, you can use the property req.
  //body to receive the request body data sent by the client

  // By default, if no middleware is configured to parse the form data, 
  //req.body equals undefined by default
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // On the server side, the form data can be retrieved in JSON format 
  //and url-encoded format via req,body
  console.log(req.body)
  //console.log(req)

  res.send('ok')
})

app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
