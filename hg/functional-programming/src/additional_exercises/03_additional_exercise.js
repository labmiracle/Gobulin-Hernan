const array = [1, 2, 3, 4, 5];

// Custom 'filter' function
function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

const filteredArray = myFilter(array, element => element % 2 === 0);
console.log(filteredArray);
// return: [2, 4]
