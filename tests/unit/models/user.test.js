const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config = require('chai');
const mongoose = require('mongoose');

describe('user.generateAuthToken', ()=> {
    it('should retunr a valid JWT', () => {
    const payload = {_id: new mongoose.Types.ObjectId().toHexString()};
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    expect(decoded).toMachObject(payload);
    });

});