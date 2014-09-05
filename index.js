/**
 * Calculate time falling
 *
 * @param {number} the distance inputed
 * @param {number} constant speed of falling 54m/s
 * @return {number} time falling close to
 */

var calculateFalling = function (distance) {
	var gravity = 9.81;
	var insert = (2*distance/gravity);
	var fallingTime = Math.sqrt(insert);
	return fallingTime;
} 

var test = calculateFalling(54);
console.log(test);

describe('calculateFalling()', function() {
  it('calculates time object takes to fall specific distance of 54 meters', function() {
    var fallingTime = calculateFalling(54);
    expect(fallingTime).to.be.closeTo(3.3,0.5);
  });

  it('calculates time object takes to fall specific distance of 600 meters', function() {
    var fallingTime = calculateFalling(600);
    expect(fallingTime).to.be.closeTo(11,0.5);
  });
});