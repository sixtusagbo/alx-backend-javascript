const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', function () {
    it('should return the correct sum of 2 integers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return the correct sum of 2 floats', function () {
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
      expect(isNaN(calculateNumber('SUM', NaN, NaN))).to.be.true;
    });
  });

  describe('type == "SUBTRACT"', function () {
    it('should return the correct difference of 2 integers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return the correct difference of 2 floats', function () {
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
      expect(isNaN(calculateNumber('SUBTRACT', NaN, NaN))).to.be.true;
    });
  });

  describe('type == "DIVIDE"', function () {
    it('should return the correct quotient of 2 integers', function () {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('should return the correct quotient of 2 floats', function () {
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
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it('should return the correct quotient of 2 NaNs', function () {
      expect(isNaN(calculateNumber('DIVIDE', NaN, NaN))).to.be.true;
    });
  });
});
