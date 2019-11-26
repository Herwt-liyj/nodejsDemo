const mysql = require("mysql");

//创建连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: "student"
})

//连接mysql

connection.connect(function (err) {
    if (err) {
        console.error('error connecting :' + err.stack);
        return
    }
    console.log(' connected as id : ' + connection.threadId)
})

//end() 终止一个连接
// connection.end()

//destory() 也可以终止连接，立即终止底层套接字，不会触发更多的事件和回调函数
// connection.destroy();

//查询
connection.query('SELECT * FROM class', function (err, rows) {
    if (err) throw err;
    console.log('rows : ', rows)
})

/* 创建表 */
var addTable = "CREATE TABLE person(id int,name varchar(255),total varchar(255))"
// connection.query(addTable,function(err,result) {
//     if(err) {
//         console.log('addTable error : ' + err);
//         return;
//     }

//     console.log('-----------insert-----------')
//     console.log('addTable Id', result);
//     console.log('-----------------------------\n\n')
// })

/* 插入数据 */
var addSql = 'INSERT INTO person(id, name,total) VALUES(?,?,?)';
var addSqlParams = [1, 'Jack', '100'];
// connection.query(addSql,addSqlParams,function(err, result) {
//     if(err) {
//         console.log('insert error : ' + err);
//         return;
//     }

//     console.log('-----------insert-----------')
//     console.log('insert Id', result);
//     console.log('-----------------------------\n\n')
// })

/* 更新数据 */
var updateSql = 'UPDATE person SET name = ?, total = ? WHERE id = ?';
var updateSqlParms = ['Forrest', '1000',0];
connection.query(updateSql, updateSqlParms, function (err, result) {
    if (err) {
        console.log('UPAGE error : ' + err);
        return;
    }

    console.log('-----------UPAGE-----------')
    console.log('UPAGE Id', result);
    console.log('-----------------------------\n\n')
})

//查询
connection.query('SELECT * FROM person', function (err, rows) {
    if (err) throw err;
    console.log('opertions end  rows : ', rows)
})
