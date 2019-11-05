const  fs= require('fs');
const qs = require("querystring");

function readIP(path, callback) {
    fs.readFile(path, function(err,data) {
        if(err) {
            callback(err)
        }else {
            try {
                data = JSON.parse(data);
                callback(null,data)
            } catch(error) {
                callback(error)
            }
        }

    })
}
readIP('./demo-cheerio/file/ip.json',function(err,data) {
    if(err) {
        
        console.log('error',err)
    }

    if(data) {
        console.log("ip-list",data)
    }
})
