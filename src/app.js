'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();

//Creates a server request.
app.get('/', function (req, res) {
  res.send("<h1>Im creating my first express app! Looking good</h1>");
});

app.get('/blog', function (req, res) {
  res.send(posts);
});

app.get('/blog/:title', function (req, res) {

  var title = req.params.title;
  var post = posts[title];
  res.send(post);
});

//tells server request to listen on '3000'.
app.listen(3772, function () {
  console.log('*** The frontend server is running on port (3772) ***');
});
