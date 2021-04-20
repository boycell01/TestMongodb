const MongoClient = require('mongodb').MongoClient

// 数据库名称
const dbName = 'nodejsBook'

// 链接URL
const url = 'mongodb://localhost:27017'

//创建MongoClient客户端
const client = new MongoClient(url)

// 使用链接方法连接到服务器
client.connect(function(err) {
    if(err) {
        console.error('error end:' + err.stack)
        return
    }

    console.log("成功链接到服务器")

    const db = client.db(dbName)
    
    

    // insertDocuments(db, function(err,result){
    //     if(err) {
    //         console.log("插入失败！！！")
    //         return
    //     }
    //     console.log(result)
    // })

    findDocuments(db, function(err, result){
        if(err) {
            console.error("err :" + err.stack)
        }
        console.log(result)
        console.log("-----------------------------------")
    })

    findDocumentsByAuthorName(db, "WayLau", function(err, result) {
        if(err) {
            console.error("err :" + err.stack)
        }
        console.log(result)
        console.log("-----------------------------------")
    })

    // updateDocument(db, function(err,result) {
    //     if(err) {
    //         console.error("err :" + err.stack)
    //     }
    //     console.log(result)
    //     console.log("-----------------------------------")
    // })
    // updateDocuments(db, function(err,result) {
    //     if(err) {
    //         console.error("err :" + err.stack)
    //     }
    //     console.log(result)
    //     console.log("-----------------------------------")
    // })
    removeDocument(db, function(err, result) {
        if(err) {
            console.error("err :" + err.stack)
        }
        console.log(result)
        console.log("-----------------------------------")
    })

    client.close()
})

// 向文档中插入数据
const insertDocuments = function(db, callback) {
    //获取集合
    const book = db.collection('book')
    // 插入文档

    book.insertMany([
        {title:"Spring Boot 企业级应用开发实战",price:98,press:"北京大学出版社",author:{age: 30, name:"WayLau"}},
        {title:"Spring Cloud 微服务架构开发实战",price:79,press:"北京大学出版社",author:{age: 31, name:"WayLau"}},
        {title:"Spring5 案例大全",price:119,press:"北京大学出版社",author:{age: 33, name:"WayLau"}},
    ], function(err, result) {
        console.log("已经插入文档，响应结果是：")
        // console.log(result)
        callback(err,result)
    })

}

// 查询所有的文档
const findDocuments = function(db, callback) {
    // 获取集合
    const book = db.collection('book')

    // 查询文档
    book.find({}).toArray(function(err, result){
        console.log("查询所有文档，结果如下：")
        callback(err, result)
    })
}

// 根据条件查询
const findDocumentsByAuthorName = function(db, authorName, callback) {
    // 获取集合
    const book = db.collection('book')

    // 查询文档
    book.find({"author.name":authorName}).toArray(function(err, result){
        console.log("根据作者查找文档，结果如下：")
        callback(err, result)
    })
}

// 修改文档
const updateDocument = function(db, callback) {
    // 获取集合
    const book = db.collection('book')

    // 修改文档
    book.updateOne(
        {"author.name": "WayLau"},{$set:{"author.name": "zzm"}}, function(err, result){
            console.log("修改单个文档，结果如下：")
            callback(err, result)
        })

}

// 修改多个文档
const updateDocuments = function(db, callback) {
    // 获取集合
    const book = db.collection('book')

    // 修改文档
    book.updateMany(
        {"author.name": "WayLau"},{$set:{"author.name": "zzm"}}, function(err, result){
            console.log("修改多个文档，结果如下：")
            callback(err, result)
        })

}

// 删除单个文档
const removeDocument = function(db, callback) {
    // 获取集合
    const book = db.collection('book')

    // 删除文档
    book.deleteOne(
        {"author.name": "zzm"}, function(err, result){
            console.log("删除单个文档，结果如下：")
            callback(err, result)
        })

}

// 删除多个文档
const removeDocuments = function(db, callback) {
    // 获取集合
    const book = db.collection('book')

    // 删除文档
    book.deleteMany(
        {"author.name": "zzm"}, function(err, result){
            console.log("删除多个文档，结果如下：")
            callback(err, result)
        })

}






