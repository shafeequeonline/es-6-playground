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

// class 

class Author {
    constructor(details) {
        this.author = details.author
    }
}

class Item extends Author {
    constructor(options) {
        super(options)
        this.name = options.name;
        this.price = options.price
    }
}


const book = new Item({name: "Gulliver's Islan", price: 100, author: "Mark Reus" })
const anotherBook = new Item({name: "Gulliver's Islan", price: 160, author: "Mark Reus" })
const yetAnotherBook = new Item({name: "Gulliver's Islan", price: 200, author: "Mark Reus" })
console.log(book);

const myLibrary = [book, anotherBook, yetAnotherBook]

const booksHasPriceMoreThan150 = myLibrary.some((book) => {return book.price > 150});

console.log("booksHasPriceMoreThan150 is", booksHasPriceMoreThan150 );


// destructuring
let myCar = ['Hyundai i10', 'White', 'Petrol']

const [ model, color, fuel ] = myCar;
console.log(model, color, fuel);

const { length } = myCar;
console.log(length);

const objCar = {
    name: 'Hyunday i10 Grand',
    carColor: 'White',
    variant: 'Petrol'
}

const { name, carColor, variant } = objCar;
console.log(name, carColor, variant);


// filter
let numberFilterArray = [10,5,7,8,4,33]

const filteredArray = numberFilterArray.filter((number) => number < 15)
console.log(filteredArray);

const mappedArray = numberFilterArray.map((number) => number)
console.log(mappedArray);

// ForEach
let weather = [
    { name: 'Malappuram', temperature: 24.3, humidity: 1.5 },
    { name: 'Kochi', temperature: 22.3, humidity: 3 },
    { name: 'Trivandrum', temperature: 20.3, humidity: 2 },
    { name: 'Calicut', temperature: 25.3, humidity: 1 },
    { name: 'Palakkad', temperature: 30.3, humidity: 4 }
]


const weather20plus = []
weather.forEach((place) => {
    place.temperature > 22 ? weather20plus.push(place) : '' ;
})

console.log(weather20plus);

const teamOne = {
    lead:'Bevin',
    qa: 'Arjun',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.qa;
    }
}

const teamTwo = {
    lead:'Emil',
    qa: 'David',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.qa;
    }
}

const myTeam = {
    teamOne,
    teamTwo,
    [Symbol.iterator]: function* () {
        yield this.teamOne;
        yield this.teamTwo
    }
}

console.log(myTeam);