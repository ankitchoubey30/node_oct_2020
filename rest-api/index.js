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

app.get('/friends/get/:id', function(req, res){
    console.log(req.params);
    var query = "select * from friends where id = " + req.params.id
    connection.query(query, function(err, result){
        if(err)
            throw err
         
        res.json(result)    
    })
    
})



app.post('/friends/add', function(request, response){
    console.log(request);
    console.log(request.body);
    var name = request.body.name
    var location = request.body.location
    var score = request.body.score

    var query = "insert into friends (name, location, score) values('" +name +"', '" + location + "','" + score + "')"  
    console.log(query);
    connection.query(query, function(err, success){
        if(err){
            throw err
        } 
        console.log(success);
        response.send("Success!!!!")
    })
    //response.send("Received request body!!!!")
} )

app.delete('/friends/delete/:id', function(req, res){

    var query = "delete from friends where id= " + req.params.id
    connection.query(query, function(err, success){
        if(err){
            throw err
        } 
        console.log(success);
        res.send("Delete Success!!!! for id: " + req.params.id)
    })
})

app.put('/friends/update/:id', function(req, res){

    var newfriend = req.body
    console.log(req.params.id);
    console.log(newfriend);
    var query = "update friends set name = '" + newfriend.name + 
                "', location='" + newfriend.location + 
                "',score='" + newfriend.score + 
                "' where id = " + req.params.id
    console.log(query);            
    connection.query(query, function(err, success){
        if(err){
            throw err
        }
        console.log("Id updated: " + req.params.id);
        res.send("Id updated: " + req.params.id)

    })

})






app.listen(9876)
