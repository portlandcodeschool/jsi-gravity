/**
* Calculate interest
* @param {distance} Will return unexpected results if not entered in meters
*/


var fallingTime = function (distance) {
	return parseFloat((Math.sqrt(((2*distance))/9.8)).toFixed(1)); 
};

describe('time', function() {
  it('calculates time it will take to fall 10 meters', function() {
    var time = fallingTime(10);
    expect(time).to.eql(1.4);
  });
});