require('dotenv').config()
const express = require('express');
const router = require('./src/routers');
const server = express()

server.use(express.json())
server.use('/api',router)

server.listen(process.env.PORT || 8080)