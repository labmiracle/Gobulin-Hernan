function guessNumber() {
	const randomNum = Math.floor(Math.random() * 10) + 1;

	let guessedNum;

	do {
		guessedNum = parseInt(prompt('Guess the number (between 1 and 10)'));

		if (guessedNum < randomNum) {
			alert('The number is greater');
		} else if (guessedNum > randomNum) {
			alert('The number is smaller');
		}
	} while (guessedNum !== randomNum);

	alert(`Congratulations! You guessed the number!`);
}

guessNumber();
