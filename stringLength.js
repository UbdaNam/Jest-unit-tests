const stringLength = (string) => {
  if(string.length>=1&&string.length<=10){
    return string.length;
  }
  throw new Error('string should be atleast 1 and not lessthan 10 character');
}

module.exports = stringLength;