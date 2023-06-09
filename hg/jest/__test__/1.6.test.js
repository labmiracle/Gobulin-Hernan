const { findMaxConsecutiveOnes } = require("../src/1.6.js");

describe("findMaxConsecutiveOnes", () => {
    test("It should return the maximum length of consecutive 1s", () => {
        const matrix1 = [
            [1, 1, 0, 1, 1, 1],
            [0, 1, 1, 1, 0, 0],
            [1, 1, 1, 0, 0, 1],
        ];
        expect(findMaxConsecutiveOnes(matrix1)).toBe(3);

        const matrix2 = [
            ["1", "1", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0"],
            ["1", "1", "1", "0", "0", "1"],
        ];
        expect(findMaxConsecutiveOnes(matrix2)).toBe(4);

        const matrix3 = [
            ["1", "1", "0", "1", "1", "1"],
            ["0", "1", "1", "1", "0", "0"],
            [1, 1, 1, 0, 0, 1],
        ];
        expect(findMaxConsecutiveOnes(matrix3)).toBe(3);

        const matrix4 = [
            [1, 1, 0, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0, 0],
            ["1", "1", "1", "0", "0", "1"],
        ];
        expect(findMaxConsecutiveOnes(matrix4)).toBe(5);

        const matrix5 = [
            [3, 1, 0, 1, 2, 1],
            [0, 1, 9, 1, 0, 0],
            [1, 1, 1, 5, 0, 1],
        ];
        expect(findMaxConsecutiveOnes(matrix5)).toBe(-1);
    });
});
