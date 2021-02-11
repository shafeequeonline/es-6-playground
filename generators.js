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

function concateAll(...arg){
    return arg.join('')
}
console.log(concateAll(['a','b','c']));

// Generators
function* myNumbers() {
    yield;
}

const gen = myNumbers();
console.log(gen.next());
console.log(gen.next());

function* myFavColors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}

let myColors = [];

for(let color of myFavColors()) {
    myColors.push(color)
}

console.log(myColors);


// real world example
const testingTeam = {
    lead: 'Bill',
    tester: 'Arjun'
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'John',
    manager: 'Edwin',
    engineer: 'Shafeeque'
}

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // We extended the Testing team generator to this generator
    const testingTeamIterator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamIterator;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const myEngineeringTeam = []
const myTestingTeam = []

for(let name of TeamIterator(engineeringTeam)){
    myEngineeringTeam.push(name)
}

for(let name of TestingTeamIterator(testingTeam)){
    myTestingTeam.push(name)
}

console.log(myEngineeringTeam, myTestingTeam);