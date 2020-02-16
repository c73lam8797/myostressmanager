import React from 'react';
import Typography from '@material-ui/core/Typography';

class HomePage extends React.Component {
    constructor (props){
        super (props);
        this.state={stressed:false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({stressed:!state.stressed}));
    }
    
    render() {
        return (
            <div >
                <button onClick={this.handleClick} type = "submit">{this.state.stressed? 'Not Stressed':'Stressed'}?</button>

                <Typography variant="h6" gutterBottom>
                    <p style={{fontFamily: 'Montserrat', color: 'white'}}> You are currently... </p>
                </Typography>
                <h3 className="stressed" style={{fontFamily: 'Montserrat', backgroundColor: this.state.stressed? 'rgba(240,91,28,0.3)':'rgba(116, 169, 255, 0.3)'}}>{this.state.stressed? 'Stressed':'Not Stressed'}</h3>
            </div>
        )
    }
};



export default HomePage