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

// Fetch
// url https://jsonplaceholder.typicode.com/posts/

let url = 'https://jsonplaceholder.typicode.com/posts/';
url = 'https://jsonplaceholder.typicode123.com/posts/';
fetch(url)
    // using response json method to read the readable data in the respne, then we will get the data to our application
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('BAD ERROR', error)) // this will catch if the domain itself wrong
    