const express = require('express');
const codeRouter = express.Router();
const JavaCode = require('../models/code')
const Category = require('../models/category')
const CSS = require('../models/css')
const HTML = require('../models/html')
const DEV = require('../models/devTool')
const User = require('../models/user');
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const Admin = require('../models/admin')


// Seed category
const categorySeed = require('../models/categorySeed')
codeRouter.get('/seed', (req, res) => {
    Category.create(categorySeed, (err, data) => {
        res.redirect('/')
    })
});
// Seed javascript
const codeSeed = require('../models/codeSeed')
codeRouter.get('/codes/seed', admin.isAdminAuthenticated, (req, res) => {
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


// NEW JS
codeRouter.get('/javascript/new', admin.isAdminAuthenticated, (req, res) => {
    res.render('newJS.ejs')
})

// NEW CSS
codeRouter.get('/css/new', admin.isAdminAuthenticated, (req, res) => {
    res.render('newCss.ejs')
})

// NEW HTML
codeRouter.get('/html/new', admin.isAdminAuthenticated, (req, res) => {
    res.render('newHtml.ejs')
})

// NEW DEV
codeRouter.get('/dev/new', admin.isAdminAuthenticated, (req, res) => {
    res.render('newDev.ejs')
})

// Delete
codeRouter.delete('/:id/javascriptcode', admin.isAdminAuthenticated, (req, res) => {
    JavaCode.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/")
    })
})
codeRouter.delete('/:id/cssview', admin.isAdminAuthenticated, (req, res) => {
    CSS.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/")
    })
})
codeRouter.delete('/:id/devtoolview', admin.isAdminAuthenticated, (req, res) => {
    DEV.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/")
    })
})
codeRouter.delete('/:id/htmlview', admin.isAdminAuthenticated, (req, res) => {
    HTML.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/")
    })
})

// Update


// Create JS
codeRouter.post('/61d8dba87557c55c5353fa7f/javascript', admin.isAdminAuthenticated, (req, res) => {
    JavaCode.create(req.body, (err, createdCode) => {
        res.redirect('/61d8dba87557c55c5353fa7f/javascript')
    })
})

// Create CSS
codeRouter.post('/61d8dba87557c55c5353fa80/css', admin.isAdminAuthenticated, (req, res) => {
    CSS.create(req.body, (err, createdCode) => {
        res.redirect('/61d8dba87557c55c5353fa80/css')
    })
})

// Create HTML
codeRouter.post('/61d8dba87557c55c5353fa81/html', admin.isAdminAuthenticated, (req, res) => {
    HTML.create(req.body, (err, createdCode) => {
        res.redirect('/61d8dba87557c55c5353fa81/html')
    })
})

// Create DEV
codeRouter.post('/61d8dba87557c55c5353fa82/devtool', admin.isAdminAuthenticated, (req, res) => {
    DEV.create(req.body, (err, createdCode) => {
        res.redirect('/61d8dba87557c55c5353fa82/devtool')
    })
})

// Edit


// Show javascript
codeRouter.get('/:id/javascript', auth.isAuthenticated, (req, res) => {
    JavaCode.find({}, (err, allJavascriptCodes) => {
        res.render('javascriptView.ejs', {
            scriptCodes: allJavascriptCodes,
            Admin,
            admin: req.session.Admin
        });
    });
});
codeRouter.get('/:id/javascriptcode', auth.isAuthenticated, (req, res) => {
    JavaCode.findById(req.params.id, (err, foundCode) => {
        res.render('showJavaS.ejs', {
            code: foundCode,
        });
    });
});

// Show css
codeRouter.get('/:id/css', auth.isAuthenticated, (req, res) => {
    CSS.find({}, (err, allCss) => {
        res.render('cssview.ejs', {
            allCss
        });
    });
});
codeRouter.get('/:id/cssview', auth.isAuthenticated, (req, res) => {
    CSS.findById(req.params.id, (err, foundCss) => {
        res.render('showCss.ejs', {
            css: foundCss
        });
    });
});

// Show html
codeRouter.get('/:id/html', auth.isAuthenticated, (req, res) => {
    HTML.find({}, (err, allHtml) => {
        res.render('htmlView.ejs', {
            allHtml
        });
    });
});
codeRouter.get('/:id/htmlview', auth.isAuthenticated, (req, res) => {
    HTML.findById(req.params.id, (err, html) => {
        res.render('showHtml.ejs', {
            html
        });
    });
});
// Show Devtools
codeRouter.get('/:id/devtool', auth.isAuthenticated, (req, res) => {
    DEV.find({}, (err, allDev) => {
        res.render('devView.ejs', {
            allDev
        });
    });
});
codeRouter.get('/:id/devtoolview', auth.isAuthenticated, (req, res) => {
    DEV.findById(req.params.id, (err, dev) => {
        res.render('showDev.ejs', {
            dev
        });
    });
});

module.exports = codeRouter;