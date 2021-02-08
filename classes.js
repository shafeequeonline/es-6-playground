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