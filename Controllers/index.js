var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:'quanlysach',
  });
  connection.connect();

exports.index = function(req, res, next) {
  connection.query('select * from quanlydonhang', function(error, result, fields){
    if(error) throw error;
    res.render('index', { data: result });
  });
  }

exports.table_user = function(req, res, next) {
  connection.query('select * from khachhang', function(error, result, fields){
    if(error) throw error;
    res.render('table_user', { khachhang: result });
  });
}
  
exports.table_book = function(req, res, next) {
  connection.query('select * from khosach', function(error, result1, fields){
    if(error) throw error;
    connection.query('select * from spbanchay', function(error, result2, fields){
      if(error) throw error;
      res.render('table_book', { khosach: result1, banchay: result2 });
    });
  });
}

exports.chart =  function(req, res, next) {
  res.render('charts', { title: 'Express' });
}