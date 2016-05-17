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
function left_pause() {
    rpio.write(pins[2],rpio.LOW);
    rpio.write(pins[3],rpio.LOW);
}
function right_pause() {
    rpio.write(pins[0],rpio.LOW);
    rpio.write(pins[1],rpio.LOW);
}
function right_forward(){
    rpio.write(pins[0],rpio.HIGH);
    rpio.write(pins[1],rpio.LOW);
}

var motor = {
    "forward": function(){
        left_forward();
        right_forward();
    },
    "backward": function(){
        left_backward();
        right_backward();
    },
    "left": function() {
        left_backward();
        right_forward();
    },
    "right": function() {
        left_forward();
        right_backward();
    },
    "start": function() {
        pins.forEach(function(pin){
            rpio.open(pin,rpio.OUTPUT,rpio.LOW);
        });
    },
    "pause": function () {
        pins.forEach(function(pin){
            rpio.write(pin,rpio.OUTPUT,rpio.LOW);
        });
    },
    "stop": function() {
        pins.forEach(function(pin){
            rpio.close(pin);
        });
    }
};

module.exports = motor;
