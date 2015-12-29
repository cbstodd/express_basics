'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

//Creates a server request.
app.get('/', function (req, res) {
  res.send("<h1>Im creating my first express app!</h1>");
});

app.get('/blog/:title?', function (req, res) {
  var title = req.params.title;
  if (title === undefined) {
    res.status(503)
    res.send("Sorry, This page is under construction.");
  } else {
      var post = posts[title];
      res.send(post);
    }
});

//tells server request to listen on '3000'.
app.listen(7000, function () {
  console.log('*** The frontend server is running on port (7000) ***');
});
