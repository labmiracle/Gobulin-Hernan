function calculateTotalPrice(cart) {
	let total = 0;
	for (let i = 0; i < cart.products.length; i++) {
		total += cart.products[i].quantity * cart.products[i].price;
	}
	return total;
}

const cart = {
	products: [
		{
			name: 'papel higienico',
			quantity: 4,
			price: 5,
		},
		{
			name: 'chocolate',
			quantity: 2,
			price: 1.5,
		},
	],
	totalPrice: 0,
};

cart.totalPrice = calculateTotalPrice(cart);
console.log(cart.totalPrice);
// output: 23
