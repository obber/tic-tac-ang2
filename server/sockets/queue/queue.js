import { randomBytes } from 'crypto';
import { promisify } from 'bluebird';

const randomBytesP = promisify(randomBytes);

export default (queue) => {
  /**
   *
   *  Sets up socket.io events/emitters for queue-related events.
   *
   *  @param {socketIo namespace instance} : queue
   *
   */
  const inQueue = [];

  queue.on('connection', async (socket) => {
    console.log('socket connected to queue');
    inQueue.push(socket);

    if (inQueue.length >= 2) {
      console.log('more than 1 person in queue');
      while (inQueue.length >= 2) {
        const socket1 = inQueue.shift();
        const socket2 = inQueue.shift();
        let gameId = await randomBytesP(26);
        gameId = gameId.toString('hex');
        console.log('game id = ', gameId);
        socket1.emit('found', { gameId });
        socket2.emit('found', { gameId });
        // new Game({
        //   socket1,
        //   socket2
        // });
      }
    }

    socket.on('disconnect', () => {
      console.log('socket disconnected from queue');
      inQueue.splice(inQueue.indexOf(socket), 1);
    });
  });
};
