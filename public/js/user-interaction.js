"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var userInput = prompt("What is your name?");
console.log(userInput);
while (userInput == "") {
	alert("I'm going to keep asking till you tell me...");
	userInput = prompt("What is your name?");
} 
console.log(userInput);
// TODO: Show an alert message that welcomes the user based on their input.
var welcomeUser = alert("Welcome " + userInput);
console.log(welcomeUser);
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var doYouLikePizza = confirm("Does " + userInput + " like pizza?");
while (doYouLikePizza == false) {
	doYouLikePizza = confirm("HaHaHa, you're joking! Do you like pizza?");
}
alert("Great! Everyone likes pizza!");