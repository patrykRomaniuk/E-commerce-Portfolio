const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    try {
        //Getting token from header
        const token = req.header('x-auth-token');
        //Verifying token
        const decoded = jwt.verify(
            token,
            config.get('jwtSecret')
        );
        //Adding value to request
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
    }
}