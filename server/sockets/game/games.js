import Game from '../game/game.js';

export default (games) => {
  /**
   *
   *  Sets up games namespace
   *
   *  @param {socket.io namespace} games
   *
   */
  games.on('connection', socket => {
    console.log('socket connected to game');

    socket.on('connect to game', ({ gameId }) => {
      console.log('connect to game heard. gameId = ', gameId);
    });

    socket.on('disconnect', () => {
      console.log('socket disconnected from queue');
    });
  });
};
