const array = [1, 2, 3, 4, 5];

// Custom 'find' function
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

const foundElement = myFind(array, element => element > 3);
console.log(foundElement);
// return: 4
