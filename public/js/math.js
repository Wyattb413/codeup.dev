"use strict";
// (function(){

	//Sum of two numbers ~Function
		function sumOfTwoNumbers(number1, number2) {
			if (isNaN (number1) || isNaN (number2)) {
				return("Inputs must be numeric")
			} else {
				return (number1 + number2)
			}
		}

	//Subtraction of two numbers ~Function
		function differenceOfTwoNumbers(number1, number2) {
			if (isNaN (number1) || isNaN (number2)) {
				return("Inputs must be numeric")
			} else {
				return (number1 - number2);
			}
		}

	//Multiplcation of two numbers ~Function
		function multiplcationOfTwoNumbers(number1, number2) {
				if (isNaN (number1) || isNaN (number2)) {
					return("Inputs must be numeric")
				} else {
					return (number1 * number2);
				}
			}

	//Division of two numbers ~Function
		function divisionOfTwoNumbers(number1, number2) {
			if (isNaN (number1) || isNaN (number2)) {
				return("Inputs must be numeric")
			} else {
			return (number1 / number2);
			}
		}

	//Squaring a number ~Function
		function squaringANumber(number1) {
				if (isNaN (number1)) {
					return("Inputs must be numeric")
				} else {
				return multiplcationOfTwoNumbers (number1, number1);
				}
			}

	//Sum of squares ~Function
		function sumOfTwoSqaures(a, b) {
			if (isNaN (a) || isNaN (b)) {
				return("Inputs must be numeric")
			} else {
			var squaringa = multiplcationOfTwoNumbers (a, a);
			var squaringb = multiplcationOfTwoNumbers (b, b);
			return sumOfTwoNumbers (squaringa, squaringb);
			}
		}
	//Gets user's numbers
		function getNumber() {
	   		var number = prompt("Please input a number");
	   		number = parseFloat(number);
	   	while(isNaN(number)) {
	       alert("You must enter a number");
	       number = prompt("Actually enter a number, please");
		   }

		   return number;
		}


	//Prompts user which math function they would like to execute
		var userInput = prompt("Which math function would you like to carry out:" + "\n" + "Adding, Subtraction, Multiply, Division, Squaring, or Sum of two squares ?")
	//Sets userInput to all lowercase
		userInput = userInput.toLowerCase();
	//Checks if userInput is a valid response
		var validResponsesSearch;
		var validresponses = 
		[
			"adding",
			"subtraction",
			"multiply",
			"division",
			"squaring",
			"sum of two squares"
		];
		validResponsesSearch = validresponses.indexOf(userInput);
		console.log(validResponsesSearch);
		if (validResponsesSearch == -1) {
			do {
				alert("You must enter a valid math function");
				userInput = prompt("Which math function would you like to carry out:" + "\n" + "Adding, Subtraction, Multiply, Division, Squaring, or Sum of two squares ?");
				userInput = userInput.toLowerCase();
				validResponsesSearch = userInput;
				validResponsesSearch = validresponses.indexOf(userInput);
			} while (validResponsesSearch == -1);
		}


	//Handles if the user entered "Sum of two numbers" as the operation they would like to carry out

		var firstNumber;
		var secondNumber;
		var result;


		//Checks if squaring, so it only prompts for a single number
		if (userInput == "squaring") {
			firstNumber = getNumber();
		} else {
			firstNumber = getNumber();
			secondNumber = getNumber();
		}

		if(userInput == "adding") {
		    result= sumOfTwoNumbers(firstNumber, secondNumber);
		//works
		} else if (userInput == "subtraction") {
		    result = differenceOfTwoNumbers(firstNumber, secondNumber);
		//doesn't work
		} else if (userInput == "multiply") {
		    result = multiplcationOfTwoNumbers(firstNumber, secondNumber);
		//works
		} else if (userInput == "division") {
		    result = divisionOfTwoNumbers(firstNumber, secondNumber);
		//kinda works...need to get rid of second number prompt
		} else if (userInput == "squaring") {
			result = squaringANumber(firstNumber);
		//works
		} else if (userInput == "sum of two squares") {
			result = sumOfTwoSqaures(firstNumber, secondNumber);
		}

		console.log(result);

// })();