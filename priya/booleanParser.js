exports.booleanparser = {
  check_boolean: function boolean_parser(string){
    string = string.split('');
		if (string.slice(0,4).join('').toLowerCase() == 'true')
		{
    	return [true, string.slice(4,string.length).join('')]
		}
		else if (string.slice(0,5).join('').toLowerCase() == 'false')
		{
		  return [false,string.slice(5,string.length).join('')]
		}
		else
			 return [undefined,string.join('')]
  } 
}
 	

