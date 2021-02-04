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