const models = require('../models');

module.exports = {
    async getHome(req, res) {
        // Get shows
        const shows = await models.Show.findAll({
            where: {
                provider: 'Netflix',
            },
        });
        res.status(200).render('home', {shows});
    },
};
