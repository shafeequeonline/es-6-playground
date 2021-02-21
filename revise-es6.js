const numbers = [1,2,3,4,5,6,7,8,9,10];


// Q1: find Odd from the given array

const oddNumbers  = numbers.filter((number) => { return number % 2 == 1 })
const evenNumbers = numbers.filter((number) => number % 2 == 0)
console.log("Odd numbers", oddNumbers, "Even numbers",  evenNumbers);

// What will be in the console, why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo); // bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();