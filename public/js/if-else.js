"use strict";

//Grade Problem

var gradeAvg=((70 + 80 + 95) / 3)

if (gradeAvg >= 80) {
	console.log("You're Awesome!")
} else {
	console.log("You Need to Practice More!")
}

//Heb Problem

var amountRyanPaid=250
var amountCameronPaid=180
var amountGeorgePaid=320
var discount= .35
var total;

if (amountRyanPaid > 200) {
	total=(amountRyanPaid - (amountRyanPaid * discount)) 
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Applied" + ", Final Payment: " + "$" + parseFloat(total).toFixed(2)) 
} else {
	total=(amountRyanPaid)
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + total) 
}

if (amountCameronPaid > 200) {
	total=(amountCameronPaid - (amountCameronPaid * discount)) 
	console.log("Amount Cameron Owes" + " $" + amountCameronPaid + ", Discount was Applied" + ", Final Payment: " + "$" + total) 
} else {
	total=(amountCameronPaid)
	console.log("Amount Cameron Owes" + " $" + amountCameronPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + total) 
}

if (amountGeorgePaid > 200) {
	total=(amountGeorgePaid - (amountGeorgePaid * discount)) 
	console.log("Amount George Owes" + " $" + amountGeorgePaid + ", Discount was Applied" + ", Final Payment: " + "$" + total) 
} else {
	total=(amountGeorgePaid - (amountGeorgePaid * discount)) 
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + total) 
}

//Friend Problem

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin == 1) {
	console.log("Buy a House")
} else {
	console.log("Buy a Car")
}