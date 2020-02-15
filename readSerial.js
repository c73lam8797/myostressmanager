const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0');

// let storage = [];  // storage array to hold data read from serial port

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', (data) => {
    // storage.push(data);
    console.log(storage.length);
    console.log(data);
});