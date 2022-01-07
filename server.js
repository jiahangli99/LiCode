require('dotenv').config();
// Variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const codesController = require('./controller/codes')
const PORT = process.env.PORT
// Mongoose Connect

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.use('/', codesController)

// listen
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
