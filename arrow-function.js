// ES5
function addNumbers(a,b) {
    sum = a + b;
    return sum;
}

console.log(addNumbers(1,2));

// ES 6
const add = (a,b) => {
    return a+b;
}
console.log(add(10,20));

// even better, if we have one return key we can remove the curly brackets too

const addition = (a,b) => a+b;
console.log(addition(100,200));