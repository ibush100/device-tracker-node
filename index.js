require('express-async-errors');
const winston = require('winston');
const config = require('config');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');
const express = require('express');
const devices = require('./routes/devices');
const app = express();

winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/devices'});

if(!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined');
  process.exit(1);
}
mongoose.connect('mongodb://localhost/devices')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/devices', devices);
app.use('/api/auth', auth); 
app.use('/api/users', users); 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));