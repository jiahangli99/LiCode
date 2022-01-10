const express = require('express');

const userRouter = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.get('/login', (req, res) => {
    res.render('login.ejs', {error: ''});
});
userRouter.post('/login', (req, res) => {
   User.findOne({email: req.body.email}, (err, user) => {
       if(!user) return res.render('login.ejs', {error: 'invalid credentials'})
       const isMatched = bcrypt.compareSync(req.body.password, user.password);
       if(!isMatched) return res.render('login.ejs', {error: 'invalid credentials'})
       req.session.user = user._id
        res.redirect('/')
   })
})

// sign up routes

userRouter.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

userRouter.post('/signup', (req, res) => {
    // 1) Encrypt their plain text password with bcrypt
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));
    //  1.1) Create the user
    User.create(req.body, (err, user) => {
    // 2) redirect to GET /login
        res.redirect('/login');
    })
})

userRouter.get('/logout', (req, res) => {
    req.session.destroy(function() {
        res.redirect('/')
    })
});


module.exports = userRouter;