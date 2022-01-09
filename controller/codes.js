const express = require('express');
const codeRouter = express.Router();
const JavaCode = require('../models/code')
const Category = require('../models/category')
const CSS = require('../models/css')

// Seed category
const categorySeed = require('../models/categorySeed')
codeRouter.get('/seed', (req, res) => {
    Category.create(categorySeed, (err, data) => {
        res.redirect('/')
    })
});
// Seed javascript
const codeSeed = require('../models/codeSeed')
codeRouter.get('/codes/seed', (req, res) => {
    JavaCode.create(codeSeed, (err, data) => {
        res.redirect('/')
    })
});
// Seed css
const cssSeed = require('../models/cssSeed')
codeRouter.get('/css/seed', (req, res) => {
    CSS.create(cssSeed, (err, data) => {
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


// Show javascript
codeRouter.get('/:id/javascript', (req, res) => {
    JavaCode.find({}, (err, allJavascriptCodes) => {
        res.render('javascriptView.ejs', {
            scriptCodes: allJavascriptCodes,
        });
    });
});
codeRouter.get('/:id/javascriptcode', (req, res) => {
    JavaCode.findById(req.params.id, (err, foundCode) => {
        res.render('showJavaS.ejs', {
            code: foundCode,
        });
    });
});

// Show css
codeRouter.get('/:id/css', (req, res) => {
    CSS.find({}, (err, allCss) => {
        res.render('cssview.ejs', {
            allCss
        });
    });
});
codeRouter.get('/:id/cssview', (req, res) => {
    CSS.findById(req.params.id, (err, foundCss) => {
        res.render('showCss.ejs', {
            css: foundCss
        });
    });
});
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