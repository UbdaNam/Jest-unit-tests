const stringLength = require("./stringLength.js");

test('count string',()=>{
  const text = 'Hello';
  expect(stringLength(text)).toBe(5);
})

test('count string',()=>{
  const text = 'Hello john';
  expect(stringLength(text)).toBeLessThanOrEqual(10);
})

test('count string',()=>{
  const text = 'Hello world';
  expect(() => stringLength(text)).toThrow(Error);
})