const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const cars = [
	{
		id: 0,
		brand: 'Ford',
		color: 'red',
		year: 2022,
		model: 'Fiesta',
		image: '/images/cars/0.png',
	},
	{
		id: 1,
		brand: 'Volkswagen',
		color: 'black',
		year: 2019,
		model: 'Golf GTI',
		image: '/images/cars/1.png',
	},
	{
		id: 2,
		brand: 'Toyota',
		color: 'yellow',
		year: 2017,
		model: 'RAV-4',
		image: '/images/cars/2.png',
	},
	{
		id: 3,
		brand: 'Porshe',
		color: 'black',	
		year: 2022,
		model: 'Cayenne',
		image: '/images/cars/3.png',
	},
	{
		id: 4,
		brand: '	',
		color: 'White',
		year: 2021,
		model: '500',
		image: '/images/cars/4.png',
	},
	{
		id: 5,
		brand: 'Chevrolet',
		color: 'red',
		year: 2019,
		model: 'Onix',
		image: '/images/cars/5.png',
	},
];

app.get('/api/cars', (req, res) => {
	res.send(cars);
});

app.get('/api/cars/:id', (req, res) => {
	const car = cars.filter(car => car.id.toString() === req.params.id)[0];
	res.status(200).json(car);
});

app.post('/api/cars', (req, res) => {
	if (req.body.id !== undefined) cars.push(req.body);
	res.status(201).json(cars);
});

app.listen(5001, () => {
	console.log('Server listening on port 5001');
});
