const { users } = require("./users_array.js");

const reducedUsers = users.reduce((acc, user) => {
    if (acc[user.role]) {
        acc[user.role].push(user);
    } else {
        acc[user.role] = [user];
    }
    return acc;
}, {});

console.log(reducedUsers);
