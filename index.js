/**
 * Calculates the falling time of a point mass for earth gravity
 * @param {number} distance - Drop height in meters, must be > 0.
 *
 * Calculates the time it takes for an object to drop distance
 * using a gravitational contant of 9.81 m/s
 */
var fallingTime = function(distance) {
  var G = 9.81;
  var result;

  // TODO: Handling code for negative numbers and non-numbers

  result = Math.sqrt(2 * distance / G);
  return result;
};


describe('fallingTimeTests', function() {
  it('calculates a fall from height 1 correctly', function() {
    var time = fallingTime(1);
    expect(time).to.be.closeTo(0.45, 0.01);
  });

  it('calculates a fall from height 0 correctly', function() {
    var time = fallingTime(0);
    expect(time).to.equal(0);    
  });

  it('calculates a fall from non-integer height correctly', function() {
    var time = fallingTime(49.56);
    expect(time).to.be.closeTo(3.178, 0.01);
  });

  // TODO:  write tests for corner cases
  it('ensures distance must not be negative');
  it('ensures distance must be a number');
});
