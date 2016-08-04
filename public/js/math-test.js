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
	       number = prompt("Actually enter a number, please")''
		   }

		   return number;
		}


	//Prompts user which math function they would like to execute
		var userInput = prompt("Which math function would you like to carry out:" + "\n" + "Sum of two numbers, Subtraction of two numbers, Multiplication of two numbers, Division of two numbers, Squaring of a number, or Sum of two squares ?")
	
	//Handles if the user entered "Sum of two numbers" as the operation they would like to carry out
		var firstNumber;
		var secondNumber;
		var result;
		firstNumber = getNumberFromUser();
		secondNumber = getNumberFromUser();

		if(userInput == "Sum of two numbers") {
		    result= sumOfTwoNumbers(firstNumber, secondNumber);
		} else if (userInput == "Subtraction of two numbers") {
		    result = differenceOfTwoNumbers(firstNumber, secondNumber);
		} else if (userInput == "Multiplcation of two numbers") {
		    result = multiplcationOfTwoNumbers(firstNumber, secondNumber);
		} else if (userInput == "Division of two numbers") {
		    result = divisionOfTwoNumbers(firstNumber, secondNumber);
		} else if (userInput == "Squaring of a number")
			result = squaringANumber(firstNumber, secondNumber);
		} else (userInput == "Sum of two squares")
			result = sumOfTwoSqaures(firstNumber, secondNumber);

		console.log(result);

	//Handles if the user entered "Subtraction of two numbers" as the operation they would like to carry out
		// if (userInput == "Subtraction of two numbers") {
		// 	var firstNumber = prompt("What is the first number?")
		// 	firstNumber = parseFloat(firstNumber)
		// 	while (isNaN(firstNumber)) {
		// 			alert("You Must enter a number")
		// 			firstNumber = prompt("What is the first number?")
		// 		}
		// } 
		// if (userInput == "Subtraction of two numbers") {
		// 	var secondNumber = prompt("What is the second number?")
		// 	secondNumber = parseFloat(secondNumber)
		// 	while (isNaN(secondNumber)) {
		// 			alert("You Must enter a number")
		// 			secondNumber = prompt("What is the second number?")
		// 		}
		// }

		// var resultOfDifference = differenceOfTwoNumbers(firstNumber, secondNumber);
		// console.log(resultOfDifference);

	//Handles if the user entered "Multiplcation of two numbers" as the operation they would like to carry out
		// if (userInput == "Multiplcation of two numbers") {
		// 	var firstNumber = prompt("What is the first number?")
		// 	firstNumber = parseFloat(firstNumber)
		// 	while (isNaN(firstNumber)) {
		// 			alert("You Must enter a number")
		// 			firstNumber = prompt("What is the first number?")
		// 		}
		// } 
		// if (userInput == "Multiplcation of two numbers") {
		// 	var secondNumber = prompt("What is the second number?")
		// 	secondNumber = parseFloat(secondNumber)
		// 	while (isNaN(secondNumber)) {
		// 			alert("You Must enter a number")
		// 			secondNumber = prompt("What is the second number?")
		// 		}
		// }

		// var resultOfMultiplication = multiplcationOfTwoNumbers (firstNumber, secondNumber);
		// console.log(resultOfMultiplication);

	//Division of two numbers
		// if (userInput == "Multiplcation of two numbers") {
		// 	var firstNumber = prompt("What is the first number?")
		// 	firstNumber = parseFloat(firstNumber)
		// 	while (isNaN(firstNumber)) {
		// 			alert("You Must enter a number")
		// 			firstNumber = prompt("What is the first number?")
		// 		}
		// } 
		// if (userInput == "Multiplcation of two numbers") {
		// 	var secondNumber = prompt("What is the second number?")
		// 	secondNumber = parseFloat(secondNumber)
		// 	while (isNaN(secondNumber)) {
		// 			alert("You Must enter a number")
		// 			secondNumber = prompt("What is the second number?")
		// 		}
		// }

		// var resultOfDivision = divisionOfTwoNumbers (firstNumber, secondNumber);
		// console.log(resultOfDivision);

	// //Squaring a number
	// 	if (userInput == "Squaring of a numbers") {
	// 		var firstNumber = prompt("What is the the number?")
	// 		firstNumber = parseFloat(firstNumber)
	// 		while (isNaN(firstNumber)) {
	// 				alert("You Must enter a number")
	// 				firstNumber = prompt("What is the the number?")
	// 			}
	// 	} 

	// 	var resultOfSquaringANumber = squaringANumber (firstNumber);
	// 	console.log(resultOfSquaringANumber);

	// //Sum of two squares
		
	// 	var resultOfSumOfTwoSquares = sumOfTwoSqaures (2, 4);
	// 	console.log(resultOfSumOfTwoSquares);
// })();