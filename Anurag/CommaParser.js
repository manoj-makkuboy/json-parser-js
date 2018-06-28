exports.cParser = {
	commaParser: function commaParser(dataToParse) {
		console.log("\nComma Parser by Anurag")
    	console.log("Data Passed = " + dataToParse);
    	if (dataToParse.startsWith(",")){
    		console.log("Unparsed Value = "+ dataToParse.slice(1));
            return [null,dataToParse.slice(1)];
        }
    	return [null,dataToParse];
	}
}