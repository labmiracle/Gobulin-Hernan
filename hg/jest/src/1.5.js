function findFirstRepeatingChar(word) {
    const normalizeWord = word.toLowerCase().replaceAll(" ", "");
    const index = normalizeWord.split("").findIndex((char, i, arr) => char === arr[i + 1]);
    return index !== -1 ? index : -1;
}
module.exports = { findFirstRepeatingChar };
