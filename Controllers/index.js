var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'lannguyenit598',
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

// exports.addbook = function(req, res, next) {
//   req.assert('txtID', 'Name is required').notEmpty()        
//   req.assert('txtName', 'Name is required').notEmpty()           
//   req.assert('txtNCC', 'A valid NCC is required').notEmpty()  
//   req.assert('txtGiaBan', 'Name is required').notEmpty()           
//   req.assert('txtSoLuong', 'A valid NCC is required').notEmpty()  
//   var errors = req.validationErrors()
     
//   if( !errors ) {   //No errors were found.  Passed Validation!
         
     
//         var book = {
//             MAKHO: req.sanitize('txtID').escape().trim(),
//             tenSP: req.sanitize('name').escape().trim(),
//             nhaCungCap: req.sanitize('txtNCC').escape().trim(),
//             gia: req.sanitize('txtGiaBan').escape().trim(),
//             soLuong: req.sanitize('txtSoLuong').escape().trim()
//         }
         
//      connection.query('INSERT INTO khosach SET ?', book, function(err, result) {
//                 //if(err) throw err
//                 if (err) {
//                     req.flash('error', err)
                     
//                     res.render('/index')
//                 } else {                
//                     req.flash('success', 'Data added successfully!');
//                     res.redirect('/table-book');
//                 }
//             })
//     }
//     else {   //Display errors to user
//         var error_msg = ''
//         errors.forEach(function(error) {
//             error_msg += error.msg + '<br>'
//         })                
//         req.flash('error', error_msg)        
//         res.render('table-book')
//     }
// }



exports.chart =  function(req, res, next) {
  res.render('charts', { title: 'Express' });
}