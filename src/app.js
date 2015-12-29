'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

//Sets view engine to jade.
app.set('view engine', 'jade');

// Sets express to look for views in the /templates directory.
app.set('views', __dirname + '/templates');

//Creates a server request.
app.get('/', function (req, res) {
  //Tells express to render index file in the given app.set's above (/templates).
  res.render('index');
});

app.get('/blog/:title?', function (req, res) {
  var title = req.params.title;
  if (title === undefined) {
    res.status(503)
    res.send("Sorry, This page is under construction.");
  } else {
      var post = posts[title];
      // Renders post where post is called on the post.jade template.
      res.render('post', { post: post });
    }
});

//tells server request to listen on '3000'.
app.listen(7000, function () {
  console.log('*** The frontend server is running on port (7000) ***');
});
