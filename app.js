const express = require('express');
const app = express();
const mockFile = require("./mockData.json");

app.get('/index.js', function(req, res){
  res.sendFile(__dirname + '/index.js');
});

app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/style.css');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/getData', function(req, res){
  res.json(mockFile);
});

app.listen(3000, () => console.log('App listening on port 3000!'));
