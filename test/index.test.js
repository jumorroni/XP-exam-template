const { Player } = require('../src/index');

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
