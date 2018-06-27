exports.parser = {
  stringParser: function Parser(s) {
    var ar = [];
    if (s.slice(0,4) == "true") {
      ar.push(true);
      ar.push(s.substr(4))
    }
    else if (s.slice(0,5) == "false") {
        ar.push(false);
        ar.push(s.substr(5))
    }
    else {
      ar.push(null);
      ar.push(s)
    }
    return ar;
  }
}
