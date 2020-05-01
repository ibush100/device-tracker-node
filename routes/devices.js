const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Device, validate} = require('../models/device');

//Get devices list
router.get('/', auth, async (req, res) => {
  const devices = await Device.find().sort('n   ame');
  res.send(devices);
});

//Create a new device
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let device = new Device({ name: req.body.name });
  device = await device.save();
  
  res.send(device); 
  });
  
  module.exports = router;