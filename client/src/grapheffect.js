import React from 'react';

var s;

export default class GraphEffect extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        s = document.createElement('script');
        s.src = "graph.js";
        s.async = true;

        let chart = document.createElement('canvas');
        chart.id = 'myChart';
        document.getElementById('chart-container').appendChild(chart);
        this.div.appendChild(s);
    }
    
    componentWillUnmount() {
        document.getElementById('chart-container').removeChild(document.getElementById('myChart'));
        this.div.removeChild(s);
    }

    render() {
        return (
            <div ref={el => (this.div = el)} >
            </div>
        );
    }     
}


