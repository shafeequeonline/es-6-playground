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