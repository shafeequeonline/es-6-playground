function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 99999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
}
const user = new User(generateId())
console.log(createAdminUser(user));


// refactor

function sum(a = 0, b = 0) {
    return a + b;
  }