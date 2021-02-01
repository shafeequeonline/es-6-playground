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
        inventory: inventory,
        inventoryValue : function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle : function(title) {
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

let students = [
    { 
        name: 'Shafeeque', 
        marks: [ 
            { 
                sub1: 45, 
                sub2: 40 
            } 
        ],
        total: function(marks) {
            return marks.reduce((accumulator, mark) => {accumulator+mark}, 0)
        } 
    }
]



console.log(students.total());