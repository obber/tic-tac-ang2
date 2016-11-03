/**
 *
 *  Game logic
 *
 */
export default class Logic {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.winner = 0;
  }

  addTile(tileId, playerId) {
    /**
     *  addTile
     *  @return {object}
     *
     *  @param {number} tileId - which tile on the board
     *  @param {number} playerId - which player made the move
     */
    const [x, y] = this._idToCoords(tileId);

    if (play !== 1 || play !== 2) {
      throw new Error("The integer 1 or 2 is required for the play parameter in addTile");
    } else if (this.board[x][y] !== 0) {
      throw new Error("that tile is already taken.");
    }

    this.board[x][y] = playerId;
    this._checkWinner();

    return {
      status: this.winner ? 'over' : 'continue',
      winner: this.winner,
      board: this.board
    };

  }

  _idToCoords(id) {
    return [Math.floor(id / 3), id % 3];
  }

  _checkWinner() {
    return this._checkAllRows() && this._checkAllColumns && this._checkDiagnols();
  }

  /**
   *  Reduce an array into a boolean, given every item is a 1, or every item is a 2
   */
  _checkArr(arr) {
    const first = arr[0];
    const over = first && arr.reduce((bool, tile) => {
      return bool && tile === first;
    });
    if (over) {
      this.winner = first;
      return true;
    }
    return false;
  }

  /**
   *
   *  Check Rows for a winner
   *
   */
  _checkRow(rowIndex) {
    const row = this.board[rowIndex];
    return this._checkArr(row);
  }

  _checkAllRows() {
    return this.board.reduce((bool, rowIndex) => {
      return bool || this._checkRow(rowIndex);
    }, false);
  }

  /**
   *
   *  Check Columns for a winner
   *
   */
  _checkColumn(columnIndex) {
    const column = [];
    this.board.forEach(row => {
      column.push(row[columnIndex]);
    });
    return this._checkArr(column);
  }

  _checkAllColumns() {
    this.board.reduce((bool, columnIdx) => {
      return bool || this._checkColumn(columnIndex);
    }, false);
  }

  /**
   *
   *  Check Diagnols
   *
   */
  _checkMajorDiagnol() {
    const major = [];
    this.board.forEach((row, columnIndex) => {
      major.push(row[columnIndex]);
    });
    return this._checkArr(major);
  }

  _checkMinorDiagnol() {
    const minor = [];
    this.board.forEach((row, columnIndex) => {
      minor.push(row[row.length - 1 - columnIndex]);
    });
    return this._checkArr(minor);
  }

  _checkDiagnols() {
    return this._checkMajorDiagnol() && this._checkMinorDiagnol();
  }


}
