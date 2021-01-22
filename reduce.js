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

var myMarks = [35, 36, 45, 50];

var myTotal = myMarks.reduce((total, mark) => { return total + mark}, 0)

console.log(myTotal);

var primaryColors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
]

var colors = []

// Map method
primaryColors.map((color) => {
    return colors.push(color.color)
})

// reduce way
primaryColors.reduce((prev, color) => {
    prev.push(color.color);
    console.log(prev);
    return prev;
}, []);
console.log(colors);

// balanced or unbanaced

function isBalanced(string) {
    const balance = string.split("").reduce((sum, paren) => {
        if (sum < 0 ) { return sum; }
        if(paren === "(") { return ++sum; }
        if(paren === ")") { return --sum; }
        
        return sum;
    }, 0)
    return balance === 0;
    
}
console.log(isBalanced("())"))