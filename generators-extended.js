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


const teamTwo = {
    lead: 'George',
    engineers: [
        'Hemlin', 'John'
    ],
    [Symbol.iterator]: function* (){
        yield this.lead,
        yield this.engineers
    }
}

const teamOne = {
    teamTwo,
    lead: 'Edwin Daniel',
    engineers: [
        'Shafeeque Mohamed', 'John Samuel'
    ],
    [Symbol.iterator]: function* (){
        yield this.lead,
        yield this.engineers,
        yield* this.teamTwo
    }
}

const myTeamOneTwo = [];

for(let name of teamOne) {
    myTeamOneTwo.push(name)
}

console.log(myTeamOneTwo);


// Generators anothe example
const teamRabbit = {
    lead: 'Ron',
    qa: 'Emiliy',
    dev: 'Sanith',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.qa,
        yield this.dev
    }
}

const teamParrot = {
    lead: 'Peter',
    qa: 'Hiller',
    dev: 'Reddy',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.qa,
        yield this.dev
    }
}

const devTeams = {
    teamParrot,
    teamRabbit,
    [Symbol.iterator]: function* () {
        yield* this.teamParrot;
        yield* this.teamRabbit
    }
}

let devTeamsArray = []

for(let name of devTeams) {
    devTeamsArray.push(name)
}
console.log(devTeamsArray);