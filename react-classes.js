class Person {
    constructor() {
        this.name = 'Shafeeque'
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName()