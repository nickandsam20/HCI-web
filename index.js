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

app.get('/assets/img/pp1.png', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/pp1.png'));
});

app.get('/assets/img/pp2.png', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/pp2.png'));
});

app.get('/assets/img/pp3.png', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/pp3.png'));
});

app.get('/assets/img/demo.gif', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/demo.gif'));
});

app.get('/assets/img/affinity_map.jpg', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/assets/img/affinity_map.jpg'));
});

app.get('/js/scripts.js', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/js/scripts.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});