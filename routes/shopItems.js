const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../modules/User');

//Sum items price via backend
router.get(
    '/sum_prices',
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id);
            const findPrices = user.items.map(item => item.price)
            .reduce((a,b) => a + b,0);
            res.json(findPrices)
        } catch (error) {
            console.log(error.message);
        }
    }
)

//Getting user
router.get(
    '/',
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id).select('-password');
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
    auth,
    async(req,res) => {
        const { image,price,name,priceStart,size } = req.body;
        let user = await User.findById(req.user.id);
        try {
            const shopItem = {
                image,
                price,
                name,
                priceStart,
                size
            }
            user.items.unshift(shopItem);
            await user.save();
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
);

//Removing shop item by id
router.delete(
    '/:id',
    auth,
    async(req,res) => {
        try {
            let user = await User.findById(req.user.id);
            const removeIndex = user.items
            .filter(item => item.id !== req.params.id);
            user.items = removeIndex;
            await user.save();
            res.json(user);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
);

module.exports = router;