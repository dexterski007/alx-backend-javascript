const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('return 5 when 2 + 3', function() {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
  
    it('return 7 when 2.8 and 4', function() {
      expect(calculateNumber('SUM', 2.8, 4)).to.equal(7);
    });

    it('return 7 when 2.8 and 3.8', function() {
      expect(calculateNumber('SUM', 2.8, 3.8)).to.equal(7);
    });

    it('negatives -7 when -2.8 and -3.8', function() {
      expect(calculateNumber('SUM', -2.8, -3.8)).to.equal(-7);
    });

  });

  describe('SUBTRACT', function() {
    it('return -1 when 2 - 3', function() {
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
    });
  
    it('return -1 when 2.8 and 4', function() {
      expect(calculateNumber('SUBTRACT', 2.8, 4)).to.equal(-1);
    });
  
    it('return 2 when 2.8 and 3.8', function() {
      expect(calculateNumber('SUBTRACT', 5.8, 3.8)).to.equal(2);
    });
  
    it('negatives 1 when -2.8 and -3.8', function() {
      expect(calculateNumber('SUBTRACT', -2.8, -3.8)).to.equal(1);
    });
  });

  describe('DIVIDE', function() {
    it('return 2 when 6 / 3', function() {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
  
    it('return 0.75 when 2.8 and 4', function() {
      expect(calculateNumber('DIVIDE', 2.8, 4)).to.equal(0.75);
    });
  
    it('return 2 when 5.8 and 3.2', function() {
      expect(calculateNumber('DIVIDE', 5.8, 3.2)).to.equal(2);
    });
  
    it('negatives 3 when -11.8 and -3.8', function() {
      expect(calculateNumber('DIVIDE', -11.8, -3.8)).to.equal(3);
    });
  
    it('string error when denominator is 0', function() {
      expect(calculateNumber('DIVIDE', -11.8, 0)).to.equal('Error');
    });
  
    it('string error when denominator is near 0', function() {
      expect(calculateNumber('DIVIDE', -11.8, 0.2)).to.equal('Error');
    });
  });
});
