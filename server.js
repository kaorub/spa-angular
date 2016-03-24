var express = require("express");
var app = express();
var port = 3000;

app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.listen(port);
console.log(__dirname, "Listening on port")