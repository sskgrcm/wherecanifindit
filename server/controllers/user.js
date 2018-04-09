const models = require('../models');
// const sequelize = require('sequelize');
// const Op = sequelize.Op;

module.exports = {
    ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('login');
        }
    },
    getProfile(req, res) {
        const user = models.user.findOne({where: {id: req.user.id}});
        res.render('profile', {user});
    },
};
