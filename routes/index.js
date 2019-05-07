var express = require('express');
var router = express.Router();


const IndexController = require('../Controllers/index');
/* GET home page. */
router.get('/', IndexController.index);

router.get('/table-user', IndexController.table_user);

router.get('/table-book', IndexController.table_book);

router.get('/charts', IndexController.chart);

module.exports = router;
