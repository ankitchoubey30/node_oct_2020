var express = require('express')
var bodyparser = require('body-parser')


var app = express()

app.use(bodyparser.json())


app.get('/', function(request, response){
    response.send('Hello from node and express!!!!')
})

app.get('/all', function(request, response){
    response.send('Get list of all friends!!!!')
})

app.post('/add', function(request, response){
    console.log(request);
    console.log(request.body);
    response.send("Received request body!!!!")
} )



app.listen(9876)
