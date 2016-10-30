import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socketIo(server);
const port = 4201;

app.get('/api/hello', (req, res) => {
  res.json({
    success: true,
    message: 'hello world!'
  });
});

server.listen(port);
console.log(`backend server listening on port: ${port}`);

const queue = io.of('/queue');
queue.on('connection', socket => {
  console.log('socket connected to queue');
  socket.on('disconnect', () => {
    console.log('socket disconnected from queue');
  })
});
