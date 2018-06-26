exports.booleanParser = {
  booleanParser: function booleanParser() {
    const input = process.argv[2];
    if(input.toLowerCase() === "true") {
      return true;
    } else if (input.toLowerCase() === "false") {
      return false;
    }
    return 'Not a boolean Value';
  }
} 