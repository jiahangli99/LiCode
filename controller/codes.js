const express = require('express');
const codeRouter = express.Router();
const JavaCode = require('../models/code')
const Category = require('../models/category')

// Seed
const codeSeed = require('../models/codeSeed')
codeRouter.get('/codes/seed', (req, res) => {
    JavaCode.create(codeSeed, (err, data) => {
        res.redirect('/')
    })
});
const categorySeed = require('../models/categorySeed')
codeRouter.get('/seed', (req, res) => {
    Category.create(categorySeed, (err, data) => {
        res.redirect('/')
    })
});

// // Main Page INDEX
codeRouter.get('/', (req, res) => {
    Category.find({}, (err, allCat) => {
        res.render('index.ejs', {
            categories: allCat
        })
    })
})


// NEW


// Delete


// Update


// Create


// Edit


// Show
codeRouter.get('/:id', (req, res) => {
    JavaCode.findById(req.params.id, (err, foundCode) => {
        res.render('showJava.ejs', {
            code: foundCode,
        });
    });
});
codeRouter.get('/:id/javascript', (req, res) => {
    JavaCode.find({}, (err, allCodes) => {
        res.render('typeView.ejs', {
            codes: allCodes,
        });
    });
});
// codeRouter.get('/:id/css', (req, res) => {
//     Code.find({}, (err, allCodes) => {
//         res.render('typeView.ejs', {
//             codes: allCodes,
//         });
//     });
// });
// codeRouter.get('/:id/html', (req, res) => {
//     Code.find({}, (err, allCodes) => {
//         res.render('typeView.ejs', {
//             codes: allCodes,
//         });
//     });
// });
// codeRouter.get('/:id/devtool', (req, res) => {
//     Code.find({}, (err, allCodes) => {
//         res.render('typeView.ejs', {
//             codes: allCodes,
//         });
//     });
// });


module.exports = codeRouter;