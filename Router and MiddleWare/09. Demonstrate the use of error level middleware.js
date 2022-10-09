const express = require('express')

const app = express()

// 1. Defining routes
app.get('/', (req, res) => {
  // 1.1 Error
  throw new Error('An error has occurred inside the server！')
  res.send('Home page.')
})


// 2. Define error-level middleware that catches 
//exception errors throughout the project, thus preventing the program from crashing
app.use((err, req, res, next) => {
  console.log('Error！' + err.message)
  res.send('Error：' + err.message)
})

//start a server
app.listen(9000, function () {
  console.log('Express server running at http://127.0.0.1')
})
