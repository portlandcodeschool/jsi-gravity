describe("gravity", function() {
  it("is a fundamental law, so tautologies had better work", function() {
    expect(true).toBe(true);
    expect(false).toBeFalsy();
    expect(0).toBeLessThan(1);
    expect(1).not.toBeLessThan(0);
  });
});
