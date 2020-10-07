var express = require('express')
var ejs = require('ejs')  //this is optional
var https = require('https')

//initialize the express app
var app = express()
//set view engine
app.set('view engine', 'ejs')
//set the folder where all views are present!
app.set('views', __dirname + '/templates')
console.log(__dirname + '/templates');

app.get('/', function(req, res){
    res.render('home')
})

app.get('/contact/:name', function(req, res){
    console.log(req.params.name)
    res.render('profile', {name: req.params.name})
})

//serve static pages from public folder!
app.use(express.static('public'))

//use rest client to communicate with external middlewares
app.get('/remote/users/', function(req, res){
    console.log("Get data from remote rest api!!!!")
    https.get('https://jsonplaceholder.typicode.com/users/' , function(response){

        let data = ''      

        response.on('data', function(dataPacket){
           data += dataPacket
        })   

        response.on('end', function(){
           console.log(JSON.parse(data)) 
           res.json(JSON.parse(data))
        })



    })
})



app.listen(8080)