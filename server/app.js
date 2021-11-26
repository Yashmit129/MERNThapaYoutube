const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world from the server');
})

app.get('/about', (req, res) => {
	res.send('Hello About world from the server');
})

app.get('/contact', (req, res) => {
	res.send('Hello Contact world from the server');
})

app.get('/login', (req, res) => {
	res.send('Hello Login world from the server');
})

app.get('/signup', (req, res) => {
	res.send('Hello Registration world from the server');
})

app.listen(3000, () => {
	console.log(`Server running on port ${port}`)
})