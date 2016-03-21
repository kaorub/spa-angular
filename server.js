var express = require("express");
var app = express();
var port = 3000;

app.use('/', express.static(__dirname + '/public'));
// app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + '/scripts'));
// app.all(/^\/.*/, function (req, res) {
//     res.send('Hello');
// });
app.listen(port);
console.log(__dirname, "Listening on port")