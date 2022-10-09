// Importing express modules
const express = require('express')
// Create a server instance of express
const app = express()

// TODO_01：Install and import the two JWT related packages, jsonwebtoken and express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// Allow cross-domain resource sharing
const cors = require('cors')
app.use(cors())

// Middleware for parsing post form data
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：Define secret key, it is recommended to name the key as secretKey
const secretKey = 'itheima34343 No1 ^_^'

// TODO_04：Register middleware for parsing and reducing JWT strings to JSON objects
// Note: Once the express-jwt middleware has been successfully configured, 
//the parsed user information can be mounted on the req.user property
//app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

// Login Interface
app.post('/api/login', function (req, res) {
  // Dump the data from the req.body request body into a userinfo constant
  const userinfo = req.body
  // Login failed
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: 'Login failed！',
    })
  }
  // Login successful
  // TODO_03：After a successful login, the jwt.sign() method is called to generate a JWT string. 
  //and sends it to the client via the token property
  // Parameter 1：Information objects for users
  // Parameter 2：Secret key for encryption
  // Parameter 3：A configuration object that 
  //allows you to configure the validity of the current token
  // Remember: never encrypt a password into a token character
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '10000s' })
  res.send({
    status: 200,
    message: 'Login successful!',
    token: tokenStr, // The token string to be sent to the client
  })
})

// This is an API interface with permissions
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：Get the user information using req.user 
  //and send the user information to the client using the data property
  console.log(req.user)
  res.send({
    status: 200,//
    message: 'Obtain user information successfully！',
    data: req.user, // User information to be sent to the client
  })
})

// TODO_06：Use global error handling middleware to catch errors arising from failed JWT parsing
app.use((err, req, res, next) => {
  // This error was caused by a token parsing failure
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: 'Invalid token',
    })
  }
  res.send({
    status: 500,
    message: 'Unknown error',
  })
})

// Call the app.listen method, specify the port number and start the web server
app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})
