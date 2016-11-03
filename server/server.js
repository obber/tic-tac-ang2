import express from 'express';
import http from 'http';
import socket from './sockets';

const app = express();
const server = http.Server(app);
const port = 4201;

socket(server);

app.get('/api/hello', (req, res) => {
  res.json({
    success: true,
    message: 'hello world!'
  });
});

server.listen(port);
console.log(`backend server listening on port: ${port}`);
