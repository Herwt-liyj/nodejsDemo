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
readIP('./demo-cheerio/file/weather.json',function(err,data) {
    if(err) {
        
        console.log('error',err)
    }

    if(data) {
        console.log("ip-list",data)
        let weatherArr=data;
        let output=[];
        const weather = readIP('./demo-cheerio/file/weather.json',function(err,data) {
            if(data) {
                weatherArr=data;
            }
        })
        weatherArr.forEach((item)=> {
            output.push({
                ip:item.ip,
                city:item.region,
                weather:item.weather
            })
        })
        fs.writeFile('./demo-cheerio/file/output.json',JSON.stringify(output,null,''),function(err,data) {
            if(data) {
                console.log('write ok')
            }
        })

    }
})
