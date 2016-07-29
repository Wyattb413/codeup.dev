"use strict";

//1/2 a Number Pyramid

for (var i = 1; i <= 10; i++) {
	var iString = i.toString();
	iString = iString.replace("10", "0");
	console.log(iString.repeat(i));
}
//Random Multiplication
var j = Math.floor((Math.random() * 10) +1);
for (var i = 1 ; i <=10; i++) {
	console.log(j + "x" + i + "=" + (j * i));
}
//Random Numbers Between 20 and 200
for (var i = 1; i <= 10; i++) {
	var r = Math.floor((Math.random() * 180) +20);
	if (r % 2 == 0) {
		console.log(r + " is an Even Number!")
	} else if (r % 2 !=0) {
		console.log(r + " is an Odd Number!")
	}
}
// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }
// var myRandomNumber = randomNumber(20, 201)
// for (var r = 1; r <= 10; i++) {
// 	console.log(randomNumber)
// }

//Decrementing by 5
for (var i = 100; i >= 0; i -= 5) {
	console.log(i)
}