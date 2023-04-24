function calculateDaysGrowth(speedGrowth, speedDecrease, desiredHeight) {
	let currentHeight = 0;

	let days = 0;

	while (currentHeight < desiredHeight) {
		currentHeight += speedGrowth;

		if (currentHeight >= desiredHeight) {
			break;
		}

		currentHeight -= speedDecrease;

		days++;
	}

	return days;
}

const speedGrowth = 5;
const speedDecrease = 2;
const desiredHeight = 20;

const days = calculateDaysGrowth(speedGrowth, speedDecrease, desiredHeight);

console.log(
	`It will take ${days} days for the plant to reach the desired height.`
);
