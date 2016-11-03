import Game from '../game';

export default (queue) => {
  /**
   *
   *  Sets up socket.io events/emitters for queue-related events.
   *
   *  @param {socketIo namespace instance} : queue
   */
  const inQueue = [];

  queue.on('connection', socket => {
    console.log('socket connected to queue');
    inQueue.push(socket);

    if (inQueue.length >= 2) {
      console.log('more than 1 person in queue');
      while (inQueue.length >= 2) {
        let socket1 = inQueue.shift();
        let socket2 = inQueue.shift();
        socket1.emit('found');
        socket2.emit('found');
        new Game({
          socket1,
          socket2
        });
      }
    }

    socket.on('disconnect', () => {
      console.log('socket disconnected from queue');
      inQueue.splice(inQueue.indexOf(socket), 1);
    });
  });
};
