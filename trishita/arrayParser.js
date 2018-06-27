var booleanParser = require('./booleanParser');
var commaParser = require('./commaParser');
var toBeParsedString = process.argv[2];

let arrayParser = (toBeParsedString) => {
  var outputArr = [];
  var parsedArray = [];
  if (toBeParsedString.startsWith("[")) {
    toBeParsedString = toBeParsedString.slice(1);
  } else {
    return 'Not an Array';
  }
  while (!toBeParsedString.startsWith("]")) {
    outputArr = commaParser.commaParser.commaParser(toBeParsedString);
    toBeParsedString = outputArr[1];
    outputArr = booleanParser.booleanParser.booleanParser(toBeParsedString);
    toBeParsedString = outputArr[1];
    if (outputArr[0] !== null) {
      parsedArray.push(outputArr[0]);
    }
  }
  return [parsedArray instanceof Array, parsedArray];
}


console.log(arrayParser(toBeParsedString));