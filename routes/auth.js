const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult,check } = require('express-validator');
const bcryptjs = require('bcryptjs');

//Login system
router.post(
    '/',
    //Express-validator
    [
        check('email','Please Put Valid Email').isEmail(),
        check('password','Password is required').not().isEmpty()
    ],
    async(req,res) => {
        //Taking values from body
        const { email,password } = req.body;
        const errors = validationResult(req);
        //Searching for user by email
        let user = await User.findOne({ email });
        //Checking if there is not user
        if(!user){
            return res.status(404).json({ msg: "User not found" });
        }
        //Error handler
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            //Checking if passwords match
            const isMatch = await bcryptjs.compare(password,user.password);
            if(!isMatch){
                return res.status(401).json({ msg: "Password does not match" });
            }
            //Saving user
            await user.save();
            //Initalizing payload
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
            )
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;