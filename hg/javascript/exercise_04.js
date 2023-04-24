//Crea una función que reciba una frase como cadena y devuelva la palabra más larga

function palabraMasLarga(str) {
	let palabras = str.split(' ');

	let palabraMasLarga = '';

	for (let i = 0; i < palabras.length; i++) {
		if (palabras[i].length > palabraMasLarga.length) {
			palabraMasLarga = palabras[i];
		}
	}

	return palabraMasLarga;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

//Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula
function primeraMayuscula(str) {
	let palabras = str.split(' ');
	let nuevaCadena = '';
	for (let i = 0; i < palabras.length; i++) {
		nuevaCadena +=
			palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1) + ' ';
	}
	return nuevaCadena.trim();
}
console.assert(
	primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha'
);
