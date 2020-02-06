const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const connectDatabase = require('./config/db');

//Connecting to database
connectDatabase();

//Added cors policy
app.use(cors());

app.use(express.json({ extended: false }));

//Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/hearts',require('./routes/hearts'));
app.use('/api/shopItems',require('./routes/shopItems'));

//Production build for heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

//Initialized Port ( checking if value is added from proccess.env, if not making localhost:5000 )
const PORT = process.env.PORT || 5000;

//Added listen function
app.listen(PORT, () => console.log(`App running on Port: ${PORT}`));