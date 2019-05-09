const SerialPort = require('serialport')
const Regex = require('@serialport/parser-regex')
const port = new SerialPort('/dev/ttyUSB0')

var Sound = require('node-aplay');

// Parse the raw data
const parser = port.pipe(new Regex({ regex: /[\r\n]+/ }))
parser.on('data', function(data) {
    if(data < 'R015') {

	new Sound('piano-e.wav').play();

        console.log('Data: ' + data + ' is smaller than R015');
    }
});
 
