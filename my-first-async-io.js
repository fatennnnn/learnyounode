const fs = require('fs')
var content = fs.readFile(process.argv[2],function(err,data){ 
    if (err)
{    console.log('error');
}     
// var test=data.toString().split('\n');
console.log(data.toString().split('\n').length-1)
}
)