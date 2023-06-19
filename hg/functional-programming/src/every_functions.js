const { characters } = require("./person_array.js");

// Check if all characters have blue eyes
const allHaveBlueEyes = characters.every(character => character.eye_color === "blue");
console.log(allHaveBlueEyes);
//false

// Check if all characters have a mass greater than 40
const allHaveMassAbove40 = characters.every(character => Number(character.mass) > 40);
console.log(allHaveMassAbove40);
//true

// Check if all characters are shorter than 200
const allAreShorterThan200 = characters.every(character => Number(character.height) < 200);
console.log(allAreShorterThan200);
// false

// Check if all characters are male
const allAreMales = characters.every(character => character.gender === "male");
console.log(allAreMales);
//false
