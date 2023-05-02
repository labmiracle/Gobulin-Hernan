function addOnlyNums(...args) {
	let total = 0;
	for (let arg of args) {
		if (typeof arg === 'number' && !isNaN(arg)) {
			total += arg;
		}
	}
	return total;
}

console.log(addOnlyNums(4, 3, '9', '15'));
// Output: 7
