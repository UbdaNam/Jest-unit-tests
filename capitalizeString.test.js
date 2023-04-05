const capitalizeString = require('./capitalizeString')

test('capitalize string', () => {
  const text = 'hello';
  expect(capitalizeString(text)).toMatch("Hello")
})