function sandwichCalculator(slicesOfBread, slicesOfCheese){
	var totalnumberofsandwiches = 0;
	totalnumberofsandwiches= Math.floor(slicesOfBread/2);
	if ( slicesOfCheese < totalnumberofsandwiches){
		totalnumberofsandwiches = slicesOfCheese;
	}
	return totalnumberofsandwiches;

}

console.log(sandwichCalculator(111, 123));
