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

module.exports = {
  Player,
  boardDimension,
};
