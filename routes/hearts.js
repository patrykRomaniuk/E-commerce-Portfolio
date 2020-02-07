const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../modules/User');

//Getting all user hearts ( favourite items )
router.get(
    '/',
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id);
            res.json(user.hearts);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

//Adding heart Item ( favourite item ), to start of an array
router.put(
    '/',
    auth,
    async(req,res) => {
        const { image,price,name,priceStart,genderName,url,itemUrl } = req.body;
        let user = await User.findById(req.user.id);
        try {
            const heartItem = {
                image,
                price,
                name,
                priceStart,
                genderName,
                url,
                itemUrl
            };
            user.hearts.unshift(heartItem);
            await user.save();
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
);

//Removing heart by ID
router.delete(
    '/:id',
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id);
            const removeIndex = user.hearts
            .filter(heart => heart.id !== req.params.id);
            user.hearts = removeIndex;
            await user.save();
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;