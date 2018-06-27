var boolParser = require('./boolParser');
var commaParser = require('./commaParser');

let toBeParsedString = process.argv[2];

function arrayParse(toBeParsedString) {
    console.log('inside array parser');
    let parsedArray = [];
    let tempArray = [];
    while(toBeParsedString.length > 0){
        if(toBeParsedString.startsWith("[")){
            toBeParsedString = toBeParsedString.slice(1);  
        }
        else if(toBeParsedString.startsWith("]")){
            return [parsedArray instanceof Array,parsedArray];
        }
        else{
            tempArray = boolParser.boolParser.boolParse(toBeParsedString);
            if(tempArray[0]!=null){
                parsedArray.push(tempArray[0]);
                toBeParsedString = tempArray[1];
            }
            tempArray = commaParser.commaParser.commaParse(toBeParsedString);
            toBeParsedString = tempArray[1];
        }
    }
}



  console.log(arrayParse(toBeParsedString));