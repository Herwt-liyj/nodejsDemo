const net = require('net');

var server = net.createServer(function(socket) {
    //监听data事件

    socket.on('data',function(data){
        console.log(data.toString())
    })

    var address = server.address();
    var message = 'client ,the server address is   : ' + JSON.stringify(address);
    // console.log("post："+ address.port)
    // console.log("address："+ address.address)
    // console.log("family："+ address.family)

    //发送数据
    socket.write(message,function() {
        var writeSize = socket.bytesWritten;
        console.log(message + ' has send')
        console.log( 'the size of message is ' + writeSize)
    })

    //接受数据
    socket.on('data',function(data){
        console.log(data.toString('utf-8'))
        var readSize = socket.bytesRead;
        console.log( 'the size of data is ' + readSize)
    })

    //socket 其他属性
    /* 
    * socket.localPort 本地端口号的地址
    * socket.localAddress 本地IP地址
    * socket.remotePort  远程端口地址
    * socket.remoteFamily 远程IP协议族
    * socket.remoteAddress  远程IP地址
    */

    console.log("本地端口号的地址 ： "+ socket.localPort)
    console.log("本地IP地址 ： "+ socket.localAddress)
    console.log("远程端口地址 ： "+ socket.remotePort)
    console.log("远程IP协议族 ： "+ socket.remoteFamily)
    console.log("远程IP地址 ： "+ socket.remoteAddress)
})


server.listen(18001,function() {
        console.log("server is listerning")
})