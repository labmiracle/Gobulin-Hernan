function sumar(...numeros) {
	let resultado = 0;
	for (let numero of numeros) {
		resultado += numero;
	}
	return resultado;
}

console.log(sumar(3, 4, 5));
// output: 12
