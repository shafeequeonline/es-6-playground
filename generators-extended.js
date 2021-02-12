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
    engineer: 'Shafeeque'
}

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

const myEngineeringTeam = []

for(let name of TeamIterator(engineeringTeam)){
    myEngineeringTeam.push(name)
}


console.log(myEngineeringTeam);