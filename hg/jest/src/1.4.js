function sumPositiveNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const number = Number(arr[i]);

        if (!isNaN(number) && number > 0) {
            sum += number;
        }
    }

    return sum;
}

module.exports = { sumPositiveNumbers };
