// your function and tests should go in here

var calculateTime = function(distance) {
	var base = (2 * distance) / 9.81;
	return Math.pow(base, 0.5);
};

describe('calculateTime()', function() {
	it('calculates the time it takes for an object to fall 30 meters', function() {
		expect(calculateTime(30)).to.be.closeTo(2.4731, 0.0001);
	});
	it('rejects a negative distance', function() {
		expect(calculateTime(-30)).to.eql(NaN);
	});
	it('rejects a distance of zero');
	it('rejects a string');
});