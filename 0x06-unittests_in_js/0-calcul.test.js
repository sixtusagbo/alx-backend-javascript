const assert = require('assert');

const calculateNumber = require('./0-calcul.js');

describe('#calculateNumber', function () {
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
  it('should return the correct sum of 1 integer and 1 string', function () {
    assert.strictEqual(calculateNumber(1, '3'), 4);
  });
  it('should return the correct sum of 1 float and 1 string', function () {
    assert.strictEqual(calculateNumber(1.5, '3.7'), 6);
  });
  it('should return the correct sum of 1 string and 1 integer', function () {
    assert.strictEqual(calculateNumber('1', 3), 4);
  });
});
