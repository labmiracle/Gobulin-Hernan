/*
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.
console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
*/

function countCommonJewels(jewels: string, stones: string): number {
    const jewelSet = new Set(jewels);
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            count++;
        }
    }

    return count;
}

console.assert(countCommonJewels("aA", "aAAbbbb") === 3);
console.assert(countCommonJewels("z", "ZZ") === 0);
