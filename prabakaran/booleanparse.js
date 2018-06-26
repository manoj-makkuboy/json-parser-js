exports.bool = {
	boolfunc : function boolean(booleanparse){
	  if(booleanparse.toLowerCase() === "true"){
		return true;
	   }	
	  else if(booleanparse.toLowerCase() === "false"){
		return false;
	   }	
	   
	   return "string";
	}
}
