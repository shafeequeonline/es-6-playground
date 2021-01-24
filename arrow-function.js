// ES5
function addNumbers(a,b) {
    sum = a + b;
    return sum;
}

console.log(addNumbers(1,2));

// ES 6
const add = (a,b) => {
    return a+b;
}
console.log(add(10,20));

// even better, if we have one return key we can remove the return keyword and curly brackets too
// if only sigle argument we can remove brackets too

const addition = (a,b) => a+b;
console.log(addition(100,200));


// ES5
function double(number) {
    return number * 2;
}

// ES6
// removed the brackets since we have only one argument 
// removed retund and curly brackets sine we have only 1 return statement 
const doubleNumber = number => number * 2;

console.log(doubleNumber(4));

// example
const numbers = [1,2,3];
// const doubleArray = numbers.map(function(number) {
//     return number * 2
// })
const doubleArray = numbers.map((number) => number * 2);
console.log(doubleArray);

// excercise
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super squad',
    teamSummery : function() {
        let self = this; // we are caching the scope of this here. if we use arrow function here we can get rid of this issue. This is called lexical this
        return this.members.map(function(member) {
        
            return `${member} is on team ${self.teamName}`
        })
    }
}

console.log(team.teamSummery());

const teamES6 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super squad',
    teamSummery : function() {
        // if we use arrow function here we can get rid of this issue. This is called lexical this
        return this.members.map(member =>`${member} is on team ${this.teamName}`)
    }
}

console.log(teamES6.teamSummery());