describe('variables', () => {

  it('shows var, let', () => {
    const x = null;
    var blah = 'blah';

    if (x === null) {
      blah = 'not blah';
      let thisBlahIs_If_BlockScoped = 'if block scoped';
      var anotherBlah = 'another blah';
    }
    expect(anotherBlah).toBe('another blah'); // this works
    // expect(thisBlahIs_If_BlockScoped).toBe(undefined); <- error 
  });
});
