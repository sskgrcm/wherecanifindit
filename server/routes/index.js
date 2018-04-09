const user = require('./user');
const userController = require('../controllers/user');
const showsController = require('../controllers/shows');

module.exports = (app, passport) => {
    app.use('/user', user);
    app.get('/', userController.ensureAuthenticated, showsController.getHome);
    // Facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
    {successRedirect: '/', failureRedirect: '/login'}));
};
