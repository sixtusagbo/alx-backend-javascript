const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the correct sum of 2 integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the correct sum of 2 floats', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the correct sum of 2 negative integers', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('should return the correct sum of 2 negative floats', function () {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it('should return the correct sum of an integer and a float', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the correct sum of a float and an integer', function () {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });
  it('should return the correct sum of 2 zeros', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return the correct sum of an integer and a string', function () {
    assert.strictEqual(calculateNumber(1, '3'), 4);
  });
  it('should return the correct sum of a string and an integer', function () {
    assert.strictEqual(calculateNumber('1', 3), 4);
  });
  it('should return the correct sum of 2 strings', function () {
    assert.strictEqual(calculateNumber('1', '3'), 4);
  });
  it('should return the correct sum when first number is rounded', function () {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });
});

