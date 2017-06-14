// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./modules/index');
var songs = require('./modules/songs');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// index has been required --> now we need to use it
app.use('/', index);
// songs has been required --> now we need to use it
app.use('/songs', songs);

// globals
var port = process.env.PORT || 7890;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});
