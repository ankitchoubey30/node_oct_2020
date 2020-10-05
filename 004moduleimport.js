var customModule = require('./library/utility')


function useLibrary(){
    console.log(customModule.getMyDate() + "ds");
    console.log(customModule.getMyDay());
    console.log(customModule.getMyTime());
}


useLibrary()