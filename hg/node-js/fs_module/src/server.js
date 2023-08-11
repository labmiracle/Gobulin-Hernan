const http = require('http');
const fs = require('fs');
const path = require('path');

const handle404 = (res) => {
	const errorFilePath = path.join(__dirname, 'views', '404.html');
	fs.readFile(errorFilePath, 'utf8', (err, errorData) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Error 404 - Page Not Found');
		} else {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.end(errorData);
		}
	});
};

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Welcome to the server!');
	} else if (req.url === '/about') {
		const filePath = path.join(__dirname, 'views', 'about.html');
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				handle404(res);
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			}
		});
	} else if (req.url === '/example_text') {
		const txtFilePath = path.join(__dirname, '..', 'example_text.txt');
		fs.readFile(txtFilePath, 'utf8', (err, txtData) => {
			if (err) {
				handle404(res);
			} else {
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end(txtData);
			}
		});
	} else {
		handle404(res);
	}
});

module.exports = server;
