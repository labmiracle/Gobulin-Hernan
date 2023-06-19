const numbers = require("./numbers");
const operators = require("./operators");

const { zero, one, two, three, four, five, six, seven, eight, nine } = numbers;
const { plus, minus, times, dividedBy } = operators;

console.log(seven(times(five())));
// return 35

console.log(four(plus(nine())));
// return 13

console.log(eight(minus(three())));
// return 5

console.log(six(dividedBy(two())));
// return 3
