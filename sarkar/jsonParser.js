var parsers = require('./boolParser')
let toBeParsedString = process.argv[2];
console.log(parsers.boolParser.boolParse(toBeParsedString));