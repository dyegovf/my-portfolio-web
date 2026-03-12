const express = require('express');
const router = express.Router();
const db = require('./db');


router.get('/tables', (req, res) => {

  db.query('SHOW TABLES', (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tables = results.map(r => Object.values(r)[0]);   
    res.json(tables);
  });
});


router.get('/data/:table', (req, res) => {
  const table = req.params.table;
  db.query('SELECT * FROM ??', [table], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

module.exports = router;