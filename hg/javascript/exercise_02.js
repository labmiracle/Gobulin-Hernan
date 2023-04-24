function sum(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}
}

const numbers = [1, 2, 3, 4, 5];

const sumFirstFourNumbers = sum(numbers, 4);

console.log(sumFirstFourNumbers);
// Output 10 (the sum of the first 4 numbers: 1 + 2 + 3 + 4)
