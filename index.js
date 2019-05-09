const SerialPort = require('serialport')
const Regex = require('@serialport/parser-regex')
const port = new SerialPort('/dev/ttyUSB0')

//Play sound from node (playsound)
//var player = require('play-sound')(opts = {})

const play = require('audio-play');
const load = require('audio-loader');

load('./ping.mp3').then(play);

/* Parse the raw data
const parser = port.pipe(new Regex({ regex: /[\r\n]+/ }))
parser.on('data', function(data) {
    if(data < 'R015') {

        console.log('Data: ' + data + ' is smaller than R015');

        //load('ping.mp3').then(play);

        // $ mplayer foo.mp3

    }
}); */
 
