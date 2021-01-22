// Reduce

var numbers = [10,20,30]
var sum = 0;


// Forloop method
for(var i = 0; i < numbers.length; i++) {
    // sum += numbers[i]
}


// with reduce we will pass an initial value as a second argument
sum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(sum);