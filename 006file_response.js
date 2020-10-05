var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>Read file utility!!!!</h1>")
    var filenameObject = url.parse(request.url, true).query
    console.log(filenameObject)
    console.log("File name: " + JSON.stringify(filenameObject))

    var filename = filenameObject.filename
    console.log(filename)
    console.log("--------------");
    console.log(typeof(filename));
    console.log("--------------");
    fs.readFile(filename, 'utf8', function(err, data){
        if(err){
            throw err
        }    
        console.log(data)
        response.write(data)
        response.end()
        //console.log("fs thread end");
    })
    //console.log("http thread end");

}).listen(1234)