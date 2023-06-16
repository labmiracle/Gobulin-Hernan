const { characters } = require("./person_array.js");

// 1 reduce function - Get the total mass of all characters
const totalMass = characters.reduce((accumulator, character) => accumulator + parseInt(character.mass), 0);
console.log(totalMass);

// 2 reduce function - Get the total height of all characters
const totalHeight = characters.reduce((accumulator, character) => accumulator + parseInt(character.height), 0);
console.log(totalHeight);

// 3 reduce function - Get the total number of characters in all character names
const totalCharactersInNames = characters.reduce((accumulator, character) => accumulator + character.name.length, 0);
console.log(totalCharactersInNames);

// 4 reduce function - Get the total number of characters per eye color (hint: use a map of eye colors to count)
const charactersPerEyeColor = characters.reduce((accumulator, character) => {
    const eyeColor = character.eye_color;
    if (!accumulator[eyeColor]) {
        accumulator[eyeColor] = 0;
    }
    accumulator[eyeColor]++;
    return accumulator;
}, {});
console.log(charactersPerEyeColor);
