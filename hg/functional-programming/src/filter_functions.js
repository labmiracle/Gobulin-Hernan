const { characters } = require("./person_array.js");

const filteredCharacters = {
    // 1 Get characters with a mass greater than 100.
    massGreaterThan100: characters.filter(character => {
        return parseInt(character.mass) > 100;
    }),

    // 2 Get characters with a height less than 200.
    heightLessThan200: characters.filter(character => {
        return parseInt(character.height) < 200;
    }),

    // 3 Get all male characters.
    allMales: characters.filter(character => {
        return character.gender === "male";
    }),

    // 4 Get all female characters.
    allFemales: characters.filter(character => {
        return character.gender === "female";
    }),
};
console.log("Characters with a mass greater than 100:");
console.log(filteredCharacters.massGreaterThan100);

console.log("Characters with a height less than 200:");
console.log(filteredCharacters.heightLessThan200);

console.log("All male characters:");
console.log(filteredCharacters.allMales);

console.log("All female characters:");
console.log(filteredCharacters.allFemales);
