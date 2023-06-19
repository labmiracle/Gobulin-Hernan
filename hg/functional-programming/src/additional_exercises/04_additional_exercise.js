const array = [1, 2, 3, 4, 5];

// Custom 'reduce' function
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const start = initialValue !== undefined ? 0 : 1;
    for (let i = start; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const reducedResult = myReduce(array, (accumulator, element) => accumulator + element, 0);
console.log(reducedResult);
// return: 15
