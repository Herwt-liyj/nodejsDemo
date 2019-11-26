
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'runoob' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
// CREATE TABLE IF NOT EXISTS `class`(
//     `runoob_id` INT UNSIGNED AUTO_INCREMENT,
//     `runoob_title` VARCHAR(100) NOT NULL,
//     `runoob_author` VARCHAR(40) NOT NULL,
//     `submission_date` DATE,
//     PRIMARY KEY ( `runoob_id` )
//  )ENGINE=InnoDB DEFAULT CHARSET=utf8;