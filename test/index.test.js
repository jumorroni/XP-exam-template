const { Player1 } = require('../src/index');

describe('Players', () => {
  test('Should return the player1 name "X" when is sent by parameter', () => {
    const player1 = new Player1('X');
    expect(player1.name).toBe('X');
  });
});
