exports.parser = {
  stringParser: function Parser(s) {
    if (s == "true") {
        val = true;
    } else if (s == "false") {
        val = false;
    } else {
        val = "Error";
    }
    return val;
  }
}
