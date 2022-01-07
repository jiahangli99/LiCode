require('dotenv').config();
// Variables
const express = require('express');
const app = express();
const Mongoose = require('mongoose');
const methodOverride = require('method-override')
const PORT = process.env.PORT
// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));

// Mongoose Connect

Mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// listen
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})