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
            <div>
                <button onClick={this.handleClick} type = "submit">{this.state.stressed? 'Not Stressed':'Stressed'}?</button>

                <Typography variant="h6" gutterBottom>
                    You are currently...
                </Typography>
                <p>{this.state.stressed? 'Stressed':'Not Stressed'}</p>
            </div>
        )
    }
};



export default HomePage