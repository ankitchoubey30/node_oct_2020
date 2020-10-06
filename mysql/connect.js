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
    //var sql_create_table = "create table friends (id int(8), name varchar(32), location varchar(32))"
    //var sql_insert_values = "insert into friends (id, name, location) values (4, 'cas','chennai')) "
    var sql_insert_values = "insert into friends (id, name, location) values ? "
    var multiple_values = [
        [1, 'obb', 'chennai'],
        [2, 'bnp', 'ahmedabad'],
        [3, 'owioh', 'japan'],
        [4, 'mlann', 'bengaluru']
    ]
    connection.query(sql_insert_values, [multiple_values] ,function(error, success){
        if(error){
            throw error
        }
        //console.log("Created table - friends!!!!");
        console.log("Multiple values insert success in friends!!!!");
    })


    var select_query = "select id,name, location from friends"
    connection.query(select_query, function(error, success){
        if(error){
            throw error
        }
        //console.log("Created table - friends!!!!");
        console.log("Rows received from table!!!!");
        console.log(success);
        console.log(JSON.stringify(success));
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