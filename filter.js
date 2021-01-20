var products = [
    {name: 'Banana', type: 'fruit', quantity: 5, price: 35},
    {name: 'Tomato', type: 'Vagitable', quantity: 0, price: 50},
    {name: 'Orange', type: 'fruit', quantity: 20, price: 45},
    {name: 'Onion', type: 'Vagitable', quantity: 3, price: 20},
    {name: 'Potato', type: 'Vagitable', quantity: 15, price: 22},
    {name: 'Apple', type: 'fruit', quantity: 10, price: 80},
    {name: 'Lemon', type: 'fruit', quantity: 0, price: 2},
    {name: 'Dates', type: 'dry-fruit', quantity: 10, price: 100},
    {name: 'Cashew nut', type: 'dry-fruit', quantity: 15, price: 345},
]

var filteredProductList = []
// old method
for( var i = 0; i < products.length; i++ ) {
    if(products[i].type === 'dry-fruit') {
        filteredProductList.push(products[i])
    }
}

console.log(filteredProductList);

// ES6

var es6products = products.filter((product) => {
    return product.type === 'Vagitable'
})

console.log(es6products);

// filter product which have morethan 0 in stock
// more that 25 price
// list only fruits
let productGt25Price = products.filter((product) => {
    return product.type === 'dry-fruit' && product.quantity > 0 && product.price > 45
})

console.log(productGt25Price);

// task 1
// Filter the array of numbers using the filter helper, creating a new array that only 
// contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  
// Don't forget to use the 'return' keyword in the function!

var numbers = [10, 15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
    return number > 50
});

console.log(filteredNumbers);

// task 2
// filter users with admin access

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];
   
var filteredUsers = users.filter((user) => {
    return user.admin // since the value is boolean not used === check
});

console.log(filteredUsers);

function reject(array, iteratorFunction) {
    return array.filter((number) => {
        return !iteratorFunction(number);
    })
}   

var lessThanFifteen = reject(numbers, function(number) {
    return number > 15;
});

console.log(lessThanFifteen);