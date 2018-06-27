var unitParsers = {

  booleanParser: function booleanParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed

    if (toBeParsed.match(/^true/) !== null) {
      parsed = true
      unParsed = toBeParsed.replace(/^true/, '')
    }

    if (toBeParsed.match(/^false/) !== null) {
      parsed = false
      unParsed = toBeParsed.replace(/^false/, '')
    }

    return {
      parsed, unParsed
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
  }
}

var compoundParsers = {

  arrayParser: function arrayParser(toBeParsed) {
    let parsed = null
    let unParsed = toBeParsed

    if (unParsed[0] !== '[')
      return { parsed, unParsed }

    toBeParsed = toBeParsed.replace('[', '')

    parsed = []
    unParsed = toBeParsed
    while (unParsed[0] !== ']') {
      let booleanParserReturn = unitParsers.booleanParser(unParsed)
      parsed.push(booleanParserReturn.parsed)
      unParsed = booleanParserReturn.unParsed

      let commaParserReturn = unitParsers.commaParser(unParsed)
      unParsed = commaParserReturn.unParsed
    }

    unParsed = unParsed.replace(']', '')
    return { parsed, unParsed }
  }
}

exports.unitParsers = unitParsers
exports.compoundParsers = compoundParsers