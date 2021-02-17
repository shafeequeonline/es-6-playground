// real world example
const testingTeam = {
    lead: 'Bill',
    tester: 'Arjun',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'John',
    manager: 'Edwin',
    engineer: 'Shafeeque',
    [Symbol.iterator]: function*(){
        yield this.lead,
        yield this.manager,
        yield this.engineer,
        yield* this.testingTeam
    }
}

// use symbol.iterato function, then for of loop will iterate that function

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

const myEngineeringTeam = []

for(let name of TeamIterator(engineeringTeam)){
    // myEngineeringTeam.push(name)
}

// when we are using symbol.iterator function we don't have to use any function. We can directly assign the object
for(let name of engineeringTeam) {
    myEngineeringTeam.push(name)
}


console.log(myEngineeringTeam);