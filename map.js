// map function

var numbers = [1,2,3]
var doubledNumbers = []

// old method
for(var i=0; i<numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2)
}
console.log(doubledNumbers);

var doubledNumbersNew = numbers.map((number) => {
    return number * 2
})
console.log(doubledNumbersNew);

var myNewNumbers = [1,2,3,4,5,6,7,8,9,10]

var oddNUmbers = myNewNumbers.map((number) => {
    return number / 2;
})
console.log(oddNUmbers);

var cars = [
    { model: 'BMW', price: 8000 },
    { model: 'Hyundai', price: 3500},
    { model: 'Toyota', price: 6000 },
    { model: 'Volkwagon', price: 5000},
    { model: 'Benz', price: 10000 },
    { model: 'Jeep', price: 8500}
]

var prices = cars.map((car) => {
    return car.model +' '+ car.price;
})

var expensiveCars = cars.map((car) => {
    return car.price > 5000 ? car.model +' '+car.price : '';
})

var economicCars = cars.map((car) => {
    return car.price <= 5000 ? car.model +' '+car.price : '';
})

console.log(prices);
console.log(expensiveCars);
console.log(economicCars);

// Excercise 1 , create new array with the height values form the images array
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map((image) => {
      return image.height
  });

  console.log(heights);

  // Excercise 2 , create new array with the speed values. calulation is distance / time
  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map((trip) => {
      return trip.distance / trip.time
  });

  console.log(speeds);

  // Excersice 3

var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'},
]

function pluck(array, property) {
    var newArray = []
    array.map((data) => {
        newArray.push(data[property])
    })
    return newArray;
}

console.log(pluck(paints, 'color'));

// Revision

let weather = [
    { name: 'Malappuram', temperature: 24.3, humidity: 1.5 },
    { name: 'Kochi', temperature: 22.3, humidity: 3 },
    { name: 'Trivandrum', temperature: 20.3, humidity: 2 },
    { name: 'Calicut', temperature: 25.3, humidity: 1 },
    { name: 'Palakkad', temperature: 30.3, humidity: 4 }
]

let humidity = weather.map((place) => {
    return place.humidity;
})

console.log(pluck(weather, 'name'));
console.log(humidity);