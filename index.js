// your function and tests should go in here

var timeCalc = function(D){

	var result;
	if (D < 0){
		result = "No negatives.";
	}

	else { 
 		result = (Math.sqrt((D*2)/ 9.81)  );
	}
	return result;
 };




describe('timeCalc()', function() {
	it('should only calc for posotive distances', function(){
		expect(timeCalc(-1)).to.have.string('negatives.');
	});
});

 describe('timeCalc()', function() {
 	it('should calc time for distance of 2 meters in seconds', function(){
 		expect(timeCalc(2)).to.be.closeTo(0.64, 0.01);
 	});
 });

describe('tests', function() {
  it('needs real tests', function() {
    expect(1).to.eql(1);
  });
});
