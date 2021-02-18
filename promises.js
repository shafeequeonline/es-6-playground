let promise = new Promise((resolve, reject) => {
    // faking async with a set timeout
    setTimeout(() => {
        reject();
    }, 5000)
});

// if resolved then we can use 'then'. If rejected we can use 'catch'
// We can add multiple 'then' with chaning
promise
    .then(() => console.log('I am Done :) '))
    .then(() => console.log('I am also completed :) '))
    .catch(() => console.log('Oh no!!!'))