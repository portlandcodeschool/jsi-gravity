var caculateTime = function (distance){
	var base = (2 * distance / 9.81);
	return Math.pow(base, 0.5);
}
describe('caculateTime()', function () {
	it('caculates the time it takes for an object to fall 30 meters', function () {
		expect(caculateTime(30)).to.be.closeTo(2.4731, .0001);
	});
	it('rejects a negative a distance.');
	it('it returns a distance of 0.')
})
