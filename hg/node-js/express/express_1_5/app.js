const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
//const PORT = 3000;
const PORT = 4567;

const logCurrentURL = (req, res, next) => {
	console.log('Current URL:', req.url);
	next();
};

app.use(express.static(path.join(__dirname, 'public')));

app.use(logCurrentURL);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/yo', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'yo.html'));
});

app.listen(PORT, () => {
	console.log(`Express server listening on port ${PORT}`);
});
