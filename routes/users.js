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
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id).select('-password');
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
        const { name,last_name,username,email,password } = req.body;
        let validateByUserEmail = await User.findOne({ email });
        let validateByUsername = await User.findOne({ username });
        if(validateByUsername){
            return res.status(401).json({ msg: "User with that username already exists" });
        }
        if(validateByUserEmail){
            return res.status(401).json({ msg: "User with that e-mail already exists" });
        }
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).json({ errors: errors.array() })
        }
        try {
            const user = new User({
                name,
                last_name,
                username,
                email,
                password
            });
            const salt = await bcryptjs.genSalt(10);
            user.password = await bcryptjs.hash(password,salt);
            await user.save();
            const payload = {
                user: {
                    id: user.id
                }
            };
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