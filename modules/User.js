const mongoose = require('mongoose');

let User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hearts : [
        {
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            priceStart: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            genderName: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            itemUrl: {
                type: String,
                required: true
            }
        }
    ],
    items: [
        {
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            priceStart: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = User = mongoose.model('user',User);