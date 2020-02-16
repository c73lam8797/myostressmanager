if (typeof socket === 'undefined') {
    var socket = io.connect('http://localhost:5000'); //connect to server
}
else {
    socket.off('sensor', null);
    socket.close();
    socket = io.connect('http://localhost:5000');
}

if (typeof ctx === 'undefined') {
    var ctx = document.getElementById('myChart').getContext('2d');
}
else {
    ctx = document.getElementById('myChart').getContext('2d');
}

if (typeof chart === 'undefined') {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: "Electric Potential of the Muscle",
                borderColor: "#FF5733",
                data: [],
                fill: false,
                pointStyle: 'circle',
                backgroundColor: '#3498DB',
                pointRadius: 5,
                pointHoverRadius: 7,
                lineTension: 0,
            }]
        },
        options: {}  // Configuration options go here  
    });
}
else {
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [],
            datasets: [{
                label: "Electric Potential of the Muscle",
                borderColor: "#FF5733",
                data: [],
                fill: false,
                pointStyle: 'circle',
                backgroundColor: '#3498DB',
                pointRadius: 5,
                pointHoverRadius: 7,
                lineTension: 0,
            }]
        },
        options: {}  // Configuration options go here  
    });
}

try {
    socket.on('sensor', function(data) { //As sensor data is received 
        // console.log(data.read);
        let sensor = data.read.split(" ");
        // console.log(sensor[2]);
        // document.getElementById('date').innerHTML = data.date; //update the date
        if(chart.data.labels.length != 15) { //If we have less than 15 data points in the graph
            chart.data.labels.push(data.time);  //Add time in x-asix
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(sensor[2]); //Add sensor data in y-axis
            });
        }
        else { //If there are already 15 data points in the graph.
            chart.data.labels.shift(); //Remove first sensor data
            chart.data.labels.push(data.time); //Insert latest sensor data
            chart.data.datasets.forEach((dataset) => {
                dataset.data.shift(); //Remove first sensor data
                dataset.data.push(sensor[2]); //Insert latest sensor data
            });
        }
        chart.update(); //Update the graph.
        });
}

catch(error){
    console.error(error);
    socket.off('sensor', null);
    throw new Error("stop script");
}


