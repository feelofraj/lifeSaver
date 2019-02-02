var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(8083,function(res,err){
    if(err)console.error('Error starting server');
    console.log('Server started and listening : http://localhost:8083' )
})
