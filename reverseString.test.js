const reverseString = require('./reverseString');

it('reverse string', () => {
 expect(reverseString('hello')).toMatch("olleh")
})