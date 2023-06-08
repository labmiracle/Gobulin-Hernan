const fizzBuzz = require("../src/1.1.js");

test("FizzBuzz - divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
});

test("FizzBuzz - divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
});

test("FizzBuzz - divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
});

test("FizzBuzz - not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(4)).toBe("4");
    expect(fizzBuzz(7)).toBe("7");
});

test("FizzBuzz - zero number", () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz");
});

test("FizzBuzz - the argument is not a number", () => {
    expect(() => fizzBuzz("15")).toThrow("The argument must be a number");
    expect(() => fizzBuzz(true)).toThrow("The argument must be a number");
    expect(() => fizzBuzz(null)).toThrow("The argument must be a number");
});
