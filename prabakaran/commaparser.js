exports.comma = {
commafunc : function commaparser(comma){
	if(comma.startsWith(",")){
		return [null, comma.slice(1)];
	   }	
	  else {
		return [null, comma];
	   }	
	}
}
