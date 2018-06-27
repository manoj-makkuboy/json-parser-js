exports.cParser = {
	commaParser: function commaParser(dataToParse) {
		console.log("Comma Parser by Anurag")
    	console.log("Data Passed = " + dataToParse);
        if (dataToParse.startsWith(",")) {
            return [null,dataToParse.slice(1)];
        }
    	return [null,dataToParse];
	}
}