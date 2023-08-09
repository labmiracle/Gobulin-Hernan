const http = require('http');

const server = http.createServer((req, res) => {
	res.end("Hello MiracleLab, we'll see you on Friday at the Happy Hour!");
});

server.listen(5000, () => {
	console.log('Server is listening on port 5000');
});
