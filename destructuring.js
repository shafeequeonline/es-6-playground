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