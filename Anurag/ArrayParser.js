var boolean = require('./BooleanParserUnparsed');
var comma = require('./CommaParser');

function arrayParser(dataToParse){
		console.log("\nArray Parser by Anurag");
		console.log("Data Passed = "+ dataToParse);
		var booleanResult = [];
		var commaResult = [];
		var unparsed;
		
		if (dataToParse.startsWith("[")) {
			unparsed = dataToParse.slice(1)
			console.log("Unparsed Value = "+ unparsed);

			//Call Boolean Parser with returning the remaining string
			booleanResult = boolean.buParser.boolParser(unparsed);
			//Call CommaParser	with the returning the remaining string after boolean Parser
			comma.cParser.commaParser(booleanResult[1]);
		}
}

var string = process.argv[2];
console.log(arrayParser(string));
