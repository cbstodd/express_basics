'use strict';

var express = require('express');

var app = express();

//Creates a server request.
app.get('/', function (req, res) {
  res.send("<h1>I love learning to code.</h1>");
});

//tells server request to listen on '3000'.
app.listen(3000, function () {
  console.log('-- The frontend server is running on port (3000) --');
});
