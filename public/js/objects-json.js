'use strict';

// todo:
// Create an array of objects that represent books.
var books = 
[
	{
	"title": "In Search of Lost Time",
	"author": 
	{
		"firstName":"Marcel", 
		"lastName": "Proust"
	}

	},
	{
	"title": "Ulysses",
	"author": 
	{
		"firstName":"James", 
		"lastName": "Joyce"
	}

	},
	{
	"title": "Don Quixote",
	"author": 
	{
		"firstName":"Miguel", 
		"lastName": "de Cervantes"
	}

	},
	{
	"title": "Moby Dick",
	"author": 
	{
		"firstName":"Herman", 
		"lastName": "Melville"
	}

	},
	{
	"title": "Hamlet",
	"author": 
	{
		"firstName":"William", 
		"lastName": "Shakespeare"
	}

	}

];
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
books.forEach(function(item, index, array) 
{
    console.log("Book #" + (index + 1));
    console.log("Title: " + item.title);
    console.log("Author: " + item.author.firstName + " " + item.author.lastName);
    console.log("---");
});
// end loop here