"use strict";

//Ice Cream Cones

var allCones = Math.floor(Math.random() * 50) + 50;

do {
	var cones = Math.floor(Math.random() * 5) + 1;
	console.log(allCones + " Cones Left to Sell")
	console.log(cones + " Cones Sold")
	allCones = allCones - cones
	if (allCones < cones) {
		console.log("I do not have " + cones + " cones to sell, I only have " + allCones)
	} else if (allCones == cones) {
		console.log("I have sold all my cones!")
		cones = allCones
	}
} while (cones < allCones)