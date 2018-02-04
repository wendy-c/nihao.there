var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var data = require('./lessons.json');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../dist')));

// CONNECT TO DB
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  // need to build schema - waiting on Wendy
  lesson: Number,
  title: String,
  levels: [{
    eng: String,
    chi: String,
    gif: String[],
    audio: String[]
  }]
});

var Lesson = mongoose.model('Lesson', lessonSchema)

Lesson.collection.insertMany(data, function (err, r) {
  if (error) {
    console.error(error);
  } else {
    console.log(r.insertedCount + " has been saved!");
  }
});

// GET INFO
app.get('/lessons', function (req, res) {
  Lesson.find({}, function (err, lesson) {
    res.send(lesson);
  });
});

app.listen(8000);
console.log('Server started!');
