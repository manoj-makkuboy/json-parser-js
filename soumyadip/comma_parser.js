function commaParser(string) {
  if(string.startsWith(',')) {
    var result = string.slice(1)
    return [null,result]
    console.log([null,result])
  }else{
    return [null,string]
    console.log([null,result])
  }
}

commaParser("[true,false,true]")