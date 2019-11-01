const express = require('express');
const server = express();
// const actionRouter = require()
// const projectRouter = require()

server.use(express.json());
// server.use('/api/action', actionRouter);
// server.use('/api/project', projectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is alive!' });
  });
  
module.exports = server;