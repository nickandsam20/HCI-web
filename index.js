var express = require('express');
var app = express();
var path = require('path');
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/dist/index.html'));
 console.log("html");
 
});
app.get('/css/styles.css', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/css/styles.css'));
});

app.get('/assets/img/face.jpg', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/face.jpg'));
});
app.get('/assets/img/demo.png', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/demo.png'));
});

app.get('/js/scripts.js', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/js/scripts.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});