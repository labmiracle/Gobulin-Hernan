const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('This is the home page, design is my passion =)');
});

app.get('/about', (req, res) => {
	res.send('This is the "About us" page');
});

app.get('/where', (req, res) => {
	res.send('This is the "Where" page');
});

app.get('/what', (req, res) => {
	res.send('This is the "What we do" page');
});

app.get('/contact', (req, res) => {
	res.send('This is the contact page');
});

app.listen(3000, () => {
	console.log('The server is listening on port 3000');
});
