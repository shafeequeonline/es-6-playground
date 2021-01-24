// template string or template literal
function getMessage() {
    const year = new Date().getFullYear();
    return `Current year is ${year}`;
}

console.log(getMessage());