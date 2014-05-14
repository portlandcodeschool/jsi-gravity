// your function and tests should go in here

var fallingTime = function(distance) {
	return Math.sqrt((2*(distance)) / 9.81);	
};


describe('fallingTime()', function() {
  it('calculates how long it takes an object to fall from height of 50 meters', function() {
    expect(fallingTime(50)).to.be.closeTo(3.2, 0.01);
  });

  it('calculates how long it takes an object to fall from height of 1 meter', function() {
    expect(fallingTime(1)).to.be.closeTo(0.45, 0.01);
  });
});

