const { users } = require("./users_array.js");

const mappedUsers = users.map(user => `${user.firstName}-${user.lastName}: ${user.role}`);
console.log(mappedUsers);
