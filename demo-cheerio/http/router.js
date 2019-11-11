const http = require("http");

const fs = require("fs");

const url = require("url");

const path = require("path");

const mime = require('./mime');


var server = http.createServer(function (req, res) {
    console.log("req url :",req.url)
    var filePath = '.' + url.parse(req.url).pathname;
    console.log(filePath)
    console.log(url.parse(req.url).pathname)

    if (filePath === "./") {
        filePath = "./home.html";
    }

    fs.exists(filePath, function (exist) {
        console.log(exist)
        if (exist) {
            var data = fs.readFileSync(filePath);
            var contentType = mime[path.extname(filePath)];
            console.log("ext :" + path.extname(filePath))
            res.writeHead(200, {
                'content-type': contentType
            })
            res.write(data);
            res.end();
        } else {
            res.end("404")
        }
    })





})

server.listen(3000, function () {
    console.log("listening port 3000")
})