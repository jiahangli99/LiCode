const express = require('express');
const codeRouter = express.Router();
const JavaCode = require('../models/code')
const Category = require('../models/category')
const CSS = require('../models/css')
const HTML = require('../models/html')
const DEV = require('../models/devTool')

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

// Seed html
const htmlSeed = require('../models/htmlSeed')
codeRouter.get('/html/seed', (req, res) => {
    HTML.create(htmlSeed, (err, data) => {
        res.redirect('/')
    })
});

// Seed dev
const devSeed = require('../models/devToolSeed')
codeRouter.get('/dev/seed', (req, res) => {
    DEV.create(devSeed, (err, data) => {
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

// Show html
codeRouter.get('/:id/html', (req, res) => {
    HTML.find({}, (err, allHtml) => {
        res.render('htmlView.ejs', {
            allHtml
        });
    });
});
codeRouter.get('/:id/htmlview', (req, res) => {
    HTML.findById(req.params.id, (err, html) => {
        res.render('showHtml.ejs', {
            html
        });
    });
});
// Show Devtools
codeRouter.get('/:id/devtool', (req, res) => {
    DEV.find({}, (err, allDev) => {
        res.render('devView.ejs', {
            allDev
        });
    });
});
codeRouter.get('/:id/devtoolview', (req, res) => {
    DEV.findById(req.params.id, (err, dev) => {
        res.render('showDev.ejs', {
            dev
        });
    });
});

module.exports = codeRouter;