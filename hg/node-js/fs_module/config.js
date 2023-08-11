const http = require('http');
const fs = require('fs');
const path = require('path');
const server = require('./src/server');

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
	console.log(`Server listening at http://${host}:${port}`);
});
