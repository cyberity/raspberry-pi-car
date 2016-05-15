var rpio = require('rpio');
var pins = [11,12,13,15];

function left_backward(){
  rpio.write(pins[2],rpio.HIGH);
rpio.write(pins[3],rpio.LOW);
}
function left_forward(){
  rpio.write(pins[2],rpio.LOW);
rpio.write(pins[3],rpio.HIGH);
}
function right_backward(){
rpio.write(pins[0],rpio.LOW);
rpio.write(pins[1],rpio.HIGH);
}
function pause() {
rpio.write(pins[0],rpio.LOW);
rpio.write(pins[1],rpio.LOW);
rpio.write(pins[2],rpio.LOW);
rpio.write(pins[3],rpio.LOW);
}
function right_forward(){
rpio.write(pins[0],rpio.HIGH);
rpio.write(pins[1],rpio.LOW);
}
function forward(){
left_forward();
right_forward();
}
function backward(){
left_backward();
right_backward();
}

function left() {
  left_backward();
  right_forward();
}
function right() {
  left_forward();
  right_backward();
}
function start() {
pins.forEach(function(pin){
  rpio.open(pin,rpio.OUTPUT,rpio.LOW);
});
}
function stop() {
pins.forEach(function(pin){
  rpio.close(pin);
});
}
module.exports = function(app) {
  app.get('/start', function(req, res) {
    start();
  });
  app.get('/stop', function(req, res) {
    stop();
  }); 
  app.get('/forward', function(req, res) {
    forward();
  });
  app.get('/backward', function(req, res) {
    backward();
  });
  app.get('/left', function(req, res) {
    left();
  });
  app.get('/right', function(req, res) {
    right();
  });
  app.get('/pause', function(req, res) {
    pause();
  });
}
