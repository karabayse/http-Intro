var express = require('express');
var router = express.Router();

var songs = [];
var temp = {
  song: 'mmmBop',
  artist: 'Hanson'
};
songs.push(temp);
var temp = {
  song: 'mmm mmm mmm',
  artist: 'Crash Test Dummies'
};

router.get('/', function(req, res){
  res.send(songs);
});

module.exports = router;
