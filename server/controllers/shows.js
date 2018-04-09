
module.exports = {
    getHome(req, res) {
        // Get shows
        res.status(200).render('home');
    },
};
