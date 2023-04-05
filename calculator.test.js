const { add, substract, multiply, divide } = require("./calculator");

describe('add numbers', () => {
  test('2 + 3 should give us 5', () => {
    const x = 2, y = 3;
    expect(add(x, y)).toBe(5);
  });

  test('4 + 0 should give us 4', () => {
    const x = 4, y = 0;
    expect(add(x, y)).toBe(4);
  });

  test('0.1 + 0.1 should give us 0.2', () => {
    const x = 0.1, y = 0.1;
    expect(add(x, y)).toBeCloseTo(0.2);
  })
});

describe('subtruct numbers', () => {
  test('4 - 2 should give us 5', () => {
    const x = 4, y = 2;
    expect(substract(x, y)).toBe(2);
  });

  test('0 - 4 should give us less than 0', () => {
    const x = 0, y = 4;
    expect(substract(x, y)).toBeLessThan(0);
  });

  test('0.4 - 0.1 should give us 0.3', () => {
    const x = 0.4, y = 0.1;
    expect(substract(x, y)).toBeCloseTo(0.3);
  })
});

describe('multiply numbers', () => {
  test('4 * 2 should give us 8', () => {
    const x = 4, y = 2;
    expect(multiply(x, y)).toBe(8);
  });

  test('0 * 4 should give us 0', () => {
    const x = 0, y = 4;
    expect(multiply(x, y)).toBe(0);
  });

  test('0.4 * 0.1 should give us 0.04', () => {
    const x = 0.4, y = 0.1;
    expect(multiply(x, y)).toBeCloseTo(0.04);
  })
});

describe('divide numbers', () => {
  test('4 / 2 should give us 2', () => {
    const x = 4, y = 2;
    expect(divide(x, y)).toBe(2);
  });

  test('4 / 0 should give us not a number', () => {
    const x = 0, y = 4;
    expect(divide(x, y)).toBe(0);
  });

  test('0.4 / 0.1 should give us 4', () => {
    const x = 0.4, y = 0.1;
    expect(divide(x, y)).toBe(4);
  })
});