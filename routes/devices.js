const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Device, validate} = require('../models/device');
const auth = require('../middleware/auth');
const _ = require('lodash');

//Get devices list
router.get('/', auth, async (req, res) => {
 const devices = await Device.find().sort('name');
 res.send(devices);
});

//Create a new device

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  // add uuuid and the other shit
  let device = new Device(_.pick(req.body, ['platform', 'name', 'uuid', 'os', 'checkedOutBy']));
  device = await device.save()
  .catch(err => console.log(err));
  
  res.send(device); 
  });
  
  module.exports = router;