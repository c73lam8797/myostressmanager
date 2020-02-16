import React from 'react';
import useScript from './useScript';

var s = document.createElement('script');
s.src = "graph.js";
s.async = true;

export default class GraphEffect extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.div.appendChild(s);
    }
    
    componentWillUnmount() {
        this.div.removeChild(s);
    }

    render() {
        return (
            <div ref={el => (this.div = el)} >
                <p>Test</p>
            </div>
        );
    }     
}


