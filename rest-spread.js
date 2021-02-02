// normal way
// function addNumbers(numbers) {

// rest operator
function addNumbers(...numbers) {

    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

// console.log(addNumbers([1,2,3]));
console.log(addNumbers(1,2,3));