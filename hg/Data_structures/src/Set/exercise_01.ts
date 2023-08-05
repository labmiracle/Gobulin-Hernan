function hasDuplicates(arr: number[]): boolean {
    const set = new Set<number>();
    for (const num of arr) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

const arrEx_1a = [1, 2, 3, 4, 5];
console.log(hasDuplicates(arrEx_1a));

const arrEx_1b = [1, 2, 3, 4, 4];
console.log(hasDuplicates(arrEx_1b));
