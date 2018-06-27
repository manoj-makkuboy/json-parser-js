var buParserTest = require('./BooleanParserUnparsed')
var string = process.argv[2];
console.log(buParserTest.buParser.boolParser(string))