#!/usr/bin/env node
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Post = require('./api/models/postModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.33.10/Posts');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Application started on: ' + port);
