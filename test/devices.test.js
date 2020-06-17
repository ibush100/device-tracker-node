const request = require('supertest');
let server;
let token;
const {User} = require('../models/user');

describe('/api/devices', () => {
beforeEach(async () => {
server = require('../index'); 
let user = await User.findOne({email:  "the@example.com"}); 
token = user.generateAuthToken();
});

describe('GET /', function()  {
    it('response with json', function(done) {
        request(server)
        .get('/api/devices')
        .set('Accept', 'application/json')
        .set('x-auth-token', token)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('response with a 401 without token', function(done) {
        request(server)
        .get('/api/devices')
        .set('Accept', 'application/json')
        .expect(401, done);
    });

});

});