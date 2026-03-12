const db = require('../db');

exports.getData = (table) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ??', [table], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
