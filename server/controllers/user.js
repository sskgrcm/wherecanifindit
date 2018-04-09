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
        res.status(200).render('profile', {user});
    },
    getLogin(req, res) {
        if (req.isAuthenticated()) {
            res.redirect('home');
        } else {
            res.status(200).render('login');
        }
    },
};
