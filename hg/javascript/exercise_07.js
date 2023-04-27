function cc(cards) {
	let count = 0;
	const cardValues = {
		2: 1,
		3: 1,
		4: 1,
		5: 1,
		6: 1,
		7: 0,
		8: 0,
		9: 0,
		10: -1,
		J: -1,
		Q: -1,
		K: -1,
		A: -1,
	};

	for (let i = 0; i < cards.length; i++) {
		let card = cards[i];

		if (!(card in cardValues)) {
			return 'One of the cards is not valid';
		}

		count += cardValues[card];
	}

	return count > 0 ? `${count} Bet` : `${count} Hold`;
}
/*
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
*/

console.log(cc(['2', '3', '7', 'K', 'A']));
// Output "0 Hold"
