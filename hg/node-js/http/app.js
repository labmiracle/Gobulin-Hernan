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

	// console.log('Request received, looks good!');
	// console.log('Method:', req.method);
	// console.log('URL:', req.url);
	// console.log('Headers:', req.headers);
});

const port = 3000;

// const port = 5000;

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
