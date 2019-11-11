const http = require("http");

const fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })

    var data = fs.readFileSync("./demo-cheerio/http/home.html");

     res.write(data);
    res.end();
})

server.listen(3000, function () {
    console.log("listening port 3000")
})