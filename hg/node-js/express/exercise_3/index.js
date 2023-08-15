const express = require('express');
const app = express();
const PORT = 3000;

const itemsRouter = require('./routes/items');

app.use(express.json());

app.use('/', express.static('public'));

app.use('/items', itemsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
