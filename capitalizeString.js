const capitalizeString = (string) => {
  string = string[0].toUpperCase() + string.substr(1);
  
  return string;
}

module.exports = capitalizeString;