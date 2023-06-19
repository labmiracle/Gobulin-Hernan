const { users } = require("./users_array.js");

function findUserByFirstName(firstName) {
    return users.find(user => user.firstName === firstName);
}

const user = findUserByFirstName("Bradley");
console.log(user);
