const express = require('express');
const cors = require('cors');
const server = express();

// Router imports will go here

// server.use goes here
server.use(express.json());
server.use(cors);
// server.use('/api/posts-router', postsRouter)

module.exports = server;