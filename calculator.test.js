const { add, substract, multiply, divide } = require("./calculator");

describe('add numbers', () => {
  test('2 + 3 should give us 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('4 + 0 should give us 4', () => {
    expect(add(4, 0)).toBe(4);
  });

  test('0.1 + 0.1 should give us 0.2', () => {
    expect(add(0.1, 0.1)).toBeCloseTo(0.2);
  })
});

describe('subtruct numbers', () => {
  test('4 - 2 should give us 5', () => {
    expect(substract(4, 2)).toBe(2);
  });

  test('0 - 4 should give us less than 0', () => {
    expect(substract(0, 4)).toBeLessThan(0);
  });

  test('0.4 - 0.1 should give us 0.3', () => {
    expect(substract(0.4, 0.1)).toBeCloseTo(0.3);
  })
});

describe('multiply numbers', () => {
  test('4 * 2 should give us 8', () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test('0 * 4 should give us 0', () => {
    expect(multiply(0, 4)).toBe(0);
  });

  test('0.4 * 0.1 should give us 0.04', () => {
    expect(multiply(0.4, 0.1)).toBeCloseTo(0.04);
  })
});

describe('divide numbers', () => {
  test('4 / 2 should give us 2', () => {
    expect(divide(4, 2)).toBe(2);
  });

  test('0 / 4 should give us 0', () => {
    expect(divide(0, 0)).toBeNaN();
  });

  test('0.4 / 0.1 should give us 4', () => {
    expect(divide(0.4, 0.1)).toBe(4);
  })
});