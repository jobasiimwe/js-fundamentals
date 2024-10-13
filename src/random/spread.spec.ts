describe('spread', () => {
  it('spreads objects and updates type', () => {
    const x = { a: '1', b: 2, c: 3 };
    const y = {
      ...x, ...{
        a: parseFloat(x.a.toString()) } };
    expect(y).toEqual({ a: 1, b: 2, c: 3 });
      });
}); 