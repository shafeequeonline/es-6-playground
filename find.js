// Find helper
// search through and array to find an elemnet with particular value


var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' },
    { name: 'Alex' }
]

var user = [];

for(var i = 0; i < users.length; i++ ) {
    if(users[i].name === 'Alex') {
        // user.push(users[i]) // my logic
        user = users[i] // best logic
        // break;
    }
}

// console.log(user);

let myUser = users.find((user) => {
    return user.name === 'Bill'
})

console.log(myUser);


function Mobile(brand) {
    this.brand = brand
}

let mobiles = [
    new Mobile('iPhone'),
    new Mobile('Samsung'),
    new Mobile('Nokia'),
]

let myFavMobile = mobiles.find((mobile) => {
    return mobile.brand === 'iPhone'
})

console.log(myFavMobile);


var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
]

var comment = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId
    })
}

console.log(postForComment(posts, comment));

// Escersice 1
// find user with admin
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin = users.find((user) => { return user.admin });


  console.log(admin);

// Excersice 2
// find account holder with balance 12 and assign to account variable
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
  
var account = accounts.find((account) => { return account.balance === 12});

console.log(account);

// Excersice 3

var ladders = [
    { id: 1, height: 20 },
    { id: 2, height: 30 }
]

function findWhere(array, criteria) {
    var property = Object.keys(criteria)

    console.log(property);
    return array.find((data) => {
        return data[property] === criteria[property]
    })
}

console.log(findWhere(ladders, {height: 30}));