var myhttp  = require('http')

var myhttpserver = myhttp.createServer(function(request, response){
    //console.log(request)
    //console.log("###################request end#####################");
    console.log(request.url);
    //console.log(response);
    //console.log("###################response end#####################");
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>Hello from node http server with nodemon!!!!</h1>")
    response.end()
}).listen(1234)

//var myhttpserver = myhttp.createServer(myserverFunction)

/* function myserverFunction(request, response){
    console.log(request)
    console.log("###################request end#####################");
    console.log(response);
    console.log("###################response end#####################");
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>Hello from node http server</h1>")
    response.end()
}
 */
//myhttpserver.listen(8888)
