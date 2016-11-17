var express = require('express');

var app = express();

app.use(express.static('app'));
var port = 3000;
app.listen(port,function(){
  console.log(port);
});