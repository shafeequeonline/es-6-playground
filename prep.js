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

var obj = {
    name: "Shaz",
    getName() {
        console.log(this);
    }
}

obj.getName()


function saySomething(message) {
    return this.name + " is " + message
}

var person  = {name: "Shaz"}

console.log(saySomething.call(person, "awesome!"));
console.log(saySomething.apply(person, ['wonderful!']));

var newPerson = saySomething.bind(person, "just wow!");
console.log(newPerson());

// currying
function multiply(a, b) {
    return a * b;
}

function currying(fn) {
    return function(a) {
        return function(b) {
            return fn(a,b)
        }
    }
}

var curryingVar = currying(multiply)

console.log(multiply(3,6), curryingVar(3)(6));

// Scope
function awesomeFunction() {
    var aa = 2;

    var multiply = function() {
        console.log(aa * 2);
    }
}
// console.log(aa);
// console.log(multiply());


var obj1 = {
    valueOfThis: function() {
        return this
    }
}

var obj2 = {
    valueOfThis: () => {
        return this
    }
}
console.log(obj1.valueOfThis(), obj2.valueOfThis());

const myNum = [1,2,3]
const myNumNew = [...myNum]
myNumNew.push(5)

console.log(myNum, myNumNew);

let myMarks = [10,15,22];
let total = myMarks.reduce((acc, mark) => 
    { return acc + mark }, 0
);

let tt = myMarks.reduce((acc, mark) => {
    return acc + mark
},)

let totalMarkForEach = 0;

myMarks.forEach(mark => totalMarkForEach += mark) 

// let myTotal = myMarks.forEach((mark) => {
//     totalMarkForEach = mark
//     return totalMarkForEach
// })
console.log(tt, total, totalMarkForEach);