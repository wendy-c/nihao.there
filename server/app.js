var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var db = require('./db/db');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

// CONNECT TO DB
mongoose.connect('mongodb://localhost/mvp');

// GET INFO
app.get('/lessons', function(req, res) {
    res.send('Lesson 1: hello world!');
});

// SEARCH QUERY
app.post('/search', function(req, res) {
  console.log('something posted', req.body);
  var find = req.body.query;
    db.find({text: {$regex: find, $options: 'g'}}, function(err, data) {
      if (data.length !== 0) {
        console.log('query from DATABASE!');
        res.send(data);
      } else {
        console.log("add the query to db!")
      }
    });
    // res.send(arr);
});

app.listen(8000);
console.log('Server started!');