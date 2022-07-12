import express from 'express';

const api = express();

api.get('*', (req, res) => res.send('welcome from docker!'));

api.listen('4001', () => console.log('API on! => http://localhost:4001/'));
