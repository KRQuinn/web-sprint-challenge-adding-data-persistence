// build your server here and require it from index.js

const express = require('express')

const server = express()

server.use(express.json())



server.use('*', (req, res, next) => {
  next({ status: 404, message: 'This endpoint does not exist' })
})

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, stack: err.stack || null })
})

module.exports = server