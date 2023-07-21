const { Player, boardDimension, boardPositions } = require('../src/index');

describe('Players', () => {
  test('Should return the player1 name "X" when is sent by parameter', () => {
    const player1 = new Player('X');
    expect(player1.name).toBe('X');
  });

  test('Should return the player2 name "O" when is sent by parameter', () => {
    const player2 = new Player('O');
    expect(player2.name).toBe('O');
  });
});

describe('Board dimension', () => {
  test('Should return "true" when there is a board', () => {
    expect(boardDimension()).toBe(true);
  });

  test('Should return board dimension 3 when is sent by parameter', () => {
    expect(boardDimension(3)).toBe(3);
  });
});

describe('Board positions', () => {
  test('Should return "true" when there is a board position', () => {
    expect(boardPositions()).toBe(true);
  });
});
