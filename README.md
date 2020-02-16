## Inspiration

This system provides a tool for users to manage their stress better. Often times, when we are stressed, we are unaware of the tension we hold in our hands, or lack the ability to alleviate it. With the MyoWare sensor, our system allows users to be notified when they are stressed based on the amount of tension held in their hands. The display of the measured data allows users to receive a visual representation of what they are feeling, which encourages awareness of their stress.

## Technologies

We built this full stack web app with the **M**ongoDB, **E**xpress, **R**eact, **N**ode.js stack. This allowed us to integrate front-end, back-end, and database components together as one cohesive system. We also utilized an **Arduino** board with a muscle sensor and coded in C++.

### Libraries

- React
- Express
- Material-UI
- Chart.js
- Mongoose
- SerialPort
- Socket.io

## How it works

First, the muscle sensor is attached to the user's arm and the sensor data is transferred via the Arduino to the server side of the app through the Node.js SerialPort library. Then, using the Socket.io library, which detects web sockets and enables bidirectional communication between clients and servers, the sensor data is continously transfereed to the front-end. Using the Chart.js library, a plot to display the data was created. The plot dynamically updates as long as sensor data continously transfers from the back-end to the front-end. The back-end of the web app is built upon the Express library for Node.js. The front-end of the web app is built with React which enabled us to create a single page application with dynamic rendering capabilities.

### Current Features

**Stress detection**
- Arduino + Muscle Sensor + C++ Program

**Stress plotter**
- Arduino -> Node.js + Express + Socket.io -> React + Chart.js

**Destress music recommendations**
- Embedded Spotify play button frames

### Planned Features

**Music search**
- API calls to query and get playlists/albums/songs the user can search for and then embedding the respective Spotify play button frame

**User login along with stored stress data which they can access, view, add comments**
- MongoDB integration with web app with RESTful API

**Machine learning models for descriptive and predictive analytics regarding stress levels**
- Utilizing JS libraries such as TensorFlow.JS for machine learning models OR writing scripts in Python with its vast realm of Data Science libraries to build the models and then transfering results/visuals over to the web app