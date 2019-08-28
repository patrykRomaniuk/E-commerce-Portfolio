const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            db,
            { 
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;