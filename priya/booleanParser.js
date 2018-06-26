exports.booleanparser = {
  check_boolean: function boolean_parser(string){	
		if (string.toLowerCase() == 'true')
		{
    	return true
		}
		else if (string.toLowerCase() == 'false')
		{
		  return false
		}
		else
			return "error"
  } 
}
 	

