"use strict";
a = 10;
console.log("a", a);
var a;

var b;
b =1;
console.log("b", b);

// Named functions
let loading = (a, b) => {
    console.log('loading function', a, b);
}

loading("Hello", "Mr.Naripatta")


"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;

console.log(x);


let greeting = "Hello";

let reverseGreeting = greeting.split('').reverse().join("") // olleh

console.log(greeting, reverseGreeting);

let numbers = [2,1,4,3]

let orderedNumbers = numbers.sort((a,b) => a - b ) // [1,2,3,4]

console.log(numbers, orderedNumbers);

var x = 0;
if(x) {
    console.log("x", x);
}

var y = 1;
if(y) {
    console.log("y", y);
}