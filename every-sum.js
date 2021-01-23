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


let names = ['Rajeev', 'Nijo', 'Linto', 'Shafeeque'];

let allNamesSatisfyMin5Charecters = names.every((name) => {
    return name.length > 5;
})

console.log(allNamesSatisfyMin5Charecters);

let someNamesSatisfyMin5Charecters = names.some((name) => {
    return name.length > 5;
})

console.log(someNamesSatisfyMin5Charecters);


var users = [
    { id: 1, admin: true , experience: 3},  
    { id: 2, admin: true, experience: 5 },
    { id: 3, admin: false, experience: 3 },
    { id: 4, admin: false, experience: 6 },
    { id: 5, admin: true, experience: 1 },
];

let allSuperAdmin = users.every((user) => {
    return user.experience > 3;
})

let someSuperAdmin = users.some((user) => {
    return user.experience > 3;
})

console.log("allSuperAdmin: " + allSuperAdmin, "someSuperAdmin: " + someSuperAdmin);


function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('shafeeque')
var password = new Field('123455678890')
var dob = new Field('10/10/20')

var allUserValid = username.validate() && password.validate() && dob.validate();
console.log(allUserValid);

var fields = [username, password, dob]
var allUserValidES6 = fields.every((field) => {
    return field.validate()
})

console.log(allUserValidES6);


// Excersice 
// find submitted users

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted = users.every((user) => {
      return user.hasSubmitted;
  });

// Excersice 
// fif anything in pending please assing true in inprogress

  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some((request) => {
      return request.status === 'pending'
  });

  console.log(inProgress);


// Revision
let developers = [
    { name: 'Shafeeque', html : 5, angular: 1 },
    { name: 'Rajeev', html : 6, angular: 3 },
    { name: 'Shameem', html : 7, angular: 4 },
    { name: 'SHamseer', html : 3, angular: 0 },
    { name: 'Farook', html : 3, angular: .5 },
]

// task 1
// find developer with more than 3 years experience in html
// find developers with more than 2 years in angular


let allDevelopersCanDoAngular = developers.every((developer) => {
    return developer.html > 3 && developer.angular > 2
})

console.log("allDevelopersCanDoAngular : " + allDevelopersCanDoAngular);

let someDevelopersCanDoAngular = developers.some((developer) => {
    return developer.html > 3 && developer.angular > 2
})

console.log("someDevelopersCanDoAngular : " + someDevelopersCanDoAngular);