function Car(options) {
    this.title = options.title
}

Car.prototype.drive = function() {
    return 'vroom'
}

const myCar = new Car({ title: 'Focus' })
console.log(myCar, myCar.drive());
