import socketIo from 'socket.io';
import setupQueue from './queue';

export default (server) => {
  const io = socketIo(server);

  setupQueue(io.of('/queue'));
}
