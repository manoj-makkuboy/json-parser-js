exports.commaParser = {
    commaParse: function commaParse(toBeParsedString) {
      console.log('inside comma parser');
      if(toBeParsedString.startsWith(",")){
          return [null,toBeParsedString.substring(1)];
      }
      return[null,toBeParsedString];
    }
  }