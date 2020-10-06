var express = require('express')
var bodyparser = require('body-parser')
var mysql = require("mysql")


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'socialfeed'
})

//use conenction object to connect to database
connection.connect(function(error){
    if(error){
        throw error
    }
    console.log("Connected to database - socialfeed");
})


var app = express()

app.use(bodyparser.json())


app.get('/', function(request, response){
    response.send('Hello from node and express!!!!')
})

app.get('/friends/all', function(request, response){
    var query = "select * from friends"
    connection.query(query, function(err, success){
        if(err){
            throw err
        } 
        console.log(success);
        response.json(success)
    })
   
})

app.post('/add', function(request, response){
    console.log(request);
    console.log(request.body);
    response.send("Received request body!!!!")
} )



app.listen(9876)
