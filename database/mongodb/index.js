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
    title:"nodejs",
    author:"node mongo db",
    content:"node.js is great!",
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