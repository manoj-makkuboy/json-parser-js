function arrayParser(array) {
	var i, parsed_value = []
  var str = array.replace(/[\[\]]/g,'' );
  var result = commaParser(str)
  var undefinedparsed_value_first = myunparsedString(result[1])
  parsed_value.push(undefinedparsed_value_first[0])
  var second = commaParser(undefinedparsed_value_first[1])
  var undefinedparsed_value_second = myunparsedString(second[1])
  parsed_value.push(undefinedparsed_value_second[0])
  var third = commaParser(undefinedparsed_value_second[1])
  var undefinedparsed_value_third = myunparsedString(third[1])
  parsed_value.push(undefinedparsed_value_third[0])
  console.log(parsed_value)
}

function commaParser(string) {
  if(string.startsWith(',')) {
    var result = string.slice(1)
    return [null,result]
  }else{
    return [null,string]
  }
}

function myunparsedString(string) {

  if(string.toLowerCase().startsWith('true')) {
    var res = string.slice(4);
    return [true, res]
  }else if(string.toLowerCase().startsWith('false')) {
    var res = string.slice(5);
    return [false, res]
  }else{
    console.log([undefined, string]);
  }
}

arrayParser("[true,false,true]")