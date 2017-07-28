var express = require('express');
var router = express.Router();
var db = require('./db');
/*新建一个require*/
var mysql =require('mysql'); 
/*在主页获取新闻时的请求*/
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;
  /*连接数据库*/ 
  var connection = mysql.createConnection(db);
  	
  /*连接*/
  connection.connect();
  connection.query('SELECT * FROM `news` WHERE `newstype` = ?',[newstype],function(err,rows,fields){
  	console.log(rows);
    
  	
  	res.json(rows);
  });
   
});

module.exports = router;
