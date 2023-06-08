const { isLeapYear } = require("../src/1.2.js");

test("Verify that the year 2020 is a leap year", () => {
    expect(isLeapYear(2020)).toBe(true);
});

test("Verify that the year 2021 is not a leap year", () => {
    expect(isLeapYear(2021)).toBe(false);
});

test("Verify that the year 2000 is a leap year", () => {
    expect(isLeapYear(2000)).toBe(true);
});

test("Verify that the year 1900 is not a leap year", () => {
    expect(isLeapYear(1900)).toBe(false);
});
