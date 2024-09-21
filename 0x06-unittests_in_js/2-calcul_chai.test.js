const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul.js');

describe('#calculateNumber for type=SUM', function () {
  it('should return the correct sum of 2 integers', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return the correct sum of 2 floats', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return the correct sum of 2 negative integers', function () {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('should return the correct sum of 2 negative floats', function () {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
  it('should return the correct sum of an integer and a float', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return the correct sum of 2 zeros', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
  it('should return the correct sum of 2 NaNs', function () {
    expect(calculateNumber('SUM', NaN, NaN)).to.be.NaN;
  });
});

describe('#calculateNumber for type=SUBTRACT', function () {
  it('should return the correct difference of 2 integers', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return the correct difference of 2 floats', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should return the correct difference of 2 negative integers', function () {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });
  it('should return the correct difference of 2 negative floats', function () {
    expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
  });
  it('should return the correct difference of an integer and a float', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
  it('should return the correct difference of 2 zeros', function () {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
  it('should return the correct difference of 2 NaNs', function () {
    expect(calculateNumber('SUBTRACT', NaN, NaN)).to.be.NaN;
  });
});

describe('#calculateNumber for type=DIVIDE', function () {
  it('should return the correct quotient of 2 integers', function () {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('should return the correct quotient of 2 floats', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should return the correct quotient of 2 negative integers', function () {
    expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
  });
  it('should return the correct quotient of 2 negative floats', function () {
    expect(calculateNumber('DIVIDE', -3.7, -1.6)).to.equal(2);
  });
  it('should return the correct quotient of an integer and a float', function () {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('should return the correct quotient of 2 zeros', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('should return the correct quotient of 2 NaNs', function () {
    expect(calculateNumber('DIVIDE', NaN, NaN)).to.be.NaN;
  });
});
