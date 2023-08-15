const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

app.listen(PORT, () => {
	console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
