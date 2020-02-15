import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

class HomePage extends React.Component {
    // isStressed(){
    //     const isStressed = 
    // }

    state = {
        stressed: false,
    }

    handleSubmit(){

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type = "submit">Stressed</button>
                </form>
                <Typography variant="h6" gutterBottom>
                    You are currently...
                </Typography>
            </div>
        )
    }
};



export default HomePage