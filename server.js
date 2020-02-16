// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize app with express server
const app = express();
const port = process.env.PORT || 5000;

// MongoDB database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server, {
  origins: '*:*',
  handlePreflightRequest: (req, res) => {
      const headers = {
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
          "Access-Control-Allow-Credentials": true
      };
      res.writeHead(200, headers);
      res.end();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express!!' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// const users = require('./routes')(express);
// app.use('/routes/', users);

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const arduinoPort = new SerialPort('/dev/ttyACM0');
const parser = arduinoPort.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', (read) => {
    // storage.push(data);
    // console.log(storage.length);
    // console.log(read);
    let today = new Date();
    io.sockets.emit('sensor', {
      date: today.getDate()+"-"
      +today.getMonth()+1+"-"
      +today.getFullYear(), 
      time: (today.getHours())+":"
      +(today.getMinutes()), 
      read:read}); //emit date i.e. {date, time, read} to all connected clients.
});

io.on('connection', (socket) => {
  console.log("New client connected."); //log to console as new clients connect
})