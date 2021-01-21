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

// Excercise


var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach((image) => {
    // areas.push(image.width * image.height);
    // tried pusingg as an object to the array
    areas.push({'Image dimension ' : image.width * image.height});
})

console.log(areas);
  

// My revision 

let weather = [
    { name: 'Malappuram', temperature: 24.3, humidity: 1.5 },
    { name: 'Kochi', temperature: 22.3, humidity: 3 },
    { name: 'Trivandrum', temperature: 20.3, humidity: 2 },
    { name: 'Calicut', temperature: 25.3, humidity: 1 },
    { name: 'Palakkad', temperature: 30.3, humidity: 4 }
]

let weatherList = [];
weather.forEach((place) => {
    place.humidity > 2 ? weatherList.push(place) : '';
})

console.log(weather);
console.log(weatherList);