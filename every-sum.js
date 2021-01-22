var computers = [
    { name : 'Apple', ram: 24},
    { name : 'Compaq', ram: 4},
    { name : 'Acer', ram: 32},
]

var allComputersCanRun = true;
var someComputersCanRun = false;


for (var i = 0; i < computers.length; i++) {
    var computer = computers[i]

    // console.log(computer);
    if(computer.ram < 16) {
        allComputersCanRun = false
        // console.log(computer);
    } else {
        someComputersCanRun = true
        // console.log(computer);
    }

}

console.log('allComputersCanRun ' + allComputersCanRun);
console.log('someComputersCanRun ' + someComputersCanRun);

// every will check if all true then return true, if one false it will return false
let allComputersCanRunES6 = computers.every((computer) => {
    return computer.ram > 16;
})

// some will return true if any of the item satisfy this 
let someComputersCanRunES6 = computers.some((computer) => {
    return computer.ram > 16;
})


console.log(allComputersCanRunES6);
console.log(someComputersCanRunES6);