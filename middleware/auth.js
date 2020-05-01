const jwt = require('jsonwebtoken');
const config = require('config');

mondule.export = function (req, res, next) {
    const token = req.header('X-auth-token');
    if(!token) res.status(401).send('Access denied');

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } 
    catch(ex) {
        res.status(400).send('Invalid token');
    }
};

