const  fs= require('fs');
const request = require("request");
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
readIP('./ip.json',function(err,data) {
    if(err) {
        console.log('error')
    }

    if(data) {
        console.log("ip-list",data)
    }
})
readIP();