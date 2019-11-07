const net = require('net');

var server = net.createServer(function(socket) {
    console.log("someone connects")

    //设置最大连接数
    server.maxConnections = 3;
    server.getConnections(function(err,count) {
        console.log('count :' + count);
    })
})


//eg1、设置监听端口
// server.listen(18001,function() {
//     console.log("server is listening")
// })

//eg2、设置监听端口
server.listen(18001);

server.on('listening',function() {
    console.log('listening callback  server is listerning')
    var address = server.address();

    // console.log("post："+ address.port)
    // console.log("address："+ address.address)
    // console.log("family："+ address.family)
    


})
server.on('close',function() {
    console.log('close server net')    
})

server.on('connection',function() {
    console.log('connection')
})

server.on("error",function(error) {
    console.log(error);
})