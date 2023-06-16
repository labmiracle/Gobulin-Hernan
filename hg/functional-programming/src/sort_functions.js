const { characters } = require("./person_array.js");

// 1 Sort by name
characters.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:");
console.log(characters);

// 2 Sort by mass
characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log("Sorted by mass:");
console.log(characters);

// 3 Sort by height
characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log("Sorted by height:");
console.log(characters);

// 4 Sort by gender
characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("Sorted by gender:");
console.log(characters);
