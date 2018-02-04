var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
// var db = require('./db/db');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

// CONNECT TO DB
// mongoose.connect('mongodb://localhost/nihao');

// GET INFO
app.get('/lessons', function(req, res) {
    res.send('Lesson 1: hello world!');
});

app.listen(8000);
console.log('Server started!');
