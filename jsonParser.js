var unitParsers = {

  booleanParser: function booleanParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false;
    if (toBeParsed.match(/^true/) !== null) {
      parsed = true
      unParsed = toBeParsed.replace(/^true/, '')
      isParsed = true;
    }

    if (toBeParsed.match(/^false/) !== null) {
      parsed = false
      unParsed = toBeParsed.replace(/^false/, '')
      isParsed = true
    }

    return {
      parsed, unParsed, isParsed
    }
  },

  commaParser: function commaParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed

    if (toBeParsed.match(/^,/) !== null) {
      parsed = null
      unParsed = toBeParsed.replace(',', '')
    }

    return {
      parsed, unParsed
    }
  },

  colonParser: function colonParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = true

    if (toBeParsed.match(/^:/) !== null) {
      parsed = null
      unParsed = toBeParsed.replace(':', '')
      isParsed = true
    }

    return {
      parsed, unParsed, isParsed
    } 
  },

  nullParser: function nullParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false

    if (toBeParsed.match(/^null/) !== null) {
      parsed = null
      unParsed = toBeParsed.replace(/^null/, '')
      isParsed = true
    }

    return {
      parsed, unParsed, isParsed
    }
  },

  numberParser : function numberParser(toBeParsed){
    let parsed = null;
    let unParsed = toBeParsed;
    let isParsed = false

    let count = 0;
    let currentDigit  = toBeParsed.charAt(count);

    if (!currentDigit.match(/\d/)) {
      return {parsed, unParsed, isParsed}
    }

    parsed = '';
    while (currentDigit.match(/\d/) !== null) {
      parsed = parsed.concat(currentDigit);
      count +=1;
      currentDigit = toBeParsed.charAt(count);
    }
    parsed = parseInt(parsed);
    isParsed = true;
    unParsed = toBeParsed.substr(count);
    return {parsed, unParsed, isParsed}
  },

  stringParser: function stringParser(toBeParsed){
    let unParsed = toBeParsed;
    let parsed = null;
    let index = 1;
    let string = "";
    let isParsed = false;

    if ((unParsed[0] === ("'")) || (unParsed[0] === ("\"")))
      {
       while(!['\'','"'].includes(toBeParsed.charAt(index))){
        s = toBeParsed.charAt(index)
        string = string.concat(s)
        index++
      }
      parsed = string;
      if (parsed !== null){
        isParsed = true
      }
      unParsed = toBeParsed.substr(index+1);
    }
    return {parsed, unParsed, isParsed}
  }
}

