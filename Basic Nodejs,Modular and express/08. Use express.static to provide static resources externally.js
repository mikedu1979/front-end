const express = require('express')
const app = express()

// Here, the express.static() method is called to 
//quickly make static resources available to the public
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(9011, () => {
  console.log('express server running at http://127.0.0.1')
})
