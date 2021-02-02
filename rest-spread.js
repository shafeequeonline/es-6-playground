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


// spread operator
const myColors = ['red', 'green', 'blue']
const theirColors = ['orange', 'black', 'yellow']
const appColors = ['purple', 'dark blue', 'gray']


const colorPallette = [...myColors, ...theirColors, ...appColors, 'Magenta'];

console.log(colorPallette);