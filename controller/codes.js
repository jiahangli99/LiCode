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

// Update JS

codeRouter.put('/:id/javascriptcode', (req, res) => {
    JavaCode.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    },
    (err, updatedCode) => {
        res.redirect('/')
    }
    )
});

// Update CSS
codeRouter.put('/:id/cssview', (req, res) => {
    CSS.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    },
    (err, updatedcss) => {
        res.redirect('/')
    }
    )
})

// Update Html

codeRouter.put('/:id/htmlview', (req, res) => {
    HTML.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    },
    (err, updatedHtml) => {
        res.redirect('/')
    }
    )
})

// Update Dev

codeRouter.put('/:id/devtoolview', (req, res) => {
    DEV.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    },
    (err, updatedDev) => {
        res.redirect('/')
    }
    )
})


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

// Edit JS
codeRouter.get('/61d8dba87557c55c5353fa7f/javascript/:id/edit', admin.isAdminAuthenticated, (req, res) => {
    JavaCode.findById(req.params.id, (err, update) => {
        res.render('jsEdit.ejs', {
            code: update
        })
    })
})

// Edit Css

codeRouter.get('/61d8dba87557c55c5353fa80/css/:id/edit', admin.isAdminAuthenticated, (req, res) => {
    CSS.findById(req.params.id, (err, update) => {
        res.render('cssEdit.ejs', {
            css: update
        })
    })
})

// Edit Html

codeRouter.get('/61d8dba87557c55c5353fa81/html/:id/edit', admin.isAdminAuthenticated, (req, res) => {
    HTML.findById(req.params.id, (err, update) => {
        res.render('htmlEdit.ejs', {
            html: update
        })
    })
})

// Edit Dev

codeRouter.get('/61d8dba87557c55c5353fa82/devtool/:id/edit', admin.isAdminAuthenticated, (req, res) => {
    DEV.findById(req.params.id, (err, update) => {
        res.render('devToolEdit.ejs', {
            dev: update
        })
    })
})

// Show javascript
codeRouter.get('/:id/javascript', auth.isAuthenticated, (req, res) => {
    console.log(req.session.admin)
    JavaCode.find({}, (err, allJavascriptCodes) => {
        res.render('javascriptView.ejs', {
            scriptCodes: allJavascriptCodes,
            admin: req.session.admin
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
            allCss,
            admin: req.session.admin
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
            allHtml,
            admin: req.session.admin
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
            allDev,
            admin: req.session.admin
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