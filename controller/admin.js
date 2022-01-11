const express = require('express');

const userRouter = express.Router();
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')

userRouter.get('/login/admin', (req, res) => {
    res.render('adminLogin.ejs', {error: ''});
});
userRouter.post('/login/admin', (req, res) => {
   Admin.findOne({email: req.body.email}, (err, admin) => {
       if(!admin) return res.render('adminLogin.ejs', {error: 'invalid credentials'})
       const isMatched = bcrypt.compareSync(req.body.password, admin.password);
       if(!isMatched) return res.render('adminlogin.ejs', {error: 'invalid credentials'})
       req.session.admin = admin._id
        res.redirect('/')
   })
})

// sign up routes

userRouter.get('/signup/adminsignup', (req, res) => {
    res.render('adminSignUp.ejs');
});

userRouter.post('/signup/adminsignup', (req, res) => {
    // 1) Encrypt their plain text password with bcrypt
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));
    //  1.1) Create the user
    Admin.create(req.body, (err, admin) => {
    // 2) redirect to GET /login
        res.redirect('/login/admin');
    })
})

userRouter.get('/logout', (req, res) => {
    req.session.destroy(function() {
        res.redirect('/')
    })
});


module.exports = userRouter;