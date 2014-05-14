// your function and tests should go in here
var calculateFallTime = function (distance) {
	return Math.sqrt((2 * distance) / 9.81);
};


describe('calculate fall time', function() {
  it('should find out the time needed for an object' + 
  	' to fall a given distance', function() {
    expect(calculateFallTime(20)).to.be.closeTo(2.02, 0.005);
  });
  it('rejects negative distance', function() {
  	expect(calculateFallTime(-1)).to.be.eql(NaN);
  });
});
