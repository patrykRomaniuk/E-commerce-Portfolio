const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../modules/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { validationResult,check } = require('express-validator');

//Getting user
router.get(
    '/me',
    //Checking if is loggedi n
    auth,
    async(req,res) => {
        try {
            //Getting user without password
            let user = await User.findById(req.user.id).select('-password');
            //Output
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

//Registering user
router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
        check('last_name','Last name is required').not().isEmpty(),
        check('username','Username is required').not().isEmpty(),
        check('email','Please Put Valid Email').isEmail(),
        check('password','Password is required').not().isEmpty(),
    ],  
    async(req,res) => {
        //Getting values
        const { name,last_name,username,email,password } = req.body;
        //Getting user by Email
        let validateByUserEmail = await User.findOne({ email });
        //Getting user by Name
        let validateByUsername = await User.findOne({ username });
        //Checking if there is user with this name
        if(validateByUsername){
            return res.status(401).json({ msg: "User with that username already exists" });
        }
        //Checking if there is user with this e-mail
        if(validateByUserEmail){
            return res.status(401).json({ msg: "User with that e-mail already exists" });
        }
        //Error handler
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).json({ errors: errors.array() })
        }
        try {
            //Initializing user
            const user = new User({
                name,
                last_name,
                username,
                email,
                password
            });
            //Added salt
            const salt = await bcryptjs.genSalt(10);
            //Hashed user password
            user.password = await bcryptjs.hash(password,salt);
            //Saving to database
            await user.save();
            //Payload
            const payload = {
                user: {
                    id: user.id
                }
            };
            //Adding token
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err,token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            );
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;