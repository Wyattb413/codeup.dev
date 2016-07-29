"use strict";

var numberOfBottles = 99;

do {
	console.log("There are " + numberOfBottles + " bottles of beer on the wall!")
	console.log(numberOfBottles + " bottles of beer!")
	console.log("Take one down!" + "\n" + "Pass it around!")
	numberOfBottles = numberOfBottles - 1
	console.log(numberOfBottles + " bottles of beer on the wall!")
} while (numberOfBottles > 0)