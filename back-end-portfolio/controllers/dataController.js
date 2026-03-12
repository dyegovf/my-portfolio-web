const dataService = require('../services/dataService');

exports.getData = async (req, res) => {
  try {
    const table = req.params.table;
    const data = await dataService.getData(table);
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
