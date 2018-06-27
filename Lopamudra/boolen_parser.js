function BooleanParser(inputValue){
  var return_value = new Array();
  if (inputValue.toLowerCase().substring(0, 4) === "true"){
    return_value[0] = true;
    return_value[1] = inputValue.substring(4);
    return return_value;
  }
  else if (inputValue.toLowerCase().substring(0, 5) === "false"){
    return_value[0] = false;
    return_value[1] = inputValue.substring(5);
    return return_value;
  }

  return [null,inputValue];
}

var a = process.argv[2];
console.log(BooleanParser(a));