const express = require('express');
const router = express.Router();
const db = require('../db');

const tablesController = require('../controllers/tablesController');
const dataController = require('../controllers/dataController');


router.get('/tables', tablesController.getTables);
router.get('/data/:table', dataController.getData);

module.exports = router;