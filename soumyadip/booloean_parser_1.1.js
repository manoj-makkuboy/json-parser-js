function myunparsedString(string) {

  if(string.toLowerCase().startsWith('true')) {
    var res = string.slice(4);
    console.log([true, res])
    return [true, res];
  }else if(string.toLowerCase().startsWith('false')) {
    var res = string.slice(5);
    console.log([false, res])
    return [false, res];
  }else{
    console.log([undefined, string]);
  }
}

myunparsedString("truesoumya")