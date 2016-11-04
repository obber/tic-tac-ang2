import socketIo from 'socket.io';
import setupQueue from './queue/queue.js';
import setupGames from './game/games.js';

export default (server) => {
  const io = socketIo(server);

  setupQueue(io.of('/queue'));
  setupGames(io.of('/game'));
}
