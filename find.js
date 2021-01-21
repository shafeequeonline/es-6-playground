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