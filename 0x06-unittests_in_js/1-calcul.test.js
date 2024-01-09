const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber for SUM', function () {
  it('should return the correct sum of 2 integers', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return the correct sum of 2 floats', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return the correct sum of 2 negative integers', function () {
    assert.equal(calculateNumber('SUM', -1, -3), -4);
  });
  it('should return the correct sum of 2 negative floats', function () {
    assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
  });
  it('should return the correct sum of an integer and a float', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should return the correct sum of 2 zeros', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });
  it('should return the correct sum of 2 NaNs', function () {
    assert.equal(isNaN(calculateNumber('SUM', NaN, NaN)), true);
  });
});

describe('calculateNumber for SUBTRACT', function () {
  it('should return the correct difference of 2 integers', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return the correct difference of 2 floats', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should return the correct difference of 2 negative integers', function () {
    assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
  });
  it('should return the correct difference of 2 negative floats', function () {
    assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
  });
  it('should return the correct difference of an integer and a float', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
  it('should return the correct difference of 2 zeros', function () {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
  it('should return the correct difference of 2 NaNs', function () {
    assert.equal(isNaN(calculateNumber('SUBTRACT', NaN, NaN)), true);
  });
});

describe('calculateNumber for DIVIDE', function () {
  it('should return the correct quotient of 2 integers', function () {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('should return the correct quotient of 2 floats', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should return the correct quotient of 2 negative integers', function () {
    assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
  });
  it('should return the correct quotient of 2 negative floats', function () {
    assert.equal(calculateNumber('DIVIDE', -3.7, -1.6), 2);
  });
  it('should return the correct quotient of an integer and a float', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('should return the correct quotient of 2 zeros', function () {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
  it('should return the correct quotient of 2 NaNs', function () {
    assert.equal(isNaN(calculateNumber('DIVIDE', NaN, NaN)), true);
  });
});
