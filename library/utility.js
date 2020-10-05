var currentDate = function(){
    return new Date()
}

var currentDay = function(){
    return new Date().getDay()
}


var currentTime = function(){
    var cd = new Date()
    var ct = cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds() + ":" + cd.getMilliseconds()
    return ct
}



exports.getMyDate = currentDate
exports.getMyDay = currentDay
exports.getMyTime = currentTime