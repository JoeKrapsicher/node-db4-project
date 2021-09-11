const express = require('express')

const GalaxyRouter = require('./galaxies/galaxy-router.js')

const server = express();

server.use(express.json());
server.use('/api/galaxies', GalaxyRouter)

module.exports = server;