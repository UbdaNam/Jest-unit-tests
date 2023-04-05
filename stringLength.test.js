const stringLength = require("./stringLength.js");

test('count string',()=>{
  expect(stringLength('Hello')).toBe(5);
})

test('count string',()=>{
  expect(stringLength('Hello john')).toBeLessThanOrEqual(10);
})

test('count string',()=>{
  expect(() => stringLength('Hello world')).toThrow(Error);
})