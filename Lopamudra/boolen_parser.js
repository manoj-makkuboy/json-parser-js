function BooleanParser(inputValue){
  if (inputValue.toLowerCase() === "true"){
    return true;
  }
  else if (inputValue.toLowerCase() === "false"){
    return false;
  }
  return 'wrong input';
}

var a = process.argv[2];
console.log(BooleanParser(a));