// your function and tests should go in here

var timeTheDrop = function(ht) {
	var dropTime;
	grav = 9.81;
	preRoot = (2 * ht) / grav;
	dropTime = Math.pow(preRoot, .5);
	return dropTime;

};

describe('timeTheDrop()', function() {
  it('calculate the time an object takes to fall a' + 
  	'distance of 10 meters to within .1 sec', function() {
    expect(timeTheDrop(10)).to.be.closeTo(1.4, .1);
  });

  it('calculates the time of fall from 100 meters as 4.5', function() {
    expect(timeTheDrop(100)).to.be.closeTo(4.5, .02);
  });

  it('reject a negative height', function() {
    expect(timeTheDrop(-10)).to.be.NaN;
  });

  it('rejects a string as input', function() {
    expect(timeTheDrop('abc')).to.eql(NaN);
  });

});
