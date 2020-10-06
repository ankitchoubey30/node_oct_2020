var mysql =  require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'socialfeed'

})

connection.connect(function(error){
    if(error){
        throw error
    }
    console.log("Connected to MySQL Database!!!!");
    var sql_create_table = "create table friends (id int(8), name varchar(32), location varchar(32))"
    connection.query(sql_create_table, function(error, success){
        if(error){
            throw error
        }
        console.log("Created table - friends!!!!");
    })

})


/* connection.connect(function(error){
    if(error){
        throw new Error("Not able to connect to server!!!!")
    }
    console.log("Connected to MySQL Server");
    connection.query("create database testsocialfeed1", function(error, success){
        if(error){
            throw error
        }
        console.log("Database created!!!!");
    } )
}) */