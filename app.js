const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, createIndexes: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const product = require('./routes/product.route'); // Imports routes for the products
app.use('/products', product);

const user = require('./routes/user.route'); // Imports routes for the users
app.use('/users', user);

let port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});