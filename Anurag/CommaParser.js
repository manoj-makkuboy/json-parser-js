exports.cParser = {
	commaParser: function commaParser(dataToParse) {
		console.log("Comma Parser by Anurag")
    	console.log("Data Passed = " + dataToParse);
    	var unparsed;
    	unparsed = dataToParse.split(",");
    	for (var i = 0; i < unparsed.length; i++) {
    		console.log(unparsed[i]);
    	}
    	return unparsed;
	}
}