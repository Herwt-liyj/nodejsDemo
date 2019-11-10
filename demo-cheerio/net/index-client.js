const net = require("net");

//创建客户端
var client = net.Socket();

client.connect(18001,'127.0.0.1', function() {
    console.log('client: connect the server--- ')
})