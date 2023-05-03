function guessNumber() {
	let level;

	do {
		level = prompt(
			'Select a difficulty level: easy, medium, or hard'
		).toLowerCase();
	} while (level !== 'easy' && level !== 'medium' && level !== 'hard');

	let maxNum;
	switch (level) {
		case 'easy':
			maxNum = 10;
			break;
		case 'medium':
			maxNum = 50;
			break;
		case 'hard':
			maxNum = 100;
			break;
	}

	const randomNum = Math.floor(Math.random() * maxNum) + 1;

	let guessedNum;
	let attempts = 0;

	do {
		guessedNum = parseInt(prompt(`Guess the number (between 1 and ${maxNum})`));

		if (guessedNum < randomNum) {
			alert('The number is greater');
		} else if (guessedNum > randomNum) {
			alert('The number is smaller');
		}

		attempts++;
	} while (guessedNum !== randomNum);

	alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
}

guessNumber();
