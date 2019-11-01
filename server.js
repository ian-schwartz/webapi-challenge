const express = require('express');
const server = express();
const actionRouter = require('./data/actions/actionRouter');
const projectRouter = require('./data/projects/projectRouter');


//custom middleware

function logger(req, res, next) {
    console.log(
      `The Logger: [${new Date().toISOString()}] ${req.method} to ${req.url}`
      );
  
    next();
};

//middleware

server.use(express.json());
server.use(logger);
server.use('/action', actionRouter);
server.use('/project', projectRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is alive!' });
  });
  
module.exports = server;