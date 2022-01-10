const admin = require('../models/admin')

function isAdminAuthenticated(req, res, next){
    if(!req.session.admin) return res.redirect('/login/admin');
    else return next();
}

function handleLoggedInadmin(req, res, next) {
    if(!req.session.admin) {
        res.locals.admin = null;
        return next();
    }
    admin.findById(req.session.admin, (err, admin) => {
        req.admin = admin;
        delete req.admin.password
        res.locals.admin = req.admin;
        next();
    })
}


module.exports = {
    isAdminAuthenticated,
    handleLoggedInadmin
};