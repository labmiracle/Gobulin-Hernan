const { characters } = require("./person_array.js");

// Check if there is at least one male character
const hasMaleCharacter = characters.some(character => character.gender === "male");
console.log(hasMaleCharacter);
//true

// Check if there is at least one character with blue eyes
const hasCharacterWithBlueEyes = characters.some(character => character.eye_color === "blue");
console.log(hasCharacterWithBlueEyes);
//true

// Check if there is at least one character taller than 200
const hasCharacterTallerThan200 = characters.some(character => Number(character.height) > 200);
console.log(hasCharacterTallerThan200);
//true

// Check if there is at least one character with a mass below 50
const hasCharacterWithMassBelow50 = characters.some(character => Number(character.mass) < 50);
console.log(hasCharacterWithMassBelow50);
//true
