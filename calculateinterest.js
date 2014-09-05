/**
 * Calculate interest
 *
 * @param {number} principal Number of dollars borrowed
 * @param {number} interest Interest rate, between 0 and 1
 * @param {number} time Number of years
 * @return {number} The interest (not including the principal, obviously)
 */
var calculateInterest = function(principal, interest, time) {
  var base =  Math.E;
  var exponent = interest * time;
  var amount = principal * Math.pow(base, exponent);
  return parseFloat((amount - principal).toFixed(2));
};

describe('calculateInterest()', function() {
  it('calculates interest of $10 borrowed at 4% for 1 year', function() {
    var interest = calculateInterest(10, 0.04, 1);
    expect(interest).to.eql(0.41);
  });

  it('calculates interest of $9000000 at 1% for 20 years', function() {
    var interest = calculateInterest(9000000, 0.01, 20);
    expect(interest).to.eql(1992624.82);
  });
});
