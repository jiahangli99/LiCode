const express = require('express');
const codeRouter = express.Router();
const Code = require('../models/code')
const Category = require('../models/category')

// Seed
// const codeSeed = require('../models/codeSeed')
// codeRouter.get('/seed', (req, res) => {
//     Code.create(codeSeed, (err, data) => {
//         res.redirect('/')
//     })
// });
const categorySeed = require('../models/categorySeed')
codeRouter.get('/seed', (req, res) => {
    Category.create(categorySeed, (err, data) => {
        res.redirect('/')
    })
});

// // Main Page
codeRouter.get('/', (req, res) => {
    Category.find({}, (err, allCat) => {
        res.render('index.ejs', {
            categories: allCat
        })
    })
})

module.exports = codeRouter;