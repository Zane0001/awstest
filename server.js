var express = require('express');
var path = require('path');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, 'app.html'));
})

app.get('/app.css',function(req,res){
	res.sendFile(path.join(__dirname,'app.css'));
})

app.get('/service.html',function(req,res){
	res.sendFile(path.join(__dirname, 'service.html'));
})

app.get('/contact.html',function(req,res){
	res.sendFile(path.join(__dirname, 'contact.html'));
})

app.get('/who.html',function(req,res){
	res.sendFile(path.join(__dirname, 'who.html'));
})

app.get('/login.html',function(req,res){
	res.sendFile(path.join(__dirname, 'login.html'));
})

app.get('/img/img1.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'/img/img1.jpg'));
})
server.listen(3000, function() {
    console.log('run on 3000!')
});
