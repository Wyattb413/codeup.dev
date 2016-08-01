"use strict";

//Sum of two numbers
	function sumOfTwoNumbers(number1, number2) {
		if (isNaN (number1) || isNaN (number2)) {
			return("Inputs must be numeric")
		} else {
			return (number1 + number2)
		}
	}
	var resultOfSum = sumOfTwoNumbers (4, 2);
	console.log(resultOfSum);

//Subtraction of two numbers
	function differenceOfTwoNumbers(number1, number2) {
		if (isNaN (number1) || isNaN (number2)) {
			return("Inputs must be numeric")
		} else {
			return (number1 - number2);
		}
	}
	var resultOfDifference = differenceOfTwoNumbers (10, 5);
	console.log(resultOfDifference);

//Multiplcation of two numbers
	function multiplcationOfTwoNumbers(number1, number2) {
		if (isNaN (number1) || isNaN (number2)) {
			return("Inputs must be numeric")
		} else {
		return (number1 * number2);
		}
	}
	var resultOfMultiplication = multiplcationOfTwoNumbers (10, 42);
	console.log(resultOfMultiplication);

//Division of two numbers
	function divisionOfTwoNumbers(number1, number2) {
		if (isNaN (number1) || isNaN (number2)) {
			return("Inputs must be numeric")
		} else {
		return (number1 / number2);
		}
	}
	var resultOfDivision = divisionOfTwoNumbers (10000, .5);
	console.log(resultOfDivision);

//Squaring a number
	function squaringANumber(number1) {
		if (isNaN (number1)) {
			return("Inputs must be numeric")
		} else {
		return multiplcationOfTwoNumbers (number1, number1);
		}
	}
	var resultOfSquaringANumber = squaringANumber (5);
	console.log(resultOfSquaringANumber);

//Sum of two squares
	function sumOfTwoSqaures(a, b) {
		if (isNaN (a) || isNaN (b)) {
			return("Inputs must be numeric")
		} else {
		var squaringa = multiplcationOfTwoNumbers (a, a);
		var squaringb = multiplcationOfTwoNumbers (b, b);
		return sumOfTwoNumbers (squaringa, squaringb);
		}
	}
	var resultOfSumOfTwoSquares = sumOfTwoSqaures (2, 4);
	console.log(resultOfSumOfTwoSquares);