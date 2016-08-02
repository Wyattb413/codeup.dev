"use strict";
(function(){
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    	var names = ["bob", "sally", "christian", "charles"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    	console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    	for (var i = 0; i <= names.length; i++) {
    		console.log(names[i]);
    	}
    //Array in reverse order
    	var namesInReverseOrder = names.reverse();
    	for (var i = 0; i <= namesInReverseOrder.length; i++) {
    		console.log(namesInReverseOrder[i]);
    	}
    //For each
    	names.forEach(function(element, index, array) {
    		console.log(element)
    	});
})();