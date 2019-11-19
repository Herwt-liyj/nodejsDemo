const MongoClient = require('mongodb').MongoClient;
const Db = require("mongodb").Db;
const Server = require('mongodb').Server;
const studentDbClient = new MongoClient(new Server('localhost', '27017'), {
    user: 'admin',
    password: 'admin',
    authSource: 'admin'
});

const assert = require('assert');

//定义数据
var student = {
    id: 1,
    name: 'jackMa',
    age: 15
}
var studentArray = [
    {
        id: 2,
        name: 'jackMa2',
        age: 25
    },
    {
        id: 3,
        name: 'jackMa3',
        age: 35
    },
    {
        id: 4,
        name: 'jackMa4',
        age: 45
    }
]
const url = 'mongodb://localhost:27017';
const innsertDoc = function(db,callback) {
    const collection = db.collection('documents');
    collection.insertMany(studentArray,function(err, result) {
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3, result.ops.length);
        console.log('插入3条数据');
        callback(result);
    })
}
MongoClient.connect(url,function(err, client) {
    if(err) {
        console.log('connect failed')
        console.log(err);
        return;
    }
    console.log('connect success');
    const db = client.db('student');
    innsertDoc(db,function() {
        client.close()
    })
})

/* 打开数据库 */
// studentDbClient.connect(function (err, client) {
//     if (err) {
//         console.log('open failed')
//         console.log(err);
//         return;
//     }
//     console.log('connect:', client.db)
//     const collection = client.db('student').collection('student-class')

//     collection.insertOne(student).then(() => {
//         collection.insertMany(studentArray)
//     }).catch(err => {
//         console.error(err)
//     })


//     // https://github.com/mongodb/node-mongodb-native/blob/7298c76e2a1b1b2e37a211860f35f84fad5a4c3b/CHANGES_3.0.0.md
//     //打开集合 最新文档API已经过期
//     // db.collection('student', function (err, collection) {
//     //     if (err) {
//     //         console.log('collection error ')
//     //         studentDbClient.close();
//     //     }

//     //     //插入文档
//     //     collection.insertOne(student, function (err, docs) {
//     //         //关闭数据库
//     //         studentDbClient.close();
//     //         if (err) {
//     //             console.log('documnet  failed')
//     //             console.log(err);
//     //             return;
//     //         }

//     //         console.log(docs[0])
//     //     })
//     // })

// })



//定义mongoDB地址
// const url = 'mongodb://localhost:27017/student';
/* 连接数据库 */
// MongoClient.connect(url,function(err, db) {
//     if(err) {
//         console.log('connect failed')
//         console.log(err);
//         return;
//     }

//     console.log('connect success');
// })