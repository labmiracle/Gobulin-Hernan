const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url);
	res.end("Hello MiracleLab, we'll see you on Friday at the Happy Hour!");
});

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
