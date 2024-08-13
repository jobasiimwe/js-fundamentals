describe('null and undefined', () => {
  test('null and undefined are different', () => {
    expect(null).not.toBeUndefined();
    expect(undefined).not.toBeNull();
    expect(null).not.toEqual(undefined);
    expect(null).not.toBe(undefined);
  });

  it('both null and undefined are falsy', () => {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    const x = null;
    const y = undefined;
    expect(!x).toBeTruthy();
    expect(!y).toBeTruthy();
  });
});
