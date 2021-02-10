// Generators
// 1. For of

const colors = ['red', 'green', 'blue'];

for(let color of colors) {
    console.log(color);
}

const numbers = [1,2,3,4,5]
let total = 0;

for(let number of numbers) {
    total += number
}
console.log(total);

const lukeSkywalker = 'Luke Skywalker'

// old approach
const obj = {
    lukeSkywalker : lukeSkywalker
}

// es6 approach
const myObj = {
    lukeSkywalker
}

console.log(obj, myObj);

const marks = [
    { subject: 'Science', mark: 79 },
    { subject: 'IT', mark: 85 },
    { subject: 'GK', mark: 75 }
]

let totalMark = 0;

for(let mark of marks) {
    totalMark += mark.mark
}

console.log(totalMark);

const originalObj = {a:1, b:2}
const newObj = {...originalObj, c:3}
const  {a, ...rest } = newObj;

console.log(originalObj, newObj, rest);

const myNumberArray = [1,2,3,4,5]
const myNewNumberArray = [...myNumberArray, 4];
const [ number1, number2, number3, ...other ] = myNewNumberArray

console.log(myNumberArray, myNewNumberArray);
console.log('number1', number1);
console.log('number2', number2);
console.log('number3', number3);
console.log('other', other);

[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    console.log(flatten, index);
    return flatten;
  });


const anotherNumberArray = myNewNumberArray.map((number) => number * 2 )
console.log(anotherNumberArray);

const anotherFilterNumber = anotherNumberArray.filter((number) => number > 5)
console.log(anotherFilterNumber);

const short = function longUniqueMoreDescriptiveLexicalFoo() {
    return 'I am running';
};

console.log(short);

// IIFE

(function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());