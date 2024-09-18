const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('return 5 when 2 + 3', function() {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
  });
  
  it('return 7 when 2.8 and 4', function() {
    assert.strictEqual(calculateNumber('SUM', 2.8, 4), 7);
  });

  it('return 7 when 2.8 and 3.8', function() {
    assert.strictEqual(calculateNumber('SUM', 2.8, 3.8), 7);
  });

  it('negatives -7 when -2.8 and -3.8', function() {
    assert.strictEqual(calculateNumber('SUM', -2.8, -3.8), -7);
  });

  it('return -1 when 2 - 3', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
  });

  it('return -1 when 2.8 and 4', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 4), -1);
  });

  it('return 2 when 2.8 and 3.8', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 3.8), 2);
  });

  it('negatives 1 when -2.8 and -3.8', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -2.8, -3.8), 1);
  });

  it('return 2 when 6 / 3', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
  });

  it('return 0.75 when 2.8 and 4', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 2.8, 4), 0.75);
  });

  it('return 2 when 5.8 and 3.2', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 5.8, 3.2), 2);
  });

  it('negatives 3 when -11.8 and -3.8', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -11.8, -3.8), 3);
  });

  it('string error when denominator is 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -11.8, 0), 'Error');
  });

  it('string error when denominator is near 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -11.8, 0.2), 'Error');
  });
})
