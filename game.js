const express = require('express');
const path = require('path');
const Phaser = require('phaser');

var app = express();

var PORT = 8000;

window.onload = function() {
  var game = new Phaser.Game();
}

app.get('/', function(req, res) {
    res.sendFile('views/game.html', {root: __dirname })
});

var server = app.listen(PORT, function() {
  console.log("Server is running on port:" + PORT)
});
