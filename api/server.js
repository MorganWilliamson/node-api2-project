const express = require('express');
const cors = require('cors');
const server = express();

// Router imports will go here
const postsRouter = require('./posts/posts-router');
// const commentsRouter = require('./comments/comments-router');

// server.use goes here
server.use(express.json());
server.use(cors);
// server.use('/api/posts', postsRouter);
// server.use('/api/comments/', commentsRouter);

server.get('/', (req, res) => {
    res.send(`
        <h1>Node API Posts Project</h1>
        <p>The posts below are generated using Node.js</p>
    `)
})

module.exports = server;