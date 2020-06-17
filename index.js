require('express-async-errors');
const winston = require('winston');
const express = require('express');
const config = require('config');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

winston.add(winston.transports.File, {filename: 'logfile.log'});

process.on('uncaughtException', (ex) => {
  console.log('There was an uncaught exception');
  winston.error(ex.message, ex);
  process.exit(1);
});

process.on('unhandledRejection', (ex) => {
  console.log('There was an uncaught exception');
  winston.error(ex.message, ex);
});

if(!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined');
  process.exit(1);
}

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));