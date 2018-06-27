var parsersboolean = require('./booleanparse');
var commaparsecheck = require('./commaparser');
var array = process.argv[2];
function arrayparser(array){
	var dummy = [];
	var output = [];
	if(array.startsWith("[")){
		//array.slice(1);
		array = array.slice(1);
		while(!array.startsWith("]")){
			output = parsersboolean.bool.boolfunc(array);
			dummy.push(output[0]);
			array = output[1];
			output = commaparsecheck.comma.commafunc(array);
			array = output[1];
		}		
	}
	return dummy;
}
console.log(arrayparser(array));