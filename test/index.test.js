const { dummy } = require('../src/index');

describe('Validate the dummy', () => {
  it('Should return "This is a dummy"', () => {
    expect(dummy()).toBe('This is a dummy');
  });
});
