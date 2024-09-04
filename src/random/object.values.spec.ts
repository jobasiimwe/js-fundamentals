const blah = { a: 1, b: 2, c: 3 };

describe('Object.values', () => {
  it('should return an array of values', () => {
    expect(Object.values(blah)).toEqual([1, 2, 3]);
  });

  it('should run includes on object.values', () => {
    expect(Object.values(blah).includes(parseInt('1'))).toBe(true);
  });
});
