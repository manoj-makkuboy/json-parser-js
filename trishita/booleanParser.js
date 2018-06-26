exports.booleanParser = {
  booleanParser: input => {
    if(input.toLowerCase().startsWith("true")) {
      return [true, input.slice(4)];
    } else if (input.toLowerCase().startsWith("false")) {
      return [false, input.slice(5)];
    }
    return input;
  }
} 