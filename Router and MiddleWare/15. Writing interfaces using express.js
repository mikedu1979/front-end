// importing express
const express = require('express')
// Creating a server instance
const app = express()

// // Configuring middleware for parsing form data
app.use(express.urlencoded({ extended: false }))

// The JSONP interface must be 
//configured before the cors middleware can be configured
app.get('/api/jsonp', (req, res) => {
  // TODO: Define the concrete implementation of the JSONP interface
  // 1. Get the name of the function
  const funcName = req.query.callback
  // 2. Define the data object to be sent to the client
  const data = { name: 'tom', age: 22 }//
  // 3. Splicing out a function call
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. Take the spliced string and respond to the client
  res.send(scriptStr)
})

// Be sure to configure the cors middleware before routing to resolve interface cross-domain issues
const cors = require('cors')
app.use(cors())

// Import of routing modules
const router = require('./16.apiRouter')
// Register the routing module with the app
app.use('/api', router)

// Start the server
app.listen(9000, () => {
  console.log('express server running at http://127.0.0.1')
})
