var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'lannguyenit598',
    database:'quanlysach',
  });
  connection.connect();


const IndexController = require('../Controllers/index');
/* GET home page. */
router.get('/', IndexController.index);

router.get('/table-user', IndexController.table_user);

router.get('/table-book', IndexController.table_book);

router.get('/table_book' ,function(req,res,next){
       res.render('/table_book');
})
router.post('/table-book', function(req, res, next){
    connection.query('INSERT INTO khosach SET ?',req.body,function(err,rs){
        res.redirect('/table-book');
    })
});

router.get('/delete',function(req,res,next){
    connection.query('DELETE FROM khosach WHERE id = ?',req.query.id,function(err,rs){
        res.redirect('/table-book');
    })
})

router.get('/detail-account' ,function(req,res,next){
    res.render('/detail-account');
})

router.get('/forgot-password' ,function(req,res,next){
    res.render('/forgot-password');
})

router.get('/login' ,function(req,res,next){
    res.render('/login');
})

router.get('/register' ,function(req,res,next){
    res.render('/register');
})

router.get('/charts', IndexController.chart);


module.exports = router;
