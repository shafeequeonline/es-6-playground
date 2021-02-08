function Car(options) {
    this.title = options.title
}

Car.prototype.drive = function() {
    return 'vroom'
}

const myCar = new Car({ title: 'Focus' })
console.log(myCar, myCar.drive());


function Toyota(options) {
    Car.call(this, options)
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype)
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function() {
    return 'beep'
}

const myToyota = new Toyota({ color: 'red', title: 'Liva' });

console.log(myToyota, myToyota.honk(), myToyota.drive());


// class

class NewCar {
    // applied destructure here, otherwise this will be just (options) nad options.title;
    constructor( { title, make } ) {
        this.title = title;
        this.make = make;
    }

    // enhanced object literals, otherwise this will be drive : function(){}
    drive() {
        return 'vroom'
    }
}

class NewToyota extends NewCar {
    // Normal way
    // constructor(options) {
    //     this.title = options.title,
    //     this.color = options.color;
    // }

    // destructred way
    // constructor({color, title}){
    //     this.color = color;
    //     this.title = title;
    // }

    // when using with extend method we can't use destructure
    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep beep';
    }
}

const myNewCar = new NewCar({title: 'Toyota', make: 2010});
console.log(myNewCar, myNewCar.drive());

const myToyotaCar = new NewToyota({color: 'dual tone, red and black', title: 'Liva'});
console.log(myToyotaCar, myToyotaCar.honk(), myToyotaCar.drive());


// Excercise
class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
}
  
class Snake extends Monster {
    constructor(options) {
        super(options)
    }
    
    bite(snake) {
        return snake.health -= 10;
    }
}

const snake1 = new Snake({ name: 'Fred' });
const snake2 = new Snake({ name: 'Willy' });
snake1.bite(snake2);
console.log(snake1);
console.log(snake2);