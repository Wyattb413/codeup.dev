"use strict";

//Grade Problem

var grade1="70"
var grade2="80"
var grade3="95"

if (((grade1 + grade2 + grade3) / 3) >= 80) {
	console.log("You're Awesome!")
} else {
	console.log("You Need to Practice More!")
}

//Heb Problem

var amountRyanPaid=250
var amountCameronPaid=180
var amountGeorgePaid=320

if (amountRyanPaid > 200) {
	var ryanTotal=(amountRyanPaid - (amountRyanPaid * .35)) 
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Applied" + ", Final Payment: " + "$" + ryanTotal) 
} else {
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + ryanTotal) 
}

if (amountCameronPaid > 200) {
	var cameronTotal=(amountCameronPaid - (amountCameronPaid * .35)) 
	console.log("Amount Cameron Owes" + " $" + amountCameronPaid + ", Discount was Applied" + ", Final Payment: " + "$" + cameronTotal) 
} else {
	var cameronTotal=(amountCameronPaid)
	console.log("Amount Cameron Owes" + " $" + amountCameronPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + cameronTotal) 
}

if (amountGeorgePaid > 200) {
	var georgeTotal=(amountGeorgePaid - (amountGeorgePaid * .35)) 
	console.log("Amount George Owes" + " $" + amountGeorgePaid + ", Discount was Applied" + ", Final Payment: " + "$" + georgeTotal) 
} else {
	var georgeTotal=(amountGeorgePaid - (amountGeorgePaid * .35)) 
	console.log("Amount Ryan Owes" + " $" + amountRyanPaid + ", Discount was Not Applied" + ", Final Payment: " + "$" + ryanTotal) 
}

//Friend Problem

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin == 1) {
	console.log("Buy a House")
} 
if (flipACoin == 0) {
	console.log("Buy a Car")
}