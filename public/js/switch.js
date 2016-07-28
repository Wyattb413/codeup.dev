"use strict";

//Walmart Discount

var luckyNumber = Math.floor(Math.random()* 6);
var amountPaid = 60;

switch (luckyNumber) {
	case 0:
		console.log("You Get No Discount");
	break;
	case 1:
		amountPaid = (amountPaid - (amountPaid * .1))
		console.log("You Get 10% Off!" + " Amount You Owe: $" + amountPaid);
	break;
	case 2:
		amountPaid = (amountPaid - (amountPaid * .2))
		console.log("You Get 20% Off!" + " Amount You Owe: $" + amountPaid);
	break;
	case 3:
		amountPaid = (amountPaid - (amountPaid * .35))
		console.log("You Get 35% Off!" + " Amount You Owe: $" + amountPaid);
	break;
	case 4:
		amountPaid = (amountPaid - (amountPaid * .5))
		console.log("You Get 50% Off!" + " Amount You Owe: $" + amountPaid);
	break;
	case 5:
		console.log("You Get Everything for Free!!!");
	break;
}

//Number = Month

var monthNumber = Math.floor(Math.random()* 11 + 1);

switch (monthNumber) {
	case 1:
		console.log("January")
	break;
	case 2:
		console.log("February")
	break;
	case 3:
		console.log("March")
	break;
	case 4:
		console.log("April")
	break;
	case 5:
		console.log("May")
	break;
	case 6:
		console.log("June")
	break;
	case 7:
		console.log("July")
	break;
	case 8:
		console.log("August")
	break;
	case 9:
		console.log("September")
	break;
	case 10:
		console.log("October")
	break;
	case 11:
		console.log("November")
	break;
	case 12:
		console.log("December")
	break;
}