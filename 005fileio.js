var fs = require('fs')

//console.log(fs)
console.log("File read will start");

try {
    fs.readFileSync("myfile.txt", function(err, data){
        console.log("File read started!");
        if (err){
            throw err 
        }
        console.log(data)
        console.log(data.toString() )
        console.log("File read in progress");
    })
    
} catch (err) {
    console.log("In catch block file");
    console.log(err);
}

console.log("File read is done");

console.log("File2 read will start");

try {
    fs.readFileSync("myfile2.txt", function(err, data){
        console.log("File2 read started!");
        if (err){
            throw err 
        }
        console.log(data)
        console.log(data.toString() )
        console.log("File2 read in progress");
    })
    
} catch (err) {
    console.log("In catch block file2");
    console.log(err);
}

console.log("File2 read is done");

/* //console.log(fs)
console.log("File2 read will start");
fs.readFile("myfile2.txt", function(err, data){
    console.log("File2 read started!");
    if (err){
        throw err 
    }
    console.log(data)
    console.log(data.toString() )
    console.log("File2 read in progress");
})

console.log("File2 read is done");
 */
