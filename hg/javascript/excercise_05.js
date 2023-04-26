function camelize(str) {
	let words = str.split(' ');
	let newPhrase = '';
	for (let i = 0; i < words.length; i++) {
		let firstLetter =
			i === 0
				? words[i].charAt(0).toLowerCase()
				: words[i].charAt(0).toUpperCase();
		newPhrase += firstLetter + words[i].slice(1);
	}
	return newPhrase;
}

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');

// a possible input

/*
let phrase = "Hola a todos que tal";
let result = camelize(phrase);
console.log(result);
*/
