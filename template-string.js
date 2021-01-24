// template string or template literal
function getMessage() {
    const year = new Date().getFullYear();
    return `Current year is ${year}`;
}

console.log(getMessage());

// ES5 method
function doubleMessage(number) {
    return "Your number doubled is " + (2 * number);
}

// ES6 Method
function doubleMessage(number) {
    return `Your number doubled is ${number * 2}`;
}

console.log(doubleMessage(2));

// ES5 method
function fullName(firstName, lastName) {
    return firstName + lastName;
}

// ES6 Method
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}` 
}

console.log(fullName('Mohamed', 'Shafeeque'));