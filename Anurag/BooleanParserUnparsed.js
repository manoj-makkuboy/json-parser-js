exports.buParser = {
  boolParser: function boolParserF(dataToParse) {
    console.log("\nBoolean Parser with Unparsed Data by Anurag")
    console.log("Data Passed = " + dataToParse);
    var boolStr;
    var unparsed;
    var length  =dataToParse.length;
    
    if (boolStr= Boolean(dataToParse.match(/^true/i)))
    { 
        boolStr = dataToParse.slice(0,4);
        unparsed = dataToParse.slice(4,length);
        if (boolStr == "true")
        {
            console.log("Parsed value = "+ boolStr);   
            console.log("It is Boolean");
            console.log("Unparsed value = "+ unparsed);
            return [true,dataToParse.substr(4)];
                    }
                    else
                        console.log("It is not Boolean");
                }
                else if (boolStr= Boolean(dataToParse.match(/^false/i)))
                { 
                    boolStr = dataToParse.slice(0,5);
                    unparsed = dataToParse.slice(5,length);
                    if (boolStr == "false")
                    {   
                        console.log("Parsed value = "+ boolStr);
                        console.log("It is Boolean");
                        console.log("Unparsed value = "+ unparsed);
                        return [false,dataToParse.substr(5)];
        }
        else
            console.log("It is not Boolean");
        return[null,dataToParse];
    } 
    console.log("wrong input given");
  }
}
