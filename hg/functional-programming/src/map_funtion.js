import { characters } from "./person_array.js";

// 1 map function - Get an array of all the names
const names = characters.map(character => character.name);
console.log(names);

// 2 map function - Get an array of all the heights
const heights = characters.map(character => character.height);
console.log(heights);

// 3 map function - Get an array of objects with the properties name and height
const nameAndHeight = characters.map(character => ({
    name: character.name,
    height: character.height,
}));
console.log(nameAndHeight);

// 4 the fourth exercise is the same as the first!
