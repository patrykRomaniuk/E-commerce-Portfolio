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
            //Getting user by auth
            let user = await User.findById(req.user.id);
            //Showing hearts
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
    //Checking if user is logged in
    auth,
    async(req,res) => {
        //Getting values
        const { image,price,name,priceStart,genderName,url,itemUrl } = req.body;
        //Getting user by auth
        let user = await User.findById(req.user.id);
        try {
            //Initializing heartitem
            const heartItem = {
                image,
                price,
                name,
                priceStart,
                genderName,
                url,
                itemUrl
            };
            //Added heartItem on beggining of hearts
            user.hearts.unshift(heartItem);
            //Saving user
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
            //Taking user
            let user = await User.findById(req.user.id);
            //Searching for heart by id
            const removeIndex = user.hearts
            .filter(heart => heart.id !== req.params.id);
            //Removing index from hearts array
            user.hearts = removeIndex;
            //Saving to database
            await user.save();
            //Showing user
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;