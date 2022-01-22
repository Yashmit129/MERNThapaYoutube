const express = require('express');

const app = express();

const port = 3000;

const middleware = (req, res, next) => {
	console.log("Hello My MiddleWare");
	next();
}


app.get('/', (req, res) => {
	res.send('Hello world from the server');
})

app.get('/about', middleware, (req, res) => {
	console.log("Hello My About");
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