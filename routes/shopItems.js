const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../modules/User');

//Sum items price via backend
router.get(
    '/sum_prices',
    //Checking if user is logged in
    auth,
    async(req,res) => {
        try {
            //Getting user by id
            let user = await User.findById(req.user.id);
            //Adding prices
            const findPrices = user.items.map(item => item.price)
            .reduce((a,b) => a + b,0);
            //Output the result
            res.json(findPrices)
        } catch (error) {
            console.log(error.message);
        }
    }
)

//Getting user
router.get(
    '/',
    //Checking if is logged in
    auth,
    async(req,res) => {
        try {
            //Getting user without password
            let user = await User.findById(req.user.id).select('-password');
            //Output
            res.json(user.shopItems);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

//Adding shopItem
router.put(
    '/',
    //Checking if is logged in
    auth,
    async(req,res) => {
        //Getting values
        const { image,price,name,priceStart,size } = req.body;
        //Getting user by auth
        let user = await User.findById(req.user.id);
        try {
            //Initializing shopItem
            const shopItem = {
                image,
                price,
                name,
                priceStart,
                size
            };
            //Adding shopItem on beggining of array
            user.items.unshift(shopItem);
            //Saving to database
            await user.save();
            //Output
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
);

//Removing shop item by id
router.delete(
    //getting id of item
    '/:id',
    //Checking if user is logged in
    auth,
    async(req,res) => {
        try {
            //Getting user by id
            let user = await User.findById(req.user.id);
            //Searching for item by id
            const removeIndex = user.items
            .filter(item => item.id !== req.params.id);
            //Removing item via index
            user.items = removeIndex;
            //Saving to database
            await user.save();
            //Output
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
);

module.exports = router;