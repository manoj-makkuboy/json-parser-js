 function commaParser(string){
 	if (string.startsWith(','))
 	{
      return [null, string.slice(1)];
 	}
 	return [null, string];
 }
 
let string = process.argv[2];
console.log(commaParser(string));
 