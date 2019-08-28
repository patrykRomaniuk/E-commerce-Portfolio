const express = require('express');
const app = express();
const cors = require('cors');

const connectDatabase = require('./config/db');

connectDatabase();

app.use(cors());

app.use(express.json());

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/hearts',require('./routes/hearts'));
app.use('/api/shopItems',require('./routes/shopItems'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on Port: ${PORT}`));