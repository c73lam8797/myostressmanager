const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0');

let storage = [];  // storage array to hold data read from serial port

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', (data) => {
    storage.push(data);
    console.log(storage.length);
    console.log(data);
});

// // Require the serialport node module
// const serialport = require('serialport');
// const SerialPort = serialport.SerialPort;

// // Open the port
// const port = new SerialPort("/dev/ttyACM0", {
//     baudrate: 9600,
//     parser: serialport.parsers.Readline("\n")
// });

// // Read the port data
// port.on("open", function () {
//     console.log('open');
//     port.on('data', function(data) {
//         console.log(data);
//     });
// });