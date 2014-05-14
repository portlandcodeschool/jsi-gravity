// your function and tests should go in here

var timeTheDrop = function(ht) {
	var dropTime;
	grav = 9.81;
	preRoot = (2 * ht) / grav;
	dropTime = Math.pow(preRoot, .5);
	return dropTime;
};

describe('timeTheDrop()', function() {
  it('correctly calculates the duration of a fall ' +
  	'from 10 meters to within .1 seconds', function() {
    expect(timeTheDrop(10)).to.be.closeTo(1.4, .1);
  });

  it('calculates the time of fall from 100 meters ' +
  	'as 4.5 seconds to within .02 seconds', function() {
  	expect(timeTheDrop(100)).to.be.closeTo(4.5, .02);
  	});

  it('rejects a negative height', function() {
  	expect(timeTheDrop(-10)).to.eql(NaN);
  });

  it('rejects a string', function() {
  	expect(timeTheDrop("Smattamy")).to.eql(NaN);
  })
  });

