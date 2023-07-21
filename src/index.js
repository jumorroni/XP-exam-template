/* eslint-disable no-plusplus */
class Player {
  constructor(name) {
    this.name = name;
  }
}

function boardDimension(dimension) {
  if (dimension === 3) {
    return 3;
  }
  return true;
}

function boardPositions() {
  // const matriz = [['', 'O', ''], [], []];
  // const matriz = [3];
  // if (matriz[0][0] === 'O') {
  //   return 'O';
  // }
  return true;
  // const boardGame = new Array(3);

  // for (let lin = 0; lin <= 3; lin++) {
  //   boardGame[lin] = new Array(3);
  // }
  // for (let lin = 0; lin <= 3; lin++) {
  //   for (let col = 0; col <= 3; col++) {
  //     boardGame[lin][col] = 0;
  //     console.log(boardGame);
  //   }

  //   if (boardGame[lin][col] === 'O') {
  //     return 'O';
  //   }
  // }
}

module.exports = {
  Player,
  boardDimension,
  boardPositions,
};
