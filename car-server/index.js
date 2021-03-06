// Setup basic express server
var express = require('express');
var app = express();
var motor = require('./motor-sim.js');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
//app.use(express.static(__dirname + '/public'));


io.on('connection', function (socket) {

  socket.on('motor', function (data) {
      motor[data]();
  });
  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
      motor.stop();
  });
});
