const reverseString = (string) => {
  return string.split('').reverse().join('');
}
reverseString('Hello');

module.exports = reverseString;