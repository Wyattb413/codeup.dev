"use strict";
// //random even number between 10 & 20 upon refresh

do {
	var random = Math.floor((Math.random() * 10) +10);
} while (random % 2 == 1)
console.log(random)