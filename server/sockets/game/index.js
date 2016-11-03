import Player from './player';
import Logic from './logic';

export default class Game {
  constructor({
    socket1,
    socket2
  }) {
    this.player1 = new Player(1, socket1);
    this.player2 = new Player(2, socket2);
    this.logic = new Logic();
    this.initialize();
  }

  initialize() {
    const start = false;

    // after server ready, client should change view and emit 'client ready'
    this.emit('server ready');

    // listen for a client ready signal
    this.listen('client ready', () => {
      // initialize the game by sending the first board state
      this.start();
    });
  }

  start() {
    // client turn over => client is finished making a move
    this.listen('client turn over', (playerId, { tileId }) => {
      try {
        const result = this.logic.addTile(tileId, playerId);
        if (result.status = 'continue') {
          this.emit('server turn over', result);
        } else if (result.status = 'over') {
          this.emit('game over', result);
        } else {
          const err = 'no status found on result. result = ' + result;
          console.error(err);
          this.emit('err', { err });
        }
      } catch (err) {
        err = err.toString();
        this.emit('err', { err });
      }
    });

    this.emit('start', {
      board: this.logic.board
    });
  }

  emit(event, payload) {
    this.player1.socket.emit(event, payload);
    this.player2.socket.emit(event, payload);
  }

  listen(event, cb) {
    // we bind 1 and 2 as the first argument for our cb to give access to which client made the emission
    this.player1.socket.on(event, cb.bind(null, 1));
    this.player2.socket.on(event, cb.bind(null, 2));
  }
}
