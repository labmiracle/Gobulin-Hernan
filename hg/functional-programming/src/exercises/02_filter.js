const { users } = require("./users_array.js");

const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);
