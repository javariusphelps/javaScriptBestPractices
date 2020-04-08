/*Exercise - Pizza
1. Create an array of pizza toppings
2. Write a function that we can call
3. Function should return a string that describes the pizza, example “A delicious
pizza with Cheese and Pepperoni and Garlic and Peppers.”
return creates 1 long string
items need to be in 1 string
need to be able to make it a string but also add the word "add " in between the items
*/



var pizzaToppings = ['cheese', 'chicken', 'sausage', 'tomato sauce'];

function pizza(){
	var extra = pizzaToppings.join(' and ');
	return "The pizza has " +  extra;

};

console.log(pizza());