var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/table-user', function(req, res, next) {
  res.render('table_user', { title: 'Express' });
});

router.get('/table-book', function(req, res, next) {
  res.render('table_book', { title: 'Express' });
});

router.get('/charts', function(req, res, next) {
  res.render('charts', { title: 'Express' });
});

module.exports = router;
