var myhttp  = require('http')
var url = require('url')

var myhttpserver = myhttp.createServer(function(request, response){
    
    console.log(request.url);
  
    var queryparam = url.parse(request.url, true).query
    console.log(queryparam);
    var q1 = queryparam.name
    var q2 = queryparam.location
    var q3 = queryparam.tech
    var q4 = queryparam.framework

    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h3>Name:" + q1 +  "</h3>")
    response.write("<h3>Location:" + q2 +  "</h3>")
    response.write("<h3>Technology:" + q3 +  "</h3>")
    response.write("<h3>Framework:" + q4 +  "</h3>")
    response.write(JSON.stringify(queryparam))
    response.write("<h1>Hello from node http server with nodemon!!!!</h1>")
    response.end()
}).listen(1234)

