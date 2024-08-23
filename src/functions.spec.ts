var functionObject = {
  function1() {
    return 'function1';
  },
  function2() {
    return 'function2';
  },
  function3() {
    return 'function3';
  },
}

describe('functions', () => {

  it('shows function declaration', () => {
    expect(functionObject.function1()).toBe('function1');
    expect(functionObject.function2()).toBe('function2');
    expect(functionObject.function3()).toBe('function3');
  });
});