exports.commaParser = {
  commaParser: toBeParsedString => {
    if (toBeParsedString.startsWith(",")) {
      return [null, toBeParsedString.slice(1)];
    } else {
      return [null, toBeParsedString];
    }
  }
}

