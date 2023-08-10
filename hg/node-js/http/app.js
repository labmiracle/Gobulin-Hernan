const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/miraclelab') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<h1>Welcome to MiracleLab!</h1>');
	} else if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<h1>About Us</h1>');
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end('<h1>404 - File not found</h1>');
	}
});

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
