function mergeUniqueArrays(arr1: number[], arr2: number[]): number[] {
    const set = new Set<number>();
    for (const num of arr1) {
        set.add(num);
    }
    for (const num of arr2) {
        set.add(num);
    }
    return Array.from(set);
}

const arrEx_2a = [1, 2, 3, 4, 5];
const arrEx_2b = [3, 4, 4, 5, 6, 7];
console.log(mergeUniqueArrays(arrEx_2a, arrEx_2b));
