var expense = {
    type: 'Business',
    amount: '$45 USD'
}

// var type = expense.type;
// var amount = expense.amount;

// ES6
// const { type } = expense;
// const { amount } = expense;

// ES6 even nicer
const { type, amount } = expense;

console.log(type, ",", amount);


// my example
const place = {
    name: 'Kakkanad',
    city: 'Kochi',
    state: 'Kerala'
}

const { name, city, state } = place;

console.log(name, city, state);

// another example
// ES5
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 140
}

function fileSummery(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size} MB`;
}

console.log(fileSummery(savedFile));

// ES6
// in the first argument we selected the main object, in the second argument we selcted second argument when we called the function
function fileSummeryES6( { name, extension, size }, { fileSizeType } ) {
    return `The file ${name}.${extension} is of size ${size} ${fileSizeType}`;
}

console.log(fileSummeryES6(savedFile, { fileSizeType: 'KB'}));

// Destructure arrays

const companies = ['Google', 'Facebook', 'EQS', 'Uber'];

// to aceess value we use square brackets ([])
const [ company1, company2, company3, company4 ] = companies;
console.log(company1, company2, company3, company4);

// here we are accessing a property, that's why used curly braces ({})
const { length } = companies;
console.log(length);

// we can use spread operator too
const [ comp1, comp2, ...otherComp ] = companies;

console.log(otherComp);

// destructure array and object together

const techCompanies = [
    { name: 'Google', headquarters: 'Montain View' },
    { name: 'Facebook', headquarters: 'Menlo Park' },
    { name: 'Uber', headquarters: 'San Francisco' },
]

const [{ headquarters }, tecComp2, tecComp3] = techCompanies;

console.log(headquarters, tecComp2, tecComp3);


// complex one
const Google = {
    locations : ['Mountain view', 'New york', 'London']
}

// here we are selecting the object first then selecting the first value inside that
const { locations: [firstLocation, ...rest] } = Google
console.log(firstLocation);

// Normal way
function signUp(username, password, email, dateOfBirth, city) {
    return username + ' ' + password + ' ' + email + ' ' + dateOfBirth + ' ' + city;
}

console.log(signUp('shaz','123456','mm@mm.com','05/03/1989','Malappuram'));

const user = {
    username: 'shaz',
    password: '12345667890',
    email: 'mm@mm.com',
    dateOfBirth: '05/03/1989',
    city: 'Malappuram'
}


// used de structuring of object here. Now we don't have to worry about the order of arguments
function mySignUp( { dateOfBirth, username, password, email, city }) {
    return username + ' ' + password + ' ' + email + ' ' + dateOfBirth + ' ' + city;
}

console.log(mySignUp(user));

// my example
const shoppingList = [
    { item: 'Tomato', qty: 5, unitPrice: 20 },
    { item: 'Potato', qty: 3, unitPrice: 27 },
    { item: 'Celery', qty: 1, unitPrice: 30 },
]


const [{ item, qty }, secondItem] = shoppingList;

console.log(item, qty, secondItem);


// get total value of cart

const totalValue = shoppingList.reduce((prevItem, item) => { return prevItem + item.unitPrice * item.qty}, 0);
console.log(totalValue);

// another destructure example

const points = [
    [4, 5],
    [10, 7],
    [0, 3]
]

// destructure to create an object with x and y 
// we destructured in the argument itself
const myChart = points.map(([x, y]) => {
    // used improved object literal since the key and value are identical
    return { x, y}
})

console.log(myChart);


// example
const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
  
const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher }
});

console.log(classesAsObject);

// Excersice 

const mynumbers = [1, 2, 3];

// map method
function doubleVal(array) {
    let newArray = [];
    array.map((number) => newArray.push(number * 2))
    return newArray;
}

console.log(doubleVal(mynumbers));


const numbers = [1, 2, 3];
let finalNumbers = [];
function double(numbers) {
    const [number, ...rest] = numbers;
    if(number === undefined) {
        return finalNumbers;
    }
    else{
        finalNumbers.push(number * 2)
        return double([...rest])
    }
}

console.log(double(numbers));