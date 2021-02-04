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