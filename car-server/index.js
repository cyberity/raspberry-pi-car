// Setup basic express server
var express = require('express');
var app = express();
var car = require('./car.js');
var server = require('http').createServer(app);
var io = require('../..')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
//app.use(express.static(__dirname + '/public'));


io.on('connection', function (socket) {

  socket.on('start', function (data) {
      car.start();
  });
  socket.on('forward', function (data) {
      car.forward();
  });
  socket.on('pause', function (data) {
      car.pause();
  });


  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
      car.stop();
  });
});
