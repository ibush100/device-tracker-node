const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const devices = require('../routes/devices');
const error = require('../middleware/error');

module.exports = function(app){
app.use(express.json());
app.use('/api/devices', devices);
app.use('/api/auth', auth); 
app.use('/api/users', users); 
app.use(error);

}