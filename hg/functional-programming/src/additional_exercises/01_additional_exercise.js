const array = [1, 2, 3, 4, 5];

// Custom 'map' function
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const mappedArray = myMap(array, element => element * 2);
console.log(mappedArray);
// return: [2, 4, 6, 8, 10]
