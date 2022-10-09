// This is the routing module
// 1. import express
const express = require('express')

// 2. Creating routing objects
const router = express.Router()

// 3. Mount a specific route
router.get('/user/list', (req, res) => {
  res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. Exporting routing objects outwards
module.exports = router