var compoundParsers = {

  arrayParser: function arrayParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false

    if (unParsed[0] !== '[') {
      return { parsed, unParsed, isParsed }
    }

    toBeParsed = toBeParsed.replace('[', '')

    parsed = []
    unParsed = toBeParsed
    while (unParsed[0] !== ']') {
      let nullParserReturn = unitParsers.nullParser(unParsed)
      nullParserReturn.isParsed ? parsed.push(nullParserReturn.parsed) : parsed
      unParsed = nullParserReturn.unParsed

      let booleanParserReturn = unitParsers.booleanParser(unParsed)
      booleanParserReturn.parsed !== null ? parsed.push(booleanParserReturn.parsed) : parsed
      unParsed = booleanParserReturn.unParsed

      let commaParserReturn = unitParsers.commaParser(unParsed)
      unParsed = commaParserReturn.unParsed

      let stringParserReturn = unitParsers.stringParser(unParsed)
      stringParserReturn.parsed !== null ? parsed.push(stringParserReturn.parsed) : parsed
      unParsed = stringParserReturn.unParsed

      let numberParserReturn = unitParsers.numberParser(unParsed)
      numberParserReturn.parsed !== null ? parsed.push(numberParserReturn.parsed) : parsed
      unParsed = numberParserReturn.unParsed

      let objectParserReturn = compoundParsers.objectParser(unParsed)
      objectParserReturn.parsed !== null ? parsed.push(objectParserReturn.parsed) : parsed
      unParsed = objectParserReturn.unParsed
    }
    isParsed = true
    unParsed = unParsed.replace(']', '')
    return { parsed, unParsed, isParsed }
  },

  objectParser: function objectParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false
    
    if(unParsed[0] !== '{')
      return { parsed, unParsed, isParsed }

    toBeParsed = toBeParsed.replace('{','')

    parsed = {}
    unParsed = toBeParsed;
    let pair = []
    while (unParsed[0] !== '}') {
      let stringParserReturn = unitParsers.stringParser(unParsed)
      if (stringParserReturn.isParsed)
        pair.push(stringParserReturn.parsed)
      if(pair.length == 2) {
        parsed[pair[0]] = pair[1]
        pair = []
      }
      unParsed = stringParserReturn.unParsed

      let numberParserReturn = unitParsers.numberParser(unParsed)
      if (numberParserReturn.isParsed)
        pair.push(numberParserReturn.parsed)
      if(pair.length == 2) {
        parsed[pair[0]] = pair[1]
        pair = []
      }
      unParsed = numberParserReturn.unParsed

      let booleanParserReturn = unitParsers.booleanParser(unParsed)
      if (booleanParserReturn.isParsed)
        pair.push(booleanParserReturn.parsed)
      if(pair.length == 2) {
        parsed[pair[0]] = pair[1]
        pair = []
      }
      unParsed = booleanParserReturn.unParsed

      let arrayParserReturn = compoundParsers.arrayParser(unParsed)
      if (arrayParserReturn.isParsed)
        pair.push(arrayParserReturn.parsed)
      if(pair.length == 2) {
        parsed[pair[0]] = pair[1]
        pair = []
      }
      unParsed = arrayParserReturn.unParsed

      let commaParserReturn = unitParsers.commaParser(unParsed)
      unParsed = commaParserReturn.unParsed

      let colonParserReturn = unitParsers.colonParser(unParsed)
      unParsed = colonParserReturn.unParsed

    }

    unParsed = unParsed.replace('}', '');
    isParsed = true;
    return { parsed, unParsed, isParsed }
  },

  valueParser: function valueParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false

    let stringParserReturn = unitParsers.stringParser(unParsed)
    if(stringParserReturn.isParsed) {
      parsed = stringParserReturn.parsed
      unParsed = stringParserReturn.unParsed
      isParsed = true
      return { parsed, unParsed, isParsed }
    }
    
    let numberParserReturn = unitParsers.numberParser(unParsed)
    if(numberParserReturn.isParsed) {
      parsed = numberParserReturn.parsed
      unParsed = numberParserReturn.unParsed
      isParsed = true
      return { parsed, unParsed, isParsed }
    }

    let nullParserReturn = unitParsers.nullParser(unParsed)
    if(nullParserReturn.isParsed) {
      parsed = nullParserReturn.parsed
      unParsed = nullParserReturn.unParsed
      isParsed = true
      return { parsed, unParsed, isParsed }
    }    

    let booleanParserReturn = unitParsers.booleanParser(unParsed)
    if(booleanParserReturn.isParsed) {
      parsed = booleanParserReturn.parsed
      unParsed = booleanParserReturn.unParsed
      isParsed = true
      return { parsed, unParsed, isParsed }
    }

    return { parsed, unParsed, isParsed }
  }
}

var jsonParser = {
  jsonParser: function jsonParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed
    let isParsed = false

    if(unParsed[0] === '[') {
      let arrayParserReturn = compoundParsers.arrayParser(unParsed)
      parsed = arrayParserReturn.parsed
      unParsed = arrayParserReturn.unParsed
      isParsed = arrayParserReturn.isParsed
    }
    else if(unParsed[0] === '{') {
      let objectParserReturn = compoundParsers.objectParser(unParsed)
      parsed = objectParserReturn.parsed
      unParsed = objectParserReturn.unParsed
      isParsed = objectParserReturn.isParsed
    }
    else {
      let valueParserReturn = compoundParsers.valueParser(unParsed)
      parsed = valueParserReturn.parsed
      unParsed = valueParserReturn.unParsed
      isParsed = valueParserReturn.isParsed
    }

    return { parsed, unParsed, isParsed }
  }
}

exports.unitParsers = unitParsers
exports.compoundParsers = compoundParsers
exports.jsonParser = jsonParser
