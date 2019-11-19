/**
 * mongoose模块是基于node-mongodb-native开发的MongoDB的nodejs驱动，
 * 同样使用node-mongodb-native这个原生MongoDB驱动对数据进行相应的操作
 * https://github.com/mongodb/docs
 * 
 * */
const mongoose = require("mongoose");

const url = 'mongodb://admin:admin@localhost:27017/article?authSource=admin';

mongoose.connect(url,function(err) {
    if(err) {
        console.log('connect failed');
        console.log(err);
        return;
    }
    console.log('connect success')
})

//定义Schema
const ArticleSchema = new mongoose.Schema({
    title:String,
    author:String,
    content:String,
    publishTime:Date
});

mongoose.model('Article',ArticleSchema);
const Article = mongoose.model('Article');

var art = new Article({
    title:"java",
    author:"java mongo db",
    content:"java is great!",
    publishTime: new Date()
})

/* 将文档插入到集合中 */
/* art.save(function(err){
    if(err) {
        console.log('save failed');
        console.log(err);
        return;
    }
    console.log('save success')
}) */

/* 查询mongoDB */
Article.find({}, function(err, docs) {
    if(err) {
        console.log('error '+err)
        return;
    }
    console.log("result :" + docs)
})
/* 查找条件 */
Article.find({title:'nodejs'}, function(err, docs) {
    if(err) {
        console.log('error '+err)
        return;
    }
    console.log("result nodejs:" + docs)
})
/* 修改update */
Article.find({title:'nodejs'}, function(err, docs) {
    if(err) {
        console.log('error '+err)
        return;
    }
    console.log("result nodejs:" + docs)
    //update
    // docs[0].title ="alibaba node.js ";
    // docs[0].save();

    console.log('update result', docs);

    //删除数据
    // if(docs) {
    //     docs.forEach(function(e) {
    //         e.remove();
    //     })
    // }
    console.log('remove result', docs);
})