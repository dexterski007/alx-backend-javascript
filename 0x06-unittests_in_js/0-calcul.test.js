const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('return 5 when 2 + 3', function() {
      assert.strictEqual(calculateNumber(2, 3), 5);
  });
  
  it('return 7 when 2.8 and 4', function() {
    assert.strictEqual(calculateNumber(2.8, 4), 7);
  })

  it('return 7 when 2.8 and 3.8', function() {
    assert.strictEqual(calculateNumber(2.8, 3.8), 7);
  })

  it('negatives -7 when -2.8 and -3.8', function() {
    assert.strictEqual(calculateNumber(-2.8, -3.8), -7);
  })
})
