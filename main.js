// 1 . Array Helper Methods
// ForEach, map, filter, find, every, some, reduce

var colors = ['red','green','blue'];

// Old way 
for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ES6 Method
colors.forEach(function(color){
    console.log(color)
})

var temMates = ['Rajeev', 'Nijo', 'Umer', 'Farook']
temMates.forEach((name) => {console.log(name)})

// create array of numbers
var numbers = [1,3,2,5,4,7,6]
numbers.forEach((number) => {console.log(number)})

// create a variable to hold total
var total = 0;

// loop over the array and store it to the same variable
numbers.forEach((number) => { total += number})

// print the result
console.log("The total of the numbers " + total);

// alternative method

function add(number) {
    total += number
}

numbers.forEach(add)
console.log("The total of the numbers " + total);