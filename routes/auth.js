const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult,check } = require('express-validator');
const bcryptjs = require('bcryptjs');

router.post(
    '/',
    [
        check('email','Please Put Valid Email').isEmail(),
        check('password','Password is required').not().isEmpty()
    ],
    async(req,res) => {
        const { email,password } = req.body;
        const errors = validationResult(req);
        let user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({ msg: "User not found" });
        }
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const isMatch = await bcryptjs.compare(password,user.password);
            if(!isMatch){
                return res.status(401).json({ msg: "Password does not match" });
            }
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
            )
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;