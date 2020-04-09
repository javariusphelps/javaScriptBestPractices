/*Exercise - Capitalise every element
1. Write a short function to capitalise every element of the array.
2. You must use the Array#map function and the String#uppercase function.
first create an array
map function is variable.map() 

*/


var myArray = ["Tom","Jim","Bob","John"];

function cap(){
	return myArray.map(function(str){
		return str.toUpperCase();
	});

};

console.log(cap());
