const express = require('express')
const app = express()

app.get('/index.js', function(req, res){
  res.sendFile(__dirname + '/index.js');
});

app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/style.css');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))