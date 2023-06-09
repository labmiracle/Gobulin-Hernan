const { sumPositiveNumbers } = require("../src/1.4.js");

describe("sumPositiveNumbers", () => {
    it("should return the sum of positive numbers in the array", () => {
        expect(sumPositiveNumbers([1, 2, 3])).toBe(6);
        expect(sumPositiveNumbers([-1, 2, 3])).toBe(5);
        expect(sumPositiveNumbers([-1, -2, -3])).toBe(0);
        expect(sumPositiveNumbers([1, "2", 3])).toBe(6);
        expect(sumPositiveNumbers([])).toBe(0);
        expect(sumPositiveNumbers(["a", "b", "c"])).toBe(0);
    });
});
