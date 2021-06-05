const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    try {
        const token = req.header('x-auth-token');
        const decoded = jwt.verify(
            token,
            config.get('jwtSecret')
        );
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
    }
}