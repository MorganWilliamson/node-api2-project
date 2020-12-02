const express = require('express');
const cors = require('cors');
const server = express();

// Router imports will go here

// server.use goes here
server.use(express.json());
server.use(cors);
// server.use('/api/posts/posts-router', postsRouter)

server.get('/', (req, res) => {
    res.send(`
        <h1>Node API Posts Project</h1>
        <p>The posts below are generated using Node.js</p>
    `)
})

module.exports = server;