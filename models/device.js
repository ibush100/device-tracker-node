const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const deviceSchema =  new mongoose.Schema({
    platform: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
     },

    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    }

    // uuid: {
    //   type: String,
    //   required: true,
    //   length: 36,
    //   unique: true
    // },

    // checkedOutBy: {
    //   type: String,
    //   required: true,
    //   minlength: 5,
    //   maxlength: 50
    // },

    // os: {
    //   type: String,
    //   required: true,
    //   minlength: 1,
    //   maxlength: 50
    // }
  });
  
const Device = mongoose.model('Device', deviceSchema);

function validateDevice(device) {
const schema = Joi.object({

    platform: Joi.string().min(3).max(5),
    
    name: Joi.string()
        .min(1)
        .max(10)

    // Os: Joi.string()
    //     .min(1)
    //     .max(10),

    // uuid: Joi.string().guid({ 
    //     version: [
    //         'uuidv4',
    //         "uuidv5"
    //     ]
    // }),

    // checkedOutBy: Joi.string().min(3).max(50)

});

return schema.validate(device); 

}

exports.Device = Device; 
exports.validate = validateDevice;