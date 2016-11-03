export default class Player {
  /**
   *  Player class
   *
   *  @param {integer} id
   *  @param {obj} socket - socket.io instance
   */
  constructor(id, socket) {
    this.id = id;
    this.socket = socket;
    console.log('player ' + id + ' created.');
  }

}
