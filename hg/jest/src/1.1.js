function fizzBuzz(number) {
    if (typeof number !== "number") {
        throw new Error("The argument must be a number.");
    }

    if (number === 0) {
        return "FizzBuzz";
    }

    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }

    if (number % 3 === 0) {
        return "Fizz";
    }

    if (number % 5 === 0) {
        return "Buzz";
    }

    return number.toString();
}

module.exports = fizzBuzz;
