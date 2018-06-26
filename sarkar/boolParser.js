exports.boolParser = {
    boolParse: function boolParse(toBeParsedString) {
      console.log('inside bool parser');
      if(toBeParsedString.startsWith("true")){
          return [true,toBeParsedString.substring(4)];
      }
      else if(toBeParsedString.startsWith("false")){
        return [false,toBeParsedString.substring(5)];
      }
    }
  }