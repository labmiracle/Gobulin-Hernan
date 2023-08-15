const express = require('express');
const app = express();
const PORT = 3000;

const itemsRouter = require('./routes/items'); // Import the items router

app.use(express.json());

app.use('/', express.static('public')); // Serve the static HTML file

app.use('/items', itemsRouter); // Use the items router for item-related routes

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
