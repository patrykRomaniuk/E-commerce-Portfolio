const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        //Connecting to database 
        await mongoose.connect(
            db,
            { 
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
        //Message if application is connected
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;