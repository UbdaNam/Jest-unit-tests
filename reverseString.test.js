const reverseString = require('./reverseString');

it('reverse string', () => {
  const text = 'hello';
  expect(reverseString(text)).toMatch("olleh")
})