class Human {
    // in the latest ES7 codes we can remove constructor and this keyword from where we set a property 
    constructor() {
        this.gender = 'male'
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super()
        this.name = 'Shafeeque'
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName()
person.printGender()


// spread operator
const numbers = [1,2,3]
const newNumbers = [...numbers, 4, 5, 6]

console.log(newNumbers);

const myPerson = {
    name: 'Shafeeque'
}

const newPerson = {
    ...myPerson,
    age: 31
}

console.log(newPerson);

// Rest operaror

const filter = (...args) => {
    return args.filter( el => el === 1);
}

console.log(filter(1,2,3,));

// destructuring
[num1, num2] = numbers;
console.log(num1, num2);