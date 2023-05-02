function onlyUniques(...args) {
	return args.reduce((acc, current) => {
		if (!acc.includes(current)) {
			acc.push(current);
		}
		return acc;
	}, []);
}
console.log(
	onlyUniques(
		'house',
		'dog',
		'dog',
		'cat',
		'cat',
		'parrot',
		'house',
		'house',
		'dog',
		'dog',
		'cat',
		'cat',
		'parrot',
		'house',
		1,
		2,
		3,
		1,
		5,
		5,
		4,
		2,
		true,
		false,
		true,
		false
	)
);

//Output ['house', 'dog', 'cat', 'parrot', 1, 2, 3, 5, 4, true, false]
