// your function and tests should go in here

describe('time falling', function() {
  it("calculates time for object to fall 10meters", function() {
    expect(distance(10)).to.eql(1.43);
  });

  it("takes no numbers and not strings", function () {
  	expect(distance("stringInput")).to.not.be.defined;
  });
});

var distance = function(height) {
	// when return is 1.4, test passes
	// here - physics equation for time
	var gravity = 9.8; // meters per second^2
	return parseFloat(Math.sqrt(2 * height / gravity).toFixed(2));

};

distance(10);

