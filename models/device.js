const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Device = mongoose.model('Device', new mongoose.Schema({
    platform: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    
    uuid: {
      type: String,
      required: true,
      length: 36
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },

    checkedOutBy: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },

    os: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    }
    
  }));
  

function validateDevice(device) {
const deviceSchema = Joi.object({

    platform: Joi.string().valid('iOS', 'Android'),
    
    name: Joi.string()
        .min(1)
        .max(10),

    Os: Joi.string()
        .min(1)
        .max(10),

    uuid: Joi.string().guid({ 
        version: [
            'uuidv4',
            "uuidv5"
        ]
    }),

    chckedOutBy: Joi.string().min(3).max(50)

});

return Joi.validate(device, deviceSchema); 

}

exports.Device = Device; 
exports.validate = validateDevice;