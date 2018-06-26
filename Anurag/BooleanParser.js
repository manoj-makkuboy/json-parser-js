exports.bParser2 = {
  boolParser: function boolParser(dataToParse) {
    console.log("Boolean Parser by Anurag")
    console.log("Data Passed = " + dataToParse);
    var boolStr=Boolean(dataToParse.match(/^true$/i) ||dataToParse.match(/^false$/i)); 
    if (boolStr === true) {
    	console.log("It is Boolean");	
    }
    else
    	console.log("It is not Boolean");
  }
}