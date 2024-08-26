
describe('comparison', () => {
  it('compares two values', () => {
    if (1 === 1) { // equality operator
      expect(true).toBeTruthy();
    }
  });

  it('=== lies for NaN', () => {
    // lies
    expect(NaN === NaN).toBeFalsy(); // this should have been true
    expect(0 === -0).toBeTruthy(); // this should have been false
    // true
    expect(isNaN(NaN)).toBeTruthy(); // use isNaN instead
    expect(Object.is(NaN, NaN)).toBeTruthy(); // use Object.is instead
    expect(Object.is(0, -0)).toBeFalsy(); // use Object.is instead
  })

  it('objects are stored by reference', () => {
    // object comparison fails
    expect([1, 2] === [1, 2]).toBeFalsy();
    expect({} === {}).toBeFalsy();
    expect((x => x * 2) === (x => x * 2)).toBeFalsy();

    var x = [1, 2];
    var y = x;
    expect(x === y).toBeTruthy();

    // object structural comparison is complex and left to custom implementation
  })
});