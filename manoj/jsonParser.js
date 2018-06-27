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

    while (unParsed[0] !== ']') {
      let booleanParserReturn = unitParsers.booleanParser(toBeParsed)
      console.log('boolean parser return', booleanParserReturn)
      parsed.push(booleanParserReturn.parsed)
      unParsed = booleanParserReturn.unParsed
    }

    if (unParsed[0] === ']') {
      unParsed = unParsed.replace(']', '')
      return { parsed, unParsed }
    }
  }
}

exports.parsers = unitParsers
exports.compoundParsers = compoundParsers