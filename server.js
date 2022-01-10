require('dotenv').config();
// Variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT
const SECRET = process.env.SECRET
const methodOverride = require('method-override')
const codesController = require('./controller/codes')
const userController = require('./controller/users')
const expressSession = require('express-session');
// Mongoose Connect

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({
    extended: true
}));
app.use(expressSession({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(function(req, res, next) {
    console.log('Session Store: ', req.session)
    next();
})
app.use(methodOverride('_method'));
app.use('/', codesController)
app.use('/', userController)

// listen
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
