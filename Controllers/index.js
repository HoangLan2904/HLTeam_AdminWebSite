exports.index = function(req, res, next) {
    res.render('index', { title: 'Admin Page' });
  }

exports.table_user = function(req, res, next) {
    res.render('table_user', { title: 'Admin Page' });
  }

exports.table_book = function(req, res, next) {
    res.render('table_book', { title: 'Express' });
  }

exports.chart =  function(req, res, next) {
    res.render('charts', { title: 'Express' });
  }