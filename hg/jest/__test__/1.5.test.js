const { findFirstRepeatingChar } = require("../src/1.5.js");

test("String with consecutive repeated characters", () => {
    const word = "Hello";
    expect(findFirstRepeatingChar(word)).toBe(2);
});

test("String without consecutive repeated characters", () => {
    const word = "World";
    expect(findFirstRepeatingChar(word)).toBe(-1);
});

test("String with consecutive repeated characters (ignoring spaces)", () => {
    const word = "Open  AI";
    expect(findFirstRepeatingChar(word)).toBe(-1);
});

test("Empty string", () => {
    const word = "";
    expect(findFirstRepeatingChar(word)).toBe(-1);
});

test("String with special symbols or special characters", () => {
    const word = "@#^&$^%";
    expect(findFirstRepeatingChar(word)).toBe(-1);
});
