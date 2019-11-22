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
    /* 插入数据 */
    // db.collection("class").insertMany(studentArray,function(err) {
    //     if(err) {
    //         console.log('insertMany failed');
    //         return 
    //     }
    // })
    console.log('insert success')
    // client.close()
    // innsertDoc(db,function() {
    //     client.close()
    // })
    /* 更新 */
    // db.collection('class').update({id:2},{$set:{"name":"updatedTestJackMa"}},{multi:true},function(err,res) {
    //     if(err) throw err;
    //     console.log(res.result.nModified + " 条文档被更新");
    // })
    /* 查询 id为升序 */
    db.collection("class").find({}).sort({id:-1}).toArray( function(err,result) {
        if(err) throw err;
        console.log('find result:',result);
    })
    /* 删除 */
    // db.collection('class').deleteMany({id:2},function(err,obj) {
    //     if(err) throw err;
    //     console.log(obj.result.n + " 条文档被删除");
    // })

    /* 查询 id为降序*/
    db.collection("class").find({}).sort({id:1}).toArray( function(err,result) {
        if(err) throw err;
        console.log('ended result:',result);
    })

    /* 查询 分页 id为降序*/
    db.collection("class").find({}).skip(3).limit(2).sort({id:-1}).toArray( function(err,result) {
        if(err) throw err;
        console.log('降序 分页 result:',result);
    })
    // https://blog.csdn.net/harleylau/article/details/77899223
    /* 连接操作*/
    db.collection("orders").aggregate([
        {
            // $lookup:{
            //     from:"class2",         //右集合
            //     localField:"id",       //左集合字段 当前键，product中的键
            //     foreignField:'sid',  //右集合字段 外链接的查询的键，product中的_id的值等于 orders中pid的值为查询条件，生成重新赋值到order_list里面
            //     as: "class_list"   //新生成字段
            // }
            // $match:{
            //     id:{ $gte:1, $lte:4}
            // }
            $project:{
                ordername:1,
                pid:1
            }
        }
    ]).toArray( function(err,result) {
        if(err) throw err;
        console.log('连接操作 result:',result);
        console.log('字符串化：',JSON.stringify(result));
    })

    /* save 替换当前已有的文档 */
    // var documents = { _id: "5dd647126c88e36af5ce88a1",
    //     id: 2222222222,
    //     name: '22updatedTestJackMa',
    //     age: 25 };
    // db.collection('class').save(documents)
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