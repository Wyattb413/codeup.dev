// Code Wars Challenges

//==================================================================================================================================================\

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. DNA strand is never empty or there is no DNA at all 
// (again, except for Haskell).


// function DNAStrand(dna){
// 	var dnaArray = dna;
// 	var translatedArray = [];
//   for (var i = 0; i <= dnaArray.length; i++) {
//   	if (dnaArray[i] == 'A') {
//   		translatedArray.push('T');
//   	} else if (dnaArray[i] == 'T') {
//   		translatedArray.push('A');
//   	} else if (dnaArray[i] == 'G') {
//   		translatedArray.push('C');
//   	} else if (dnaArray[i] == 'C') {
//   		translatedArray.push('G');
//   	}
//   }
//   translatedArray = translatedArray.join('');
//   return translatedArray;
// }

// console.log(DNAStrand('AAAA'));

//==================================================================================================================================================\

// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.

// Here's an example of a list in JavaScript:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}

// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]

// var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

// function listToArray(list, array) {
//   if (typeof array === 'undefined') {
//   	array = [];
//   }

//   array.push(list.value);

//   if (list.next === null) {
//   	return array;
//   }

//   return listToArray(list.next, array);
// }

// console.log(listToArray(list1));

//==================================================================================================================================================\

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

function XO(str) {
    var string = str;
    var x = 'x';
    var o = 'o';
    string = string.toLowerCase();
    if (string.includes(x) == string.includes(o)) {
    	return true;
    } else {
    	return false;
    }
}