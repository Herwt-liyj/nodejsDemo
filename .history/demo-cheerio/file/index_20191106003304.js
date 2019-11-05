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