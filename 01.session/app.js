const { json } = require('express')
const express = require('express')
const app = express()

// TODO_01：configure the Session middleware
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)

// Hosted static pages
app.use(express.static('./pages'))
// Parsing form data submitted by POST
app.use(express.urlencoded({ extended: false }))

// API interface for login
app.post('/api/login', (req, res) => {
  // Determine if the login information submitted by the user is correct
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    console.log(req.body)
    return res.send({ status: 1, msg: 'Login failed' })
  }

  // TODO_02：Please save the user information after successful login to Session
  // Note: The session attribute can only be called out via req 
  //after the express-session middleware has been successfully configured
  req.session.user = req.body // Information for users
  req.session.islogin = true // User login status

  res.send({ status: 0, msg: 'Login successful' })
})

// Interface for obtaining user names
app.get('/api/username', (req, res) => {
  // TODO_03：get the name of the user from the Session and respond to the client
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// Log out
app.post('/api/logout', (req, res) => {
  // TODO_04：clear Session
  req.session.destroy()
  res.send({
    status: 0,
    msg: 'Logout successful',
  })
})


app.listen(9025, function () {
  console.log('Express server running at http://127.0.0.1:9025')
})
