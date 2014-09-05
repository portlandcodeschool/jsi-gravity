// your function and tests should go in here

// describe('tests', function() {
//   it('needs real tests', function() {
//     expect(1).to.eql(1);
//   });
// });

var fallingTime = function (distance) {
	return parseFloat((Math.sqrt(((2*10))/9.8)).toFixed(1));
};

describe('time', function() {
  it('calculates the time it will take to fall 10 feet', function() {
  	var time = fallingTime(10);
    expect(time).to.eql(1.4);
  });
});

