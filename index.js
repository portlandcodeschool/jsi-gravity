// your function and tests should go in here

/*
 * @param {number} some distance in meters
 * @return {number} the time it takes to travel said distance
 */

describe('gravity function', function() {
  it('calculates the time it takes for an object to fall 10m', function() {
    expect(gravity(10)).to.eql(1.43);
  });

  it('test that the output should be a number', function() {
    expect(gravity("someString")).to.not.be.defined;
  });
});

var gravity = function(distance) {
  // Some fancy physics equation to determine the time it takes to travel some distance
  var g = 9.8; // Gravitational constant in m/s^2
  return parseFloat(Math.sqrt(2 * distance / g).toFixed(2));
};

gravity(10);