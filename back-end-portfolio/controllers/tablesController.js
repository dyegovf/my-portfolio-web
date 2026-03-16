const tablesService = require('../services/tablesService');

exports.getTables = async (req, res) => {
    try {
        tables = await tablesService.getTables();
        res.json(tables);
    } catch (err) {
        res.status(500).send(err);
    }
};