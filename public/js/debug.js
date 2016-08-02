'use strict';

function sayHello (name) {
    return ('Hello ' + name);
}

var resultOfSayHello = sayHello ('Zach');
console.log(resultOfSayHello);

// expect to see 'hello zach' in the console
console.log("\n")
// ----------------------------------------------------------------------------

function sayHelloToEveryoneExceptZach (name) {
    if (name == 'Zach') {
        return ('goodbye');
    } else {
        return ('Hello ' + name);
    }
}

var resultOfSayHelloToEveryoneExceptZach = sayHelloToEveryoneExceptZach ('Ryan');
console.log(resultOfSayHelloToEveryoneExceptZach);

// expect to see 'hello Ryan' in the console
console.log("\n")
// ----------------------------------------------------------------------------

// returns a random number between 1 and 100
function getRandomNumber (number) {
    return Math.floor(Math.random() * 100) + 1;
}
var rand = getRandomNumber;
// returns true if number is odd, otherwise false
function isOdd (rand) {
    if (rand % 2 == 1) {
    return (rand + ' is odd');
    } else {
        return (rand + ' is not odd');
    }
}

var resultOfisOdd = isOdd (4);
console.log(resultOfisOdd);

// expect to see '4 is not odd'
console.log("\n")
// ----------------------------------------------------------------------------

for (var i = 1; i <= 10; i += 1) {
    console.log(i);
}

// expect to see 1 through 10

// ----------------------------------------------------------------------------

for (var i = 10; i > 0; i -= 1) {
    console.log(i);
}

// expect to see 10 through 1
console.log("\n")
// ----------------------------------------------------------------------------

function sum(x, y) {
    return (x + y);
}

var resultOfSum = sum (4, 4);


console.log(resultOfSum)

// expect to see 8
