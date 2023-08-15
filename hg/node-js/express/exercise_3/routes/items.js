const express = require('express');
const router = express.Router();

const items = [
	{ id: 1, name: 'Milk', price: 2.99 },
	{ id: 2, name: 'Bread', price: 1.49 },
	{ id: 3, name: 'Eggs', price: 3.99 },
	{ id: 4, name: 'Bananas', price: 0.79 },
];
let nextItemId = 5;

router.get('/', (req, res) => {
	res.json(items);
});

router.post('/', (req, res) => {
	const newItem = { id: nextItemId++, ...req.body };
	items.push(newItem);
	res.status(201).json(newItem);
});

router.get('/:id', (req, res) => {
	const itemId = parseInt(req.params.id);
	const item = items.find((item) => item.id === itemId);
	if (item) {
		res.json(item);
	} else {
		res.status(404).json({ message: 'Item not found' });
	}
});

router.patch('/:id', (req, res) => {
	const itemId = parseInt(req.params.id);
	const updatedData = req.body;
	const itemIndex = items.findIndex((item) => item.id === itemId);
	if (itemIndex !== -1) {
		items[itemIndex] = { ...items[itemIndex], ...updatedData };
		res.json(items[itemIndex]);
	} else {
		res.status(404).json({ message: 'Item not found' });
	}
});

router.delete('/:id', (req, res) => {
	const itemId = parseInt(req.params.id);
	const itemIndex = items.findIndex((item) => item.id === itemId);
	if (itemIndex !== -1) {
		const deletedItem = items.splice(itemIndex, 1);
		res.json(deletedItem[0]);
	} else {
		res.status(404).json({ message: 'Item not found' });
	}
});

module.exports = router;
