const user = require('./user');
const userController = require('../controllers/user');
const showsController = require('../controllers/shows');

module.exports = (app, passport) => {
    app.get('/', userController.ensureAuthenticated, showsController.getHome);
    app.get('/login', userController.getLogin);
    // Facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
        {successRedirect: '/', failureRedirect: '/login'}));
    app.use('/user', user);
};
