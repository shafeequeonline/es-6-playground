function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price,0)
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
]
const bookShop = createBookShop(inventory);

console.log(bookShop);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));



function createMyBookShop(inventory) {
    return {
        inventory, // if we are using the same identical name for key and value we can omit the value inventory: inventory => inventory
        inventoryValue() { // in ES6 we dont need the function keywork when it's a value of a key in object inventoryValue : function() => inventoryValue ()
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        },
        // Finds a book with a price
        titleForPrice: function(price) {
            return this.inventory.find( book => book.price === price).title;
        }
    }
}

const myInventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 },
    { title: 'Pragmatic Programmer 4', price: 50 },
    { title: 'Pragmatic Programmer ', price: 55 }
]
const myBookShop = createMyBookShop(myInventory);

console.log(myBookShop);
console.log(myBookShop.inventoryValue());
console.log(myBookShop.priceForTitle("Harry Potter"));
console.log(myBookShop.titleForPrice(50));

// ES 6 Sort
let numberArray = [1,3,2]
numberArray = numberArray.sort((a,b) => {return a - b})

console.log(numberArray);

// ES 6 reverse
let myString = "jio";
myString = myString.split('').reverse().join('');
console.log(myString);

// ES6 Reduce
// Find total of each student in an object

let students = [
    { name: 'Shafeeque', marks: [ { sub1: 45, sub2: 40 } ] },
    { name: 'Umer', marks: [ { sub1: 48, sub2: 49 } ] },
    { name: 'Nijo', marks: [ { sub1: 44, sub2: 46 } ] },
]

function findTotal(students, name) {
    return students.find(student => student.name === name
    ).marks.reduce((accumulator, mark) => {
        return accumulator + mark.sub1 + mark.sub2;
    },0)   
}

console.log(findTotal(students,'Shafeeque'));